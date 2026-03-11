<script setup>
import { date } from 'quasar'
import { api } from 'src/boot/axios'
import { formatDate } from 'src/boot/function'
import { useresultlotteryStore } from 'src/stores/resultlottery'
import { onMounted, ref } from 'vue'
import PostContainer from './PostContainer.vue'

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
</script>
<template>
  <div class="container lottery-page">
    <div v-if="state.resultloading" class="q-pa-md">
      <div class="col-12 q-pa-md">
        <q-skeleton width="400px" />
      </div>
    </div>
  </div>

  <template>
    <div class="result-title q-pa-md row">
      <div class="col-12 pages-find_prize">
        <q-tabs v-model="state.search.typeId" class="text-primary">
          <q-tab
            v-for="obj in state?.taps"
            :key="obj?.id"
            :label="obj?.name"
            class="q-gutter-y-md q-pa-md"
            @click="onTabClick(obj)"
          >
            <div v-if="state.getLiveStatus(obj?.digit)"></div>
          </q-tab>
        </q-tabs>
        <q-tab-panels
          v-model="state.search.typeId"
          narrow-indicator
          class="q-gutter-y-md q-pa-md"
          v-if="state.search.typeId !== 'all'"
        >
          <q-tab-panel>
            <div v-if="loading && state.search.typeId == tab.id"></div>
            <div v-else>
              <span class="text-6 q-pa-sm">ម៉ោងចេញ:</span>

              <!-- <template> </template> -->
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <div v-if="state.loading" class="q-pa-md">
      <q-skeleton height="800px" />
    </div>
    <div>
      <template v-for="rPost in state.lottery5d?.times" :key="rPost">
        <div class="card-header">
          <h4>{{ $t('lottery5d') }}</h4>
        </div>

        <div class="card-body">
          <div class="lbl-time-price">
            <label>ចេញម៉ោង{{ rPost?.time }}</label>
          </div>
          <div v-if="rPost?.isRunning">
            <span class="flex">
              <span>Live</span>
            </span>
          </div>
          <post-container :time="rPost" />
        </div>
        <div class="card-footer q-pa-md">{{ $t('date') }} {{ search.date }}</div>
      </template>
    </div>
  </template>
</template>
