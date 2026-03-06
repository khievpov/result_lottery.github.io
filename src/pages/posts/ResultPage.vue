<script setup>
import { date } from 'quasar'
import { api } from 'src/boot/axios'
import { formatDate } from 'src/boot/function'
import { useresultlotteryStore } from 'src/stores/resultlottery'
import { onMounted, ref } from 'vue'

const state = useresultlotteryStore()
const loading = ref(false)
const showResultTime = ref(false)
const time = ref({
  date: formatDate(new Date()),
  time: '00:00 AM',
  digit: 5,
  isRunning: false,
  runIndex: 0,
  results: [],
  posts: [
    { name: 'A', prizes: [] },
    { name: 'B', prizes: [] },
    { name: 'C', prizes: [] },
    { name: 'D', prizes: [] },
    { name: 'E', results: [] },
    { name: 'F', results: [] },
  ],
  prizes: [],
})

const fetchData = async () => {
  try {
    await api.get('/resultlottery/init').then((Response) => {
      if (!Response.data._isError) {
        Object.assign(state.prizes, Response.data?.data?.prizes)
        state.taps = Response.data?.data?.resultlottery
        state.search.typeId = state?.taps[0].id
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
onMounted(() => {
  fetchData()
  AOS.init({ once: true })
})
</script>
<template>
  <h1>hi</h1>
</template>
