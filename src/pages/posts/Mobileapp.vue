<script setup>
import { useapiTest } from 'src/stores/apitest'
import { onMounted, ref } from 'vue'
const store = useapiTest()
const data = ref({})
const times = ref([])
onMounted(async () => {
  await store.fetchmobileapp().then((rs) => {
    data.value = rs.data.data
    times.value = data.value[0].times
    console.log(times.value)
  })
})
</script>

<template>
  <q-card v-for="time in times" :key="time.id">
    <q-card-section>
      {{ time.name }} <br />
      <table>
        <tr v-for="p in time.posts" :key="p">
          <td>{{ p.name }}</td>
          <td></td>
        </tr>
      </table>
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
              <th class="text-left" style="color: white">ឆ្នោតថៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ថៃ3:45</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td class="text-right">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td class="text-right">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td class="text-right">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
              <td class="text-right">
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
                <q-spinner-ios color="primary" size="1em" />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>
