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
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab
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
              <th style="color: white" colspan="9">ឆ្នោតថៃ</th>
              <th style="color: white">{{ time.name }}</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h4">
            <tr>
              <th style="color: darkblue" colspan="9">ចេញថ្ងៃ</th>
              <th style="color: darkred">{{ time.date }}</th>
            </tr>
          </thead>

          <template v-for="post in time.posts || []" :key="post.id">
            <tr class="bg-primary text-h6">
              <td>
                <span style="color: white"> {{ post.name }}</span>
              </td>
            </tr>
            <tbody>
              <tr v-for="prize in post.prizes || []" :key="prize.prizeId">
                <td colspan="8">
                  {{ prize.prizeName }}
                </td>
                <td>
                  {{ prize.prize }}
                </td>
                <td>
                  <template v-for="value in prize.values || []" :key="value.index">
                    លទ្ធផលឆ្នោត <br />
                    {{ value.value }}
                  </template>
                </td>
              </tr>
            </tbody>
          </template>
          <q-separator :key="'sep' + index" v-if="time.separator" />
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
    date: '6-04-2026',
    separator: true,
    posts: [
      {
        id: 1,
        name: 'ប៉ុស្តិ៍ A',
        prizes: [
          {
            prizeId: 1,
            prizeName: 'រង្វាន់ទី 1',
            prize: '9900$',
            values: [
              {
                index: 1,
                value: '189867',
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
            prizeName: 'រង្វាន់ទី 2',
            prize: '8800$',
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
            prizeName: 'រង្វាន់ទី 3',
            prize: '2000$',
            values: [
              {
                index: 1,
                value: '897654',
              },
            ],
          },
        ],
      },
    ],
  },
])
</script>
