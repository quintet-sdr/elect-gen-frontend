// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: { Montserrat: { wght: '100..900' } }
  },
  i18n: {
    locales: [{ code: 'en-US', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en-US.ts' }],
    langDir: 'locales',
    defaultLocale: 'en-US',
    strategy: 'no_prefix',
    vueI18n: '~/i18n.config.ts'
  },
  icon: {
    customCollections: [{ prefix: 'local', dir: './assets/icons' }]
  }
})
