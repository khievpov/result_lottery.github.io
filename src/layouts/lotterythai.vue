<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-sm text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោតថៃ</span>
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
        <q-tabs v-model="tab" narrow-indicator dense class="bg-primary">
          <q-tab
            class="text-white"
            v-for="time in times"
            :key="time.id"
            :name="time.code"
            :icon="time.icon"
            :label="time.name"
          />
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
              <th style="color: white" colspan="3">ឆ្នោតថៃ</th>
              <th style="color: white">{{ time.name }}</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h4">
            <tr>
              <th style="color: darkblue" colspan="3">ចេញថ្ងៃ</th>
              <th style="color: darkred">{{ time.date }}</th>
            </tr>
          </thead>
          <tbody class="q-pa-sm text-h4">
            <tr>
              <td style="color: darkblue" colspan="2">A</td>
              <td>57</td>
              <td>168</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">B</td>
              <td>68</td>
              <td>169</td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">C</td>
              <td>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
            <tr>
              <td style="color: darkblue" colspan="2">D</td>
              <td>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
          </tbody>
          <q-separator :key="'time.id' + index" v-if="time.separator" />
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: 'lotterythaiPage',
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
    date: '4-04-2026',
    separator: true,
    posts: [
      {
        id: 1,
        name: 'ប៉ុស្តិ៍ A',
        prizes: [
          {
            prizeId: 1,
            prizeName: 'រង្វាន់ទី1',
            prize: '9000$',
            values: [
              {
                index: 1,
                value: '123457',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    code: 'alarms',
    name: 'ថៃ 3:45',
    icon: 'alarms',
    date: '4-04-2026',
    separator: false,
    posts: [
      {
        id: 2,
        name: 'ប៉ុស្តិ៍ B',
        prizes: [
          {
            prizeId: 2,
            prizeName: 'រង្វាន់ទី2',
            prize: '9000$',
            values: [
              {
                index: 1,
                value: '123456',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    code: 'alarms3',
    name: 'ថៃ 4:45',
    icon: 'alarms',
    date: '4-04-2026',
    separator: false,
    posts: [
      {
        id: 3,
        name: 'ប៉ុស្តិ៍ C',
        prizes: [
          {
            prizeId: 3,
            prizeName: 'រង្វាន់ទី3',
            prize: '1000$',
            values: [
              {
                index: 1,
                value: '123456',
              },
            ],
          },
        ],
      },
    ],
  },
])
</script>
