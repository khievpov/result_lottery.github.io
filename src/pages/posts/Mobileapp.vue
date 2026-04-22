<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref } from 'vue'

const store = useapiTest()
const data = ref({})
const prizes = ref([])
const posts = ref([])
const tab = ref('all')
const times = ref([])

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
  <div class="col-12 col-sm-6 col-md-4">
    <q-card>
      <q-card-section>
        <div class="q-gutter-y-md q-pa-md" style="max-width: 400px">
          លទ្ឋផល
          <span style="color: darkred">ឆ្នោត-5D</span>
          សម្រាប់ថ្ងៃទី
          <span style="color: darkblue">{{ times[0]?.date }}</span>

          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="mails" icon="mails" label="ទាំងអស់" />
            <q-tab name="alarm1" icon="alarms" label="5D ម៉ោង 10:00AM" />
            <q-tab name="alarm2" icon="alarms" label="5D ម៉ោង 12:00PM" />
          </q-tabs>
          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="alarm3" icon="alarms" label="5D ម៉ោង 03:00PM" />
            <q-tab name="alarm4" icon="alarms" label="5D ម៉ោង 05:00PM" />
            <q-tab name="alarm5" icon="alarms" label="5D ម៉ោង 07:00PM" />
          </q-tabs>
        </div>

        <q-markup-table flat bordered>
          <q-tab-panel
            v-model="tab"
            name="alarm1"
            v-for="time in times.filter((x) => x.code == tab || tab == 'all')"
            :key="time.id"
          >
            <thead class="q-pa-sm bg-primary text-h6">
              <tr>
                <th style="color: white" colspan="9">ឆ្នោត-5D</th>
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
          </q-tab-panel>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </div>
</template>
