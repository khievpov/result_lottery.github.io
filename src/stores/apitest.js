import { api } from 'src/boot/axios'
import { defineStore } from 'pinia'

export const useapiTest = defineStore('apitest', {
  state: () => ({
    mobileapp: [],
    Loading: false,
    error: null,
  }),

  actions: {
    async fetchmobileapp() {
      this.loading = true
      this.error = null
      try {
        return await api.get(
          'https://lotteryk38.com/api/site/Lottery/results?date=2026%2F03%2F27&typeId=1',
        )
        this.mobileapp = res.data
      } catch (error) {
        this.error = 'Failed to fetch data lottery'
      } finally {
        this.loading = false
      }
    },
  },
})
