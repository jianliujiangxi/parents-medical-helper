<script setup lang="ts">
const { elderMode } = useElderMode()
</script>
<template>
  <button class="ghost-button" type="button" @click="elderMode = !elderMode">
    {{ elderMode ? '退出长辈模式' : '👴 长辈模式' }}
  </button>
</template>
