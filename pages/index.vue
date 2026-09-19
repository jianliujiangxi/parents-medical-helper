<script setup lang="ts">
useHead({ title: '首页' })
const common = [
  { label: '爸妈长期住在外地', q: { reason:'long_term', stage:'before' } },
  { label: '已经住院但没备案', q: { reason:'temporary', stage:'hospitalized', filingStatus:'none' } },
  { label: '突然在外地急诊', q: { reason:'emergency', stage:'hospitalized' } },
  { label: '已经自费出院了', q: { reason:'temporary', stage:'discharged' } }
]
function linkFor(extra: Record<string,string>) {
  return { path:'/wizard', query: extra }
}
</script>
<template>
  <section class="hero">
    <div class="trust-pill">只依据官方公开规则 · 最后核验 2026-09-19</div>
    <h1>爸妈去外地看病，<br>不知道医保下一步怎么办？</h1>
    <p class="lead">回答几个简单问题，生成一张可以照着办理、转给家人、打印出来的办事清单。</p>
    <div class="hero-actions">
      <NuxtLink class="primary-button" to="/wizard?actor=parent">帮爸妈看看怎么处理</NuxtLink>
      <NuxtLink class="secondary-button" to="/wizard?actor=self">我自己办理</NuxtLink>
    </div>
    <p class="privacy-note">不需要姓名、身份证号、医保号、病历或手机号。</p>
  </section>

  <section class="section-block">
    <h2>常见情况</h2>
    <div class="scenario-grid">
      <NuxtLink v-for="item in common" :key="item.label" class="scenario-card" :to="linkFor(item.q)">{{ item.label }} <span>→</span></NuxtLink>
    </div>
  </section>

  <section class="notice-box">
    <strong>当前 V0.1 重点验证：</strong> 江西参保 → 广州就医。国家统一规则可供其他跨省场景参考，但涉及地方待遇时会明确提示向参保地核验。
  </section>

  <section class="section-block">
    <h2>这不是另一个医保办理系统</h2>
    <p>国家医保平台负责真实备案、查询和结算；本工具只负责把“我家现在这种情况应该先做什么”翻译成清晰步骤，并把你送到正确的官方入口。</p>
    <div class="guide-links">
      <NuxtLink to="/guide/jiangxi-guangzhou-inpatient">江西医保去广州住院怎么办？</NuxtLink>
      <NuxtLink to="/guide/hospitalized-without-filing">已经住院没备案怎么办？</NuxtLink>
      <NuxtLink to="/guide/cross-province-emergency">外地突然急诊怎么办？</NuxtLink>
      <NuxtLink to="/guide/discharged-self-pay">已经自费出院怎么办？</NuxtLink>
    </div>
  </section>
</template>
