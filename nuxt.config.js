import webpack from 'webpack';

export default {
  mode: 'universal',
  generate: {
    dir: '../dist'
  },
  // Target: https://go.nuxtjs.dev/config-target
  //  壓縮圖片 https://squoosh.app/editor
  target: 'static',
  router: {
    // base: '/sugardaddyDevelop/dist/',
    // base: '/dist/',
    middleware: ['auth'],
  },
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  head: {
    titleTemplate: '%s',
    title: '鳳飛飛',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title'  , content: '鳳飛飛'},
      { hid: 'og:image' , property: 'og:image' , content: 'icon.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      // { hid: 'og:url' , property: 'og:url' , content: ''},
      { hid: 'description', name: 'description', content: '鳳飛飛' },
      { hid: 'og:description' , property: 'og:description' , content: '鳳飛飛'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/revoulation.css' },
      { rel: 'stylesheet', href: '/css/plugins.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/custom.css' },

      // { rel: 'icon', type: 'image/x-icon', href: '/dist/favicon.ico' },
      // { rel: 'stylesheet', href: '/dist/css/bootstrap.min.css' },
      // { rel: 'stylesheet', href: '/dist/css/revoulation.css' },
      // { rel: 'stylesheet', href: '/dist/css/plugins.min.css' },
      // { rel: 'stylesheet', href: '/dist/css/style.css' },
      // { rel: 'stylesheet', href: '/dist/css/custom.css' },
    ],
    script: [
      { src: '/js/vendor/vendor.min.js' },
      { src: '/js/plugins.min.js' },
      { src: '/js/revolution.tools.min.js' },
      { src: '/js/revolution.extension.min.js' },

      // { src: '/js/main.js' },
      // { src: '/js/revoulation.js' },
      // { src: '/js/custom.js' }

      // { src: '/dist/js/vendor/vendor.min.js' },
      // { src: '/dist/js/plugins.min.js' },
      // { src: '/dist/js/revolution.tools.min.js' },
      // { src: '/dist/js/revolution.extension.min.js' },

      // { src: '/dist/js/main.js' },
      // { src: '/dist/js/revoulation.js' },
      // { src: '/dist/js/custom.js' }
    ]
  },
  // publicRuntimeConfig: {
  //   recaptcha: {
  //     hideBadge: true,
  //     siteKey: process.env.RECAPTCHA_SITE_KEY,
  //     version: 3,
  //   }
  // },
  script: [
    { src: 'https://www.google.com/recaptcha/api.js?render=reCAPTCHA_6LfZwN0gAAAAABAMKIjG-aS32OCl90qYNFWa6LIY' }
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/sfpro/sfpro.css',
    // 'swiper/swiper-bundle.css',
    // 'swiper/css/swiper.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui',
    '~/plugins/echarts',
    '~/plugins/axios',
    '~/plugins/moments',
    { src: '~/plugins/gtag'},
    { src: '~plugins/vue-quill-editor.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // proxy https://tiahi5914.medium.com/前端筆記-nuxt-js使用axios跨域請求代理配置-解決cors問題-75564fe5780
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Better would be from 'process.env.API_KEY' and with '.env' file
    version: 3, // Or 3
  },
  axios: {
    baseUEL: process.env.API_URL,
    // withCredentials: true,
    // init(axios) {
    //   axios.defaults.withCredentials = true
    // }
  },
  // proxy: {
  //   '/sweetNets': {
  //     target: 'https://aece-61-228-205-40.jp.ngrok.io/',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/sweetNets': '',
  //     },
  //   }
  // },
  auth: {
    strategies: {
      // cookie 作法
      // cookie:{
      //   cookie: {
      //     name: 'facedk',
      //   },
      //   endpoints: {
      //     login: {
      //       url: '/auth/login',
      //       method: 'post'
      //     },
      //     logout: {
      //       url: '/auth/logout',
      //       method: 'get'
      //     },
      //     user: {
      //       url: '/users',
      //       method: 'get',
      //       property: 'data'
      //     }
      //   },
      // },

      // local 作法
      // local: {
      //   token: {
      //     required: false,
      //     type: false
      //   },
      //   cookie: {
      //     name: 'facedk',
      //   },
      //   endpoints: {
      //     login: {
      //       url: '/auth/login',
      //       method: 'post'
      //     },
      //     logout: {
      //       url: '/auth/logout',
      //       method: 'get'
      //     },
      //     user: {
      //       url: '/users',
      //       method: 'get',
      //       property: ''
      //     }
      //   },
      // },

      // token 作法
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/user/myInfo', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login?logout=1',
      callback: '/login',
      home: ''
    },
    // watchLoggedIn: true,
    // rewriteRedirects: false,
    // resetOnError: true,
    localStorage: false,
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 7
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.module.rules.push(
        {
          test: /.js$/,
          exclude: /js/,
          use: 'babel-loader'
        }
      )
      if (!isDev) {
          config.output.publicPath = './_nuxt/'
      }
      return config;
    },
    transpile: ['resize-detector'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      },
      order: 'cssnanoLast'
    },
    vendor: ['vue-lazyload', 'element-ui',"jquery"],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
      })
    ]
  }
}
