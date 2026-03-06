<script setup>
import { resultLotteryStore } from 'src/stores/resultlottery'
import { onMounted } from 'vue'
const store = resultLotteryStore()
onMounted(() => {
  store.getResultLotterys()
})
</script>
<template>
  <div class="q-pa-md">
    <h1>Live Lottery Results</h1>
    <div v-if="store.Loading">Loading...</div>
    <!-- <div v-else>
      <div v-for="(result, index) in store.getResultLotterys" :key="index">
        <h2>{{ result.lottery }}</h2>
        <p>{{ result.numbers }}</p>
      </div>
    </div> -->
  </div>
</template>
<style scoped></style>
