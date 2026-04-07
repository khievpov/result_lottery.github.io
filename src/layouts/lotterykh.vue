<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-sm text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោតខ្មែរ</span>
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
        <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
          <q-tab name="mails" icon="mails" label="ទាំងអស់" />
          <q-tab name="alarm1" icon="alarms" label="ខ្មែរ 10:35" />
          <q-tab name="alarm2" icon="alarms" label="ខ្មែរ 13:00" />
        </q-tabs>
        <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
          <q-tab name="alarm3" icon="alarms" label="ខ្មែរ 15:45" />
          <q-tab name="alarm4" icon="alarms" label="ខ្មែរ 18:00" />
          <q-tab name="alarm5" icon="alarms" label="ខ្មែរ 19:45" />
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
              <th style="color: white" colspan="3">ឆ្នោតខ្មែរ</th>
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
              <td>57</td>
              <td>666</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">B</td>
              <td>46</td>
              <td>728</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">C</td>
              <td>41</td>
              <td>166</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">D</td>
              <td>91</td>
              <td>440</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'lotterykhPage',
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
    name: 'ខ្មែរ 10:35',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 3,
    code: 'alarm2',
    name: 'ខ្មែរ 13:00',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 4,
    code: 'alarm3',
    name: 'ខ្មែរ 15:45',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 5,
    code: 'alarm4',
    name: 'ខ្មែរ 18:00',
    icon: 'alarm',
    date: '06-04-2026',
  },
  {
    id: 6,
    code: 'alarm5',
    name: 'ខ្មែរ 19:45',
    icon: 'alarm',
    date: '06-04-2026',
  },
])
</script>
