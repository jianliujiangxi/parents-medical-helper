export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      titleTemplate: '%s · 爸妈异地看病助手',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: '免费、无需注册的跨省异地就医办事导航器。只依据公开官方规则，帮助家属知道下一步怎么做。' }
      ]
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/wizard', '/result', '/sources', '/privacy', '/about',
        '/guide/jiangxi-guangzhou-inpatient',
        '/guide/hospitalized-without-filing',
        '/guide/cross-province-emergency',
        '/guide/discharged-self-pay'
      ]
    }
  },
  typescript: { strict: true, typeCheck: false },
  compatibilityDate: '2025-01-01'
})
