<script setup lang="ts">
import sourcesJson from '~/data/sources.json'
import { contextFromQuery } from '~/engine/query'
import { generateGuidance } from '~/engine/path-generator'
import type { OfficialSource } from '~/types/domain'

const route = useRoute()
const ctx = computed(() => contextFromQuery(route.query))
const result = computed(() => generateGuidance(ctx.value))
const sources = sourcesJson as OfficialSource[]
const usedSources = computed(() => sources.filter(s => result.value.sourceIds.includes(s.id)))
const cardRef = ref<HTMLElement | null>(null)
const qrData = ref('')

useHead({ title: '我的异地就医办事清单' })

onMounted(async () => {
  const QRCode = (await import('qrcode')).default
  qrData.value = await QRCode.toDataURL(window.location.href, { width: 160, margin: 1 })
})

async function saveImage() {
  if (!cardRef.value) return
  const { toPng } = await import('html-to-image')
  const dataUrl = await toPng(cardRef.value, { pixelRatio: 2, backgroundColor: '#ffffff' })
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = '爸妈异地看病办事卡.png'
  a.click()
}

function printPage() {
  window.print()
}

async function copyText() {
  const lines = [result.value.title, result.value.summary, '', ...result.value.steps.map((s,i)=>`${i+1}. ${s.title}\n${s.body}`), '', '请以官方最新规则和医保经办机构实际执行为准。']
  await navigator.clipboard.writeText(lines.join('\n'))
  alert('已复制文字版')
}
</script>
<template>
  <section class="result-head">
    <div class="trust-pill">🟢 关键国家规则已核验 · 2026-09-19</div>
    <h1>{{ result.title }}</h1>
    <p class="lead">{{ result.summary }}</p>
    <div class="context-chips">
      <span>江西参保</span><span>广州就医</span><span>{{ ctx.careType === 'inpatient' ? '住院' : ctx.careType === 'outpatient' ? '普通门诊' : '门诊慢特病' }}</span>
    </div>
  </section>

  <div v-if="ctx.reason === 'emergency'" class="urgent-box">急诊抢救情形：先就医。本工具不判断医学上是否属于“急诊抢救”，由医疗机构和医保业务流程确认。</div>

  <section class="steps-list">
    <ActionStep v-for="(step, i) in result.steps" :key="step.id" :step="step" :index="i+1" />
  </section>

  <section class="notice-box">
    <strong>为什么不显示“能报多少”？</strong>
    <p>跨省直接结算遵循“就医地目录、参保地政策、就医地管理”。起付线、支付比例、最高支付限额等主要由参保地政策决定，初版宁可让你去官方核验，也不猜一个比例。</p>
  </section>

  <section class="card-section">
    <h2>把结果带走</h2>
    <div ref="cardRef" class="print-card">
      <h2>爸妈异地看病办事卡</h2>
      <p class="card-sub">江西参保 → 广州就医 · {{ result.title }}</p>
      <ol>
        <li v-for="step in result.steps" :key="step.id"><strong>{{ step.title }}</strong><br><span>{{ step.body }}</span></li>
      </ol>
      <div class="card-bottom">
        <div><strong>最后核验：</strong>2026-09-19<br><small>本工具不替代医保经办机构审核；遇到冲突以官方最新规则为准。</small></div>
        <img v-if="qrData" :src="qrData" alt="当前办事卡二维码">
      </div>
    </div>
    <div class="card-actions no-print">
      <button class="primary-button" type="button" @click="saveImage">保存为图片</button>
      <button class="secondary-button" type="button" @click="copyText">复制文字版</button>
      <button class="secondary-button" type="button" @click="printPage">打印 A4</button>
    </div>
  </section>

  <section class="section-block">
    <h2>官方依据</h2>
    <div class="source-list">
      <a v-for="source in usedSources" :key="source.id" :href="source.url" target="_blank" rel="noopener noreferrer" class="source-card">
        <strong>{{ source.authority }}</strong>
        <span>{{ source.title }}</span>
        <small>{{ source.id }} · 最后核验 {{ source.verifiedAt }}</small>
      </a>
    </div>
  </section>

  <section class="small-muted">
    <p v-for="notice in result.notices" :key="notice">• {{ notice }}</p>
  </section>
</template>
