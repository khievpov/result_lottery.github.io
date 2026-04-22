<template>
  <q-card>
    <div class="col-12 col-sm-6 col-md-4">
      <q-card-section>
        <div class="q-pa-sm text-h6" style="max-width: 400px">
          លទ្ឋផល
          <span style="color: darkred">ឆ្នោតយួន</span>
          សម្រាប់ថ្ងៃទី
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
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-gutter-y-md q-pa-sm" style="max-width: 400px">
          <q-tabs v-model="tab" narrow-indicator dense>
            <q-tab class="text-primary" name="mails" icon="mails" label="ទាំងអស់" />
            <q-tab class="text-primary" name="alarm1" icon="alarms" label="ល្ងាច 4:30" />
            <q-tab class="text-primary" name="alarm2" icon="alarms" label="យប់ 6:30" />
          </q-tabs>
        </div>

        <div class="q-pa-sm" style="max-width: 400px">
          <q-markup-table
            flat
            bordered
            v-for="time in times.filter((x) => x.code == tab || tab == 'all')"
            :key="time.id"
          >
            <thead class="bg-primary q-pa-sm text-h6">
              <tr>
                <th style="color: white" colspan="3">ឆ្នោតយួន</th>
                <th style="color: white">{{ time.name }}</th>
              </tr>
            </thead>
            <thead class="q-pa-sm text-h6">
              <tr>
                <th style="color: darkblue" colspan="3">ចេញថ្ងៃ</th>
                <th style="color: darkred">{{ time.date }}</th>
              </tr>
            </thead>
            <tbody class="q-pa-sm text-h5">
              <tr>
                <td style="color: darkblue" colspan="2">A</td>
                <td>20</td>
                <td>180</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">B</td>
                <td>83</td>
                <td>111</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">C</td>
                <td>11</td>
                <td>831</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">D</td>
                <td>81</td>
                <td>331</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">F</td>
                <td>57</td>
                <td>943</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">I</td>
                <td>57</td>
                <td>943</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">N</td>
                <td>80</td>
                <td>906</td>
              </tr>
              <tr>
                <td style="color: darkblue" colspan="2">K</td>
                <td>62</td>
                <td>462</td>
              </tr>
            </tbody>
            <tfoot class="q-pa-ms text-h5">
              <tr>
                <td colspan="2">1</td>
                <td>1412</td>
              </tr>
              <tr>
                <td colspan="2">2</td>
                <td>8086</td>
              </tr>
              <tr>
                <td colspan="2">3</td>
                <td>7271</td>
              </tr>
              <tr>
                <td colspan="2">4</td>
                <td>6667</td>
              </tr>
              <tr>
                <td colspan="2">5</td>
                <td>64498</td>
              </tr>
              <tr>
                <td colspan="2">6</td>
                <td>65882</td>
              </tr>
              <tr>
                <td colspan="2">7</td>
                <td>89492</td>
              </tr>
              <tr>
                <td colspan="2">8</td>
                <td>57156</td>
              </tr>
              <tr>
                <td colspan="2">9</td>
                <td>00989</td>
              </tr>
              <tr>
                <td colspan="2">10</td>
                <td>49158</td>
              </tr>
              <tr>
                <td colspan="2">11</td>
                <td>85259</td>
              </tr>
              <tr>
                <td colspan="2">12</td>
                <td>66334</td>
              </tr>
              <tr>
                <td colspan="2">13</td>
                <td>84631</td>
              </tr>
              <tr>
                <td colspan="2">14</td>
                <td>56143</td>
              </tr>
              <tr>
                <td colspan="2">15</td>
                <td>84622</td>
              </tr>
            </tfoot>
          </q-markup-table>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'lotteryvnPage',
}
</script>
<script setup>
import { ref } from 'vue'

const selectedDate = ref(new Date().toISOString().slice(0, 10))
const tab = ref('all')

const times = ref([
  {
    id: 1,
    code: 'mails',
    name: 'ទាំងអស់',
    icon: 'mails',
    date: '06-04-2026',
  },
  {
    id: 2,
    code: 'alarm1',
    name: 'ល្ងាច 4:30',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 3,
    code: 'alarm2',
    name: 'យប់ 6:30',
    icon: 'alarm',
    date: '06-04-2026',
  },
])
</script>
