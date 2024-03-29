// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', '@nuxtjs/partytown'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    head: {
      title: 'Pushpak Chhajed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Pushpak's Portfolio"
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      script: [{
        type: 'text/partytown',
        defer: true,
        src: 'https://pushpak1300.me/_vercel/insights/script.js'
      }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          media: 'all'
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16*16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', type: 'image/x-icon', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' }
      ]
    }
  },
  components: [
    '~/components',
    {
      path: '~/components/Icons/',
      prefix: 'I'
    },
    {
      path: '~/components/Base/',
      prefix: 'Base'
    }
  ],
  nitro: {
    prerender: {
      routes: ['/about', '/projects']
    }
  }
})
