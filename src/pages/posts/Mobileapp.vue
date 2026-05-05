<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref } from 'vue'

const store = useapiTest()
const data = ref({})
const prizes = ref([])
const posts = ref([])
// const tab = ref([])
const selectedDate = ref(new Date().toISOString().slice(0, 10))

const tab = ref([
  { id: 1, name: 'all', label: 'ទាំងអស់', icon: 'mails' },
  { id: 2, name: '5D ម៉ោង 10:00AM', label: '5D ម៉ោង 10:00AM', icon: 'alarm' },
  { id: 3, name: '5D ម៉ោង 12:00PM', label: '5D ម៉ោង 12:00PM', icon: 'alarm' },
  { id: 4, name: '5D ម៉ោង 03:00PM', label: '5D 03:00PM', icon: 'alarm' },
  { id: 5, name: '5D ម៉ោង 05:00PM', label: '5D 05:00PM', icon: 'alarm' },
  { id: 6, name: '5D ម៉ោង 07:00PM', label: '5D 07:00PM', icon: 'alarm' },
])

const times = ref([])

onMounted(async () => {
  await store.fetchmobileapp().then((rs) => {
    data.value = rs.data.data
    times.value = data.value[0].times || times.value
    prizes.value = rs.data.data
    posts.value = rs.data.data || []
    console.log(times.value)
  })
})
</script>

<template>
  <q-card>
    <div class="col-12 col-sm-6 col-md-4">
      <q-card-section>
        <div class="q-pa-sm text-h6" style="max-width: 400px">
          លទ្ឋផល
          <span style="color: darkred">ឆ្នោត-5D</span>
          សម្រាប់ថ្ងៃទី
          <!-- <span style="color: darkred">{{ times[0]?.date }}</span> -->
        </div>
        <div class="absolute-top-right q-ma-md q-pa-md">
          <q-spinner-radio color="red" size="2em" />
        </div>

        <div class="q-pa-sm" style="max-width: 400px">
          <q-input filled v-model="selectedDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" style="color: darkred">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="selectedDate" @update:model-value="loadData">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="q-gutter-y-md q-pa-sm" style="max-width: 400px">
          <!-- <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab
              v-for="item in items"
              :key="item.id"
              :name="item.name === 'all' ? 'all' : item.name"
              :icon="item.icon"
              :label="item.label"
            />
          </q-tabs> -->

          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="all" icon="mails" label="ទាំងអស់" />
            <q-tab name="5D ម៉ោង 10:00AM" icon="alarms" label="5D ម៉ោង 10:00AM" />
            <q-tab name="5D ម៉ោង 12:00PM" icon="alarms" label="5D ម៉ោង 12:00PM" />
          </q-tabs>
          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="5D ម៉ោង 03:00PM" icon="alarms" label="5D 03:00PM" />
            <q-tab name="5D ម៉ោង 05:00PM" icon="alarms" label="5D 05:00PM" />
            <q-tab name="5D ម៉ោង 07:00PM" icon="alarms" label="5D 07:00PM" />
          </q-tabs>
        </div>

        <div class="q-pa-sm" style="max-width: 400px">
          <q-markup-table
            flat
            bordered
            v-model="tab"
            name="5D ម៉ោង 12:00PM"
            v-for="time in times.filter((x) => x.code == tab || tab == 'all')"
            :key="time.id"
          >
            <thead class="q-pa-sm bg-primary text-h6">
              <tr>
                <th style="color: white" colspan="3">ឆ្នោត-5D</th>
                <th style="color: white">{{ time.name }}</th>
              </tr>
            </thead>
            <thead class="q-pa-sm text-h6">
              <tr>
                <th style="color: darkblue" colspan="3">ចេញថ្ងៃ</th>
                <th style="color: darkred">{{ time.date }}</th>
              </tr>
            </thead>
            <template v-for="post in time.posts || []" :key="post.id">
              <tr>
                {{
                  post.date
                }}
              </tr>
            </template>

            <template v-for="post in time.posts || []" :key="post.id">
              <tr class="bg-primary text-h6">
                <td>
                  <span style="color: white"> ប៉ុស្តិ៍ {{ post.name }}</span>
                </td>
              </tr>
              <tbody class="q-pa-sm text-h6">
                <tr v-for="prize in post.prizes || []" :key="prize.prizeId">
                  <td colspan="2">{{ prize.prizeName }}</td>
                  <td>{{ prize.prize }}</td>
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
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>
