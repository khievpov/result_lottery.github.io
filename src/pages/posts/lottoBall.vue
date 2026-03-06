<script setup>
function getResultIndex(i) {
  let r = props.result ?? ''
  if (r) {
    return r.length >= i ? r[i - 1] : null
  }
  return null
}
const props = defineProps({
  result: {
    type: String,
  },
  digit: {
    type: Number,
    default: 0,
  },
  isRun: {
    type: Boolean,
  },
})
</script>

<template>
  <div class="post-ball" v-for="d in digit" :key="d">
    <span v-if="getResultIndex(d) != null">{{ getResultIndex(d) }}</span>
    <span v-else-if="isRun" class="running"></span>
    <div v-else class="loading"></div>
  </div>
</template>
