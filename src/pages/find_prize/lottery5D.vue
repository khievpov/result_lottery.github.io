<script setup>
import lottoBall from './lottoBall.vue'

const props = defineProps({
  time: {
    type: Object,
  },
})
</script>

<template>
  <div>
    <div class="find_prize-lottery-5d">
      <div class="title">សម្រាប់ថ្ងៃទី {{ time.date }} ម៉ោង {{ time.time }}</div>
      <div class="result-section">
        <div v-for="(post, i) in time.posts" :key="i">
          <div class="post-container">
            <div class="post-result" :class="'post-result' + i + ''">
              <template
                v-for="(row, index) in post.prizes.filter((prize) => prize.prizeKey === 'prize1')"
                :key="index"
              >
                <template v-for="(item, itemIndex) in row.count" :key="itemIndex">
                  <lottoBall
                    :digit="row.digit"
                    :result="row.values.length > 0 ? row.values[itemIndex].value : ''"
                    :is-run="time.pIndex === post.id && time.isRunning"
                  />
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
