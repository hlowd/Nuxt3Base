
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
      ],
      piniaPersistedstate: {
        cookieOptions: {
          sameSite: 'strict',
        },
        storage: 'localStorage',
      },
})
