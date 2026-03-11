import { defineStore } from 'pinia'
import { date, Loading } from 'quasar'
import { api } from 'src/boot/axios'

export const useresultlotteryStore = defineStore('resultLottery', {
  state: () => ({
    search: {
      date: date.formatDate(new Date(), 'YYYY/MM/DD'),
      typeId: null,
    },
    today: date.formatDate(new Date(), 'YYYY/MM/DD'),
    lottery5d: {},
    lottoRunner: null,
    timedPrizes: {
      date: date.formatDate(new Date()),
      time: '00:00 AM',
      digit: 5,
      isRunning: false,
      runIndex: 0,
      results: [],
      posts: [
        { name: 'A', results: [] },
        { name: 'B', results: [] },
        { name: 'C', results: [] },
        { name: 'D', results: [] },
        { name: 'E', results: [] },
        { name: 'F', results: [] },
      ],
      prizes: [],
    },
    result: [],
    Loading: true,
    resultloading: true,
  }),

  getters: {
    isRunning: (state) => {
      const resultlotterykeys = ['lottery5d']
      const isAnyresultlotteryRunning = resultlotterykeys.some((key) => {
        const resultlottery = state[key]
        if (!resultlottery) return false
        return Array.isArray(resultlottery.times)
          ? resultlottery.times.some((x) => x.isRunning)
          : Array.isArray(resultlottery.posts)
            ? resultlottery.posts.some((x) => x.isRunning)
            : false
      })
      return isAnyresultlotteryRunning
    },
  },

  actions: {
    getLiveStatus(digit) {
      const lotteryMap = Object.fromEntries(
        [this.lottery5d].filter((obj) => obj && obj.digit).map((abj) => [abj.digit, abj]),
      )

      const result = lotteryMap[digit] ?? null
      if (!result) {
        console.warn('No matching lottery found digit:', digit)
        return false
      }

      return result.time?.some((time) => time.isRunning) || false
    },
    async getresultLotteryResults() {
      try {
        return api
          .get('https://lotteryk38.com/api/site/Lottery/results?date=2026%2F02%2F28&typeId=1')
          .thqen((res) => {
            if (!res.data._isError) {
              this.result = res.data?.data ?? []
              const lotteryMap = this.result.reduce((acc, item) => {
                return acc
              }, {})
              this.lottery5d = lotteryMap.lottery5d || this.lottery5d
              this.Loading = false
              this.resultloading = false
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
})
