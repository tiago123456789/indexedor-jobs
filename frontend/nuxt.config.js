export default {
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-i18n',
  ],

  toast: {
    position: 'top-left',
    duration: 2000
  },

  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          message: {
            error: 'Oops! Occour one error',
            not_found_result_searched: 'Search not found results!'
          },
          home: "Home",
          about: "About",
          btn_load_more: "Load more",
          company: "Company",
          location: "Location",
          extractedAt: "Extracted At",
          btn_apply_job: "Apply job",
          input: {
            placeholder: "Search per title, company or location",
            btn_search: "Search",
            btn_clean: "Clean"
          },
          about_project: "This project have finally centralize the jobs many jobs sites. Prevent work search jobs on many sites.",
          language: {
            english: "English",
            portuguese: "Portuguese"
          }
        },
        pt: {
          message: {
            error: "Oops! Ocorreu um erro!",
            not_found_result_searched: 'Pesquisa não encontrou nenhum resultado!'
          },
          home: "Home",
          about: "Sobre",
          company: "Companhia",
          location: "Local",
          btn_apply_job: "Aplicar para vaga",
          extractedAt: "Extraído em",
          btn_load_more: "Carregar mais",
          input: {
            placeholder: "Buscar por título, companhia ou local",
            btn_search: "Buscar",
            btn_clean: "Limpar"
          },
          about_project: "O projeto tem a finalidade de centralizar os jobs de muitos sites. Evitando trabalho em buscar jobs em vários sites.",
          language: {
            english: "Inglês",
            portuguese: "Português"
          }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
