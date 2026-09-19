<script setup lang="ts">
import { GUIDES } from '~/data/guides'
const route = useRoute()
const guide = computed(() => GUIDES[String(route.params.slug)])
if (!guide.value) throw createError({ statusCode: 404, statusMessage: '指南不存在' })
useHead(() => ({ title: guide.value.title, meta:[{name:'description', content:guide.value.description}] }))
</script>
<template>
  <article class="guide-article" v-if="guide">
    <div class="trust-pill">官方规则整理 · 2026-09-19 核验</div>
    <h1>{{ guide.title }}</h1>
    <p class="lead">{{ guide.description }}</p>
    <ol class="guide-steps"><li v-for="point in guide.points" :key="point">{{ point }}</li></ol>
    <div class="notice-box"><strong>提醒：</strong>本页只给通用行动顺序，具体待遇和材料仍以参保地最新政策为准。</div>
    <NuxtLink class="primary-button" :to="{path:'/wizard',query:guide.query}">用30秒判断我的情况</NuxtLink>
    <p><NuxtLink to="/sources">查看全部官方依据 →</NuxtLink></p>
  </article>
</template>
