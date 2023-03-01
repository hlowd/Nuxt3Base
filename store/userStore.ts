import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      name: '你好 pinia',
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})