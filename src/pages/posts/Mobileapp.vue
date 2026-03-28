<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref, computed } from 'vue'
const store = useapiTest()
const data = ref({})
const times = ref([])
const prizes = ref([])
const posts = ref([])
const activeTab = ref('all')

onMounted(async () => {
  await store.fetchmobileapp().then((rs) => {
    data.value = rs.data.data
    times.value = data.value[0].times
    prizes.value = rs.data.data
    posts.value = rs.data.data || []
    console.log(times.value)
  })
})
</script>

<template>
  <q-card v-for="time in times" :key="time.id" class="q-mb-md" style="max-width: 900px">
    <q-card-section>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="activeTab" class="bg-indigo text-white" narrow-indicator dense>
          <q-tab name="all" icon="mails" label="ទាំងអស់" />
          <q-tab name="active" icon="alarms" label="ចេញម៉ោង 10:00 AM" />
          <q-tab name="inactive" icon="alarms" label="ចេញម៉ោង 12:00 AM" />
        </q-tabs>
      </div>

      <div class="q-pa-sm text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោត</span>
        សម្រាប់ថ្ងៃទី <span>{{ time.date }}</span>
      </div>
    </q-card-section>
    <q-markup-table>
      <thead class="q-pa-sm bg-primary text-h6">
        <tr>
          <th style="color: white" colspan="6">ឆ្នោត-មីងណាម</th>
          <th style="color: white">{{ time.name }}</th>
        </tr>
      </thead>
      <thead class="q-pa-sm text-h6">
        <tr>
          <th style="color: darkblue" colspan="6">ចេញថ្ងៃ</th>
          <th style="color: darkred">{{ time.date }}</th>
        </tr>
      </thead>
      <template v-for="post in time.posts || []" :key="post.id">
        <th>{{ post.date }}</th>
      </template>

      <template v-for="post in time.posts || []" :key="post.id">
        <tr class="bg-primary text-h6">
          <td>
            <span style="color: white"> ប៉ុស្តិ៍ {{ post.name }}</span>
          </td>
        </tr>
        <tbody class="q-pa-sm text-h6">
          <tr v-for="prize in post.prizes || []" :key="prize.prizeId">
            <td colspan="5">
              {{ prize.prizeName }}
            </td>
            <td>
              {{ prize.prize }}
            </td>
            <td>
              <div v-for="val in prize?.values || []" :key="val.index">
                លទ្ធផលឆ្នោត <br /><span class="q-pa-sm text-h5" style="color: darkred">{{
                  val.value
                }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </q-markup-table>
  </q-card>
</template>
