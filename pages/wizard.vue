<script setup lang="ts">
import type { UserContext } from '~/types/domain'
import { contextToQuery } from '~/engine/query'

useHead({ title: '30秒判断情况' })
const route = useRoute()
const router = useRouter()

const ctx = reactive<UserContext>({
  actor: route.query.actor === 'self' ? 'self' : 'parent',
  insuranceProvince: 'jiangxi', insuranceCity: '',
  destinationProvince: 'guangdong', destinationCity: 'guangzhou',
  insuranceType: 'unknown', reason: 'long_term', careType: 'inpatient',
  stage: 'before', filingStatus: 'unknown', networkStatus: 'unknown'
})

if (typeof route.query.reason === 'string') ctx.reason = route.query.reason as UserContext['reason']
if (typeof route.query.stage === 'string') ctx.stage = route.query.stage as UserContext['stage']
if (typeof route.query.filingStatus === 'string') ctx.filingStatus = route.query.filingStatus as UserContext['filingStatus']

const questions = [
  { key:'actor', title:'这次是帮谁看？', options:[['parent','帮爸妈'],['self','我自己']] },
  { key:'insuranceType', title:'老人参加哪种基本医保？', options:[['employee','职工医保'],['resident','城乡居民医保'],['unknown','不知道']] },
  { key:'reason', title:'为什么要在外省就医？', options:[['long_term','长期在广州生活'],['referral','本地医院建议转外省'],['temporary','临时去外省看病'],['emergency','突然急诊/抢救'],['unknown','说不清']] },
  { key:'careType', title:'这次主要是哪种就医？', options:[['inpatient','住院'],['outpatient','普通门诊'],['chronic','门诊慢特病']] },
  { key:'stage', title:'现在到哪一步了？', options:[['before','还没去/还没住院'],['hospitalized','已经住院/正在就医'],['discharged','已经自费结算出院']] },
  { key:'filingStatus', title:'异地就医备案状态？', options:[['valid','确认有有效备案'],['none','确认没有备案'],['unknown','不知道']] },
  { key:'networkStatus', title:'目标医院是否支持对应跨省直接结算？', options:[['yes','确认支持'],['no','确认不支持'],['unknown','还没查']] }
] as const

const step = ref(0)
const current = computed(() => questions[step.value])
function choose(value: string) {
  ;(ctx as any)[current.value.key] = value
  if (step.value < questions.length - 1) step.value++
  else finish()
}
function finish() {
  router.push({ path:'/result', query: contextToQuery(ctx) })
}
</script>
<template>
  <section class="wizard">
    <div class="progress"><span :style="{ width: `${((step+1)/questions.length)*100}%` }" /></div>
    <p class="progress-text">{{ step+1 }} / {{ questions.length }}</p>
    <h1>{{ current.title }}</h1>
    <p v-if="step === 1" class="helper">不知道也可以选“不知道”，系统不会因此编造报销比例。</p>
    <div class="option-stack">
      <button v-for="opt in current.options" :key="opt[0]" class="option-button" type="button" @click="choose(opt[0])">{{ opt[1] }}</button>
    </div>
    <div class="wizard-nav">
      <button v-if="step>0" class="ghost-button" type="button" @click="step--">← 上一步</button>
      <button class="ghost-button" type="button" @click="finish">直接看结果</button>
    </div>
    <p class="small-muted">初版默认：江西参保、广东广州就医。后续会把参保地/就医地选择做成全国可配置。</p>
  </section>
</template>
