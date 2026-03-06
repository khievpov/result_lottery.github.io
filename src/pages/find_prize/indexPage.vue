<script setup>
import { route } from 'quasar/wrappers'
import lottery5D from './lottery5D.vue'
import { api } from 'src/boot/axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import router from 'src/router'

const isloading = ref(true)
const goTo = ref('')
const router = useRouter()
const route = useRoute()
const timeId = route.query.timeId || 0
await api.get('/resultlottery/result/find_prize?timeId=' + timeId).then((res) => {
  if (!res.data._isError) {
    time.value = res.data.data ?? []
    isloading.value = false
    goTo.value = time.value?.pIndex || 0
  }
})

const time = ref({
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
})
</script>

<template>
  <div v-if="!isloading">
    <lottery5D :time="time" v-if="time?.digit == 5" />
  </div>
</template>
