import pkg from './package'
import { createClient } from 'contentful'

// ./nuxt.config.js
import config from './.contentful.json'

const contentfulConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID || config.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN:
    process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
  CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
  CTF_BLOG_POST_TYPE_ID:
    process.env.CTF_BLOG_POST_TYPE_ID || config.CTF_BLOG_POST_TYPE_ID
}

const siteUrl =
  process.env.URL || 'https://hiroshima-u-medical-soccer.netlify.app'

const client = createClient({
  space: contentfulConfig.CTF_SPACE_ID,
  accessToken: contentfulConfig.CTF_CDA_ACCESS_TOKEN
})

const createDynamicRoutes = async () => {
  const [members, results] = await Promise.all([
    client.getEntries({
      content_type: 'image',
      select: 'sys.id',
      limit: 1000
    }),
    client.getEntries({
      content_type: 'result',
      select: 'sys.id',
      limit: 1000
    })
  ])

  return [
    ...members.items.map(member => `/members/${member.sys.id}`),
    ...results.items.map(result => `/results/${result.sys.id}`)
  ]
}

export default {
  env: {
    CTF_SPACE_ID: contentfulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentfulConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentfulConfig.CTF_BLOG_POST_TYPE_ID,
    INSTAGRAM_WIDGET_URL: process.env.INSTAGRAM_WIDGET_URL || ''
  },
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: '広島大学医学部サッカー部',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'google-site-verification',
        content: 'ZzSK9xwE6oF2gR9u4PqNwKPwjEZ1fB-XmbYLwgFn2KI'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: `${siteUrl}/` }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: siteUrl,
    routes: ['/'],
    exclude: [
      '/about',
      '/link',
      '/members',
      '/members/**',
      '/results',
      '/results/**'
    ]
  },
  generate: {
    fallback: '404.html',
    routes: createDynamicRoutes
  },
  /*
   ** Axios module sconfiguration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
