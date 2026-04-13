import { api } from 'src/boot/axios'
import { defineStore } from 'pinia'

export const useserver = defineStore('server', {
  state: () => ({
    Lotterymvn: [],
    Loading: false,
    error: null,
  }),

  actions: {
    async fetchlotterymvn() {
      this.loading = true
      this.error = null
      try {
        return await api.get('wss://sary24.net/live_results?id=B-44LooWmS-8WQg-HJateQ')
      } catch (error) {
        this.error = 'Failed to fetch data lottery'
      } finally {
        this.loading = false
      }
    },
  },
})
