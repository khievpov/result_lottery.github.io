<script setup>
import lottoBall from './lottoBall.vue'
</script>
<template>
  <div class="lottery-result">
    <table v-if="time?.posts" class="flex justify-center">
      <template v-if="post?.prizes?.length > 0">
        <template v-for="(val, i) in postcss.prize[0]?.count" :key="i">
          <lottoBall
            :digit="time.digit"
            :result="post?.prizes.length > 0 ? (post?.prizes[0]?.values[0]?.value ?? '') : ''"
            :is-run="time.isRunning && time.pIndex == post.id"
          />
        </template>
      </template>
      <template v-else>
        <LottoBall :digit="time.digit" :is-run="time.isRunning && time.pIndex == post?.id" />
      </template>
      <template v-if="post.isExpended">
        <div class="lottery-card-custom-lottery">
          <div class=""></div>
        </div>
      </template>
    </table>
  </div>
</template>
