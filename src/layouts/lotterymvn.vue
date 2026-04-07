<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-sm text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោត-មីងណាម</span>
        សម្រាប់ថ្ងៃទី
      </div>
      <div class="absolute-top-right q-ma-md q-pa-md">
        <q-spinner-radio color="red" size="2em" />
      </div>

      <div class="q-pa-sm" style="max-width: 400px">
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
      <div class="q-gutter-y-md q-pa-sm" style="max-width: 400px">
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab class="text-primary" name="mails" icon="mails" label="ទាំងអស់" />
          <q-tab class="text-primary" name="alarm1" icon="alarms" label="ព្រឹក 10:15" />
          <q-tab class="text-primary" name="alarm2" icon="alarms" label="ថ្ងៃ 1:45" />
        </q-tabs>
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab class="text-primary" name="alarm3" icon="alarms" label="ល្ងាច 3:45" />
          <q-tab class="text-primary" name="alarm4" icon="alarms" label="យប់ 5:45" />
          <q-tab class="text-primary" name="alarm5" icon="alarms" label="យប់ 7:15 " />
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
              <th style="color: white" colspan="3">ឆ្នោត-មីងណាម</th>
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
              <td>11</td>
              <td>098</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">B</td>
              <td>53</td>
              <td>140</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">C</td>
              <td>40</td>
              <td>531</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">D</td>
              <td>50</td>
              <td>314</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">F</td>
              <td>18</td>
              <td>475</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">I</td>
              <td>91</td>
              <td>575</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">N</td>
              <td>24</td>
              <td>166</td>
            </tr>
          </tbody>
          <tfoot class="q-pa-ms text-h6">
            <tr>
              <td colspan="2">1</td>
              <td>6376</td>
            </tr>
            <tr>
              <td colspan="2">2</td>
              <td>3540</td>
            </tr>
            <tr>
              <td colspan="2">3</td>
              <td>3616</td>
            </tr>
            <tr>
              <td colspan="2">4</td>
              <td>13353</td>
            </tr>
            <tr>
              <td colspan="2">5</td>
              <td>69894</td>
            </tr>
            <tr>
              <td colspan="2">6</td>
              <td>02219</td>
            </tr>
            <tr>
              <td colspan="2">7</td>
              <td>48873</td>
            </tr>
            <tr>
              <td colspan="2">8</td>
              <td>10833</td>
            </tr>
            <tr>
              <td colspan="2">9</td>
              <td>60607</td>
            </tr>
            <tr>
              <td colspan="2">10</td>
              <td>00593</td>
            </tr>
            <tr>
              <td colspan="2">11</td>
              <td>77543</td>
            </tr>
            <tr>
              <td colspan="2">12</td>
              <td>3039</td>
            </tr>
            <tr>
              <td colspan="2">13</td>
              <td>59838</td>
            </tr>
            <tr>
              <td colspan="2">14</td>
              <td>26361</td>
            </tr>
            <tr>
              <td colspan="2">15</td>
              <td>26008</td>
            </tr>
          </tfoot>
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'lotterymvnPage',
}
</script>
<script setup>
import { ref } from 'vue'

const date = ref('date')
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
    name: 'ព្រឹក 10:15',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 3,
    code: 'alarm2',
    name: 'ថ្ងៃ 1:45',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 4,
    code: 'alarm3',
    name: 'ល្ងាច 3:45',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 5,
    code: 'alarm4',
    name: 'យប់ 5:45',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 6,
    code: 'alarm5',
    name: 'យប់ 7:15',
    icon: 'alarm',
    date: '06-04-2026',
  },
])
</script>
