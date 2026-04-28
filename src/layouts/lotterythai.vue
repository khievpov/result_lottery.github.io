<template>
  <q-card>
    <div class="col-12 col-sm-6 col-md-4">
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
            <q-tab
              class="text-primary"
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

            <template v-for="post in time.posts || []" :key="post.id">
              <tbody class="q-pa-sm text-h4">
                <tr>
                  <td colspan="2">
                    <span style="color: darkblue"> ប៉ុស្តិ៍ {{ post.name }}</span>
                  </td>
                  <td>{{ post.value }}</td>
                  <td>{{ post.prize }}</td>
                </tr>
              </tbody>
            </template>
            <q-separator :key="'time.id' + index" v-if="time.separator" />
          </q-markup-table>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>
<script>
export default {
  name: 'lotterythaiPage',
}
</script>
<script setup>
import { ref } from 'vue'
const selectedDate = ref(new Date().toISOString().slice(0, 10))

const tab = ref('all')

const times = ref([
  {
    id: 1,
    code: 'all',
    name: 'ទាំងអស់',
    icon: 'mails',
    date: '' + [new Date().toISOString().slice(0, 10)],
    separator: true,
  },

  {
    id: 2,
    code: 'alarms',
    name: 'ថៃ 3:45',
    icon: 'alarms',
    date: '' + [new Date().toISOString().slice(0, 10)],
    separator: false,
    posts: [
      { id: 1, name: 'A', value: '97', prize: '866' },
      { id: 2, name: 'B', value: '46', prize: '728' },
      { id: 3, name: 'C', value: '41', prize: '166' },
      { id: 4, name: 'D', value: '91', prize: '440' },
    ],
  },
])
</script>
