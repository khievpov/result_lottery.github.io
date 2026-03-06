<script setup>
import { useresultlotteryStore } from 'src/stores/resultlottery'
import { onMounted } from 'vue'
const state = useresultlotteryStore()
onMounted(() => {
  AOS.init({ once: true })
  state.init()
})
</script>

<template>
  <slot>
    <router-view />
  </slot>
</template>
