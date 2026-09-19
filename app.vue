<script setup lang="ts">
const { elderMode } = useElderMode()
</script>
<template>
  <div :class="['app-shell', { 'elder-mode': elderMode }]">
    <SiteHeader />
    <main class="page-wrap"><NuxtPage /></main>
    <footer class="footer">
      <p>免费、无需注册、不收集身份证/医保号。仅做办事导航，不替代医保经办机构审核。</p>
      <p><NuxtLink to="/privacy">隐私原则</NuxtLink> · <NuxtLink to="/about">关于项目</NuxtLink></p>
    </footer>
  </div>
</template>
