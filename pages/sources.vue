<script setup lang="ts">
import sourcesJson from '~/data/sources.json'
import factsJson from '~/data/policy-facts.json'
import type { OfficialSource } from '~/types/domain'
useHead({ title: '官方依据' })
const sources = sourcesJson as OfficialSource[]
const facts = factsJson as Array<{id:string;topic:string;fact:string;sourceId:string;article:string;confidence:string}>
</script>
<template>
  <section>
    <h1>官方依据与核验记录</h1>
    <p class="lead">关键规则只引用政府/医保官方来源。内容过期或无法确认时，系统应该提示核验，而不是继续输出确定结论。</p>
    <div class="source-list">
      <a v-for="source in sources" :key="source.id" class="source-card" :href="source.url" target="_blank" rel="noopener noreferrer">
        <strong>{{ source.authority }}</strong><span>{{ source.title }}</span>
        <small>{{ source.id }} · 核验 {{ source.verifiedAt }} · 复核周期 {{ source.reviewIntervalDays }} 天</small>
      </a>
    </div>
    <h2>当前原子规则（{{ facts.length }} 条）</h2>
    <div class="fact-table">
      <div v-for="fact in facts" :key="fact.id" class="fact-row">
        <code>{{ fact.id }}</code><span>{{ fact.fact }}</span><small>{{ fact.sourceId }} · {{ fact.article }}</small>
      </div>
    </div>
  </section>
</template>
