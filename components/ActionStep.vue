<script setup lang="ts">
import type { ActionDefinition } from '~/types/domain'
defineProps<{ step: ActionDefinition; index: number }>()
</script>
<template>
  <article class="step-card" :class="`kind-${step.kind}`">
    <div class="step-index">{{ index }}</div>
    <div class="step-content">
      <h3>{{ step.title }}</h3>
      <p>{{ step.body }}</p>
      <a v-if="step.officialUrl" class="official-link" :href="step.officialUrl" target="_blank" rel="noopener noreferrer">
        {{ step.officialLabel || '打开官方入口' }} ↗
      </a>
      <p class="source-mini">依据：{{ step.sourceIds.join('、') }}</p>
    </div>
  </article>
</template>
