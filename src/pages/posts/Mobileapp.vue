<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref } from 'vue'
const store = useapiTest()
const data = ref({})
const times = ref([])
const prizes = ref([])
onMounted(async () => {
  await store.fetchmobileapp().then((rs) => {
    data.value = rs.data.data
    times.value = data.value[0].times
    prizes.value = rs.data.data
    console.log(times.value)
  })
})
</script>

<template>
  <q-card v-for="time in times" :key="time.id" class="q-mb-md" style="max-width: 600px">
    <q-card-section>
      <div>{{ time.name }}</div>
      <div>{{ time.date }}</div>

      <q-markup-table>
        <thead class="bg-primary q-pa-sm text-h6">
          <tr>
            <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
            <th class="text-center"></th>
            <th class="text-right" style="color: white">{{ time.name }}</th>
          </tr>
        </thead>
        <thead class="q-pa-sm text-h6">
          <tr>
            <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
            <th class="text-center"></th>
            <th class="text-right" style="color: darkred">{{ time.date }}</th>
          </tr>
        </thead>

        <tbody class="q-pa-sm text-h6">
          <template v-for="post in time.posts || []" :key="post.id">
            <tr>
              <td colspan="2">
                ប៉ុស្តិ៍ {{ post.name }}<br />
                <ul>
                  <label for="">រង្វាន់លួងចិត្ត</label>
                  <li class="text-left" v-if="post.values == value">3ខ្ទង់{{ post.values }}</li>
                  <li class="text-left">2ខ្ទង់</li>
                </ul>
              </td>
              <td>{{ post.date }}</td>
            </tr>
          </template>
          <template v-for="post in time.posts || []" :key="post.id">
            <tr v-for="prize in post.prizes || []" :key="prize.prizeId">
              <td colspan="2">
                {{ prize.prizeName }}
              </td>
              <td>{{ prize.prize }}</td>
            </tr>

            <tr v-for="val in prize?.values || []" :key="val.index">
              <td>{{ val.value }}</td>
            </tr>
          </template>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>

  <q-card>
    <q-card-section>
      <div class="q-pa-md text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោតថៃ</span>
        សម្រាប់ថ្ងៃទី
        <!-- <span class="absolute-top-right q-ma-md q-pa-md"><q-spinner-radio color="red" /></span> -->

        <!-- <div>
          <q-spinner-radio color="red q-my-lg" size="2em" />
        </div> -->
      </div>
      <div class="absolute-top-right q-ma-md q-pa-md">
        <q-spinner-radio color="red" size="2em" />
      </div>

      <div class="q-pa-md" style="max-width: 400px">
        <q-input filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" style="color: darkred">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-md q-pa-md" style="max-width: 400px">
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab class="text-primary" name="mails" icon="mails" label="ទាំងអស់" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="ថៃ3:45" />
        </q-tabs>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតយួន</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ល្ងាច 4:30</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">26-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">20</td>
              <td class="text-right">180</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">83</td>
              <td class="text-right">111</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">11</td>
              <td class="text-right">831</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">81</td>
              <td class="text-right">331</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">F</td>
              <td class="text-center">57</td>
              <td class="text-right">943</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">I</td>
              <td class="text-center">57</td>
              <td class="text-right">943</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">N</td>
              <td class="text-center">80</td>
              <td class="text-right">906</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">K</td>
              <td class="text-center">62</td>
              <td class="text-right">462</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">1412</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">8086</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">7271</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">6667</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">64498</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">65882</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">89492</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">57156</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">00989</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">49158</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">85259</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">66334</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">84631</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">56143</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">84622</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>
