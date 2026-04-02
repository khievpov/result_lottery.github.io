<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref, computed } from 'vue'

const store = useapiTest()
const data = ref({})
const times = ref([])
const prizes = ref([])
const posts = ref([])
const tab = ref('all')

const filteredTimes = computed(() => {
  if (tab.value === 'all') {
    return times.value
  }
  return times.value.filter((x) => x.code === tab.value)
})

const selectedTime = computed(() => {
  return times.value.find((x) => x.tab === tab.value)
})

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
  <q-card class="q-mb-md" style="max-width: 900px">
    <q-card-section>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab" dense class="bg-indigo text-white" narrow-indicator>
          <q-tab v-for="item in filteredTimes" :key="item.id" :name="item.tab" :label="item.name" />
        </q-tabs>
      </div>

      <div v-if="selectedTime" class="q-pa-sm text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោត</span>
        សម្រាប់ថ្ងៃទី <span>{{ selectedTime.date }}</span>
      </div>
    </q-card-section>
    <q-markup-table>
      <q-tab-panel
        v-model="tab"
        name="tab1"
        v-for="time in times.filter((x) => x.code == tab || tab == 'all')"
        :key="time.id"
      >
        <!-- <q-table > -->
        <thead class="q-pa-sm bg-primary text-h6">
          <tr>
            <th style="color: white" colspan="9">ឆ្នោត-មីងណាម</th>
            <th style="color: white">{{ time.name }}</th>
          </tr>
        </thead>
        <thead class="q-pa-sm text-h6">
          <tr>
            <th style="color: darkblue" colspan="9">ចេញថ្ងៃ</th>
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
              <td colspan="8">
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
        <!-- </q-table> -->
      </q-tab-panel>
    </q-markup-table>
  </q-card>
</template>
