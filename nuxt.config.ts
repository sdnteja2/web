// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],
  site: {
    url: 'https://teja2.vercel.app',
    name: 'SDN TEJA 2',
    description: 'Website resmi SDN Teja 2, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawa Barat',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    documentDriven: true,

    navigation: {
      fields: ['navTitle'],
    },
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp'],
    },
  },
  colorMode: {
    preference: 'dark',
  },
  ui: {
    global: true,
    icons: ['basil', 'ph'],
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Rethink Sans': {
        wght: '400..800',
        ital: '400..800',
      },
      'Work Sans': {
        wght: '100..900',
        ital: '100..900',
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: 'Rethink Sans',
        fallbacks: ['Rethink Sans'],
        fallbackName: 'Rethink Sans',
        src: 'fonts/Rethink_Sans-400_800-1.woff2',
        root: 'assets',
      },
      {
        family: 'Work Sans',
        fallbacks: ['Work Sans'],
        fallbackName: 'Work Sans',
        src: 'fonts/Work_Sans-100_900-5.woff2',
        root: 'assets',
      },
    ],
  },

})
