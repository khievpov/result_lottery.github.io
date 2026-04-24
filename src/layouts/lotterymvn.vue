<template>
  <q-card>
    <div class="col-12 col-sm-6 col-md-4">
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
            <template v-for="post in time.posts || []" :key="post.id">
              <tbody class="q-pa-sm text-h4">
                <tr>
                  <td colspan="2">
                    <span style="color: darkblue">{{ post.name }}</span>
                  </td>
                  <td>{{ post.value }}</td>
                  <td>{{ post.prize }}</td>
                </tr>
              </tbody>
            </template>

            <template v-for="number in time.numbers || []" :key="number.id">
              <tbody class="q-pa-ms text-h5">
                <tr>
                  <td colspan="2">{{ number.name }}</td>
                  <td>{{ number.result }}</td>
                </tr>
              </tbody>
            </template>
          </q-markup-table>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'lotterymvnPage',
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
    name: 'ព្រឹក 10:15',
    icon: 'alarm',
    date: '06-04-2026',
    posts: [
      { id: 1, name: 'ប៉ុស្តិ៍ A', value: '22', prize: '168' },
      { id: 2, name: 'ប៉ុស្តិ៍ B', value: '32', prize: '160' },
      { id: 3, name: 'ប៉ុស្តិ៍ C', value: '11', prize: '118' },
      { id: 4, name: 'ប៉ុស្តិ៍ D', value: '81', prize: '188' },
      { id: 5, name: 'ប៉ុស្តិ៍ F', value: '57', prize: '168' },
      { id: 6, name: 'ប៉ុស្តិ៍ I', value: '57', prize: '168' },
      { id: 7, name: 'ប៉ុស្តិ៍ N', value: '88', prize: '168' },
    ],
    numbers: [
      { id: 1, name: '1', result: '1412' },
      { id: 2, name: '2', result: '8086' },
      { id: 3, name: '3', result: '7271' },
      { id: 4, name: '4', result: '6667' },
      { id: 5, name: '5', result: '64498' },
      { id: 6, name: '6', result: '65882' },
      { id: 7, name: '7', result: '89492' },
      { id: 8, name: '8', result: '57156' },
      { id: 9, name: '9', result: '00989' },
      { id: 10, name: '10', result: '49158' },
      { id: 11, name: '11', result: '85259' },
      { id: 12, name: '12', result: '66334' },
      { id: 13, name: '13', result: '84631' },
      { id: 14, name: '14', result: '56143' },
      { id: 15, name: '15', result: '84622' },
    ],
  },
  {
    id: 3,
    code: 'alarm2',
    name: 'ថ្ងៃ 1:45',
    icon: 'alarm',
    date: '06-04-2026',
    posts: [
      { id: 1, name: 'ប៉ុស្តិ៍ A', value: '20', prize: '168' },
      { id: 2, name: 'ប៉ុស្តិ៍ B', value: '83', prize: '160' },
      { id: 3, name: 'ប៉ុស្តិ៍ C', value: '11', prize: '118' },
      { id: 4, name: 'ប៉ុស្តិ៍ D', value: '81', prize: '188' },
      { id: 5, name: 'ប៉ុស្តិ៍ F', value: '57', prize: '168' },
      { id: 6, name: 'ប៉ុស្តិ៍ I', value: '57', prize: '168' },
      { id: 7, name: 'ប៉ុស្តិ៍ N', value: '80', prize: '168' },
    ],
    numbers: [
      { id: 1, name: '1', result: '1412' },
      { id: 2, name: '2', result: '8086' },
      { id: 3, name: '3', result: '7271' },
      { id: 4, name: '4', result: '6667' },
      { id: 5, name: '5', result: '64498' },
      { id: 6, name: '6', result: '65882' },
      { id: 7, name: '7', result: '89492' },
      { id: 8, name: '8', result: '57156' },
      { id: 9, name: '9', result: '00989' },
      { id: 10, name: '10', result: '49158' },
      { id: 11, name: '11', result: '85259' },
      { id: 12, name: '12', result: '663' },
    ],
  },
  {
    id: 4,
    code: 'alarm3',
    name: 'ល្ងាច 3:45',
    icon: 'alarm',
    date: '06-04-2026',
    posts: [
      { id: 1, name: 'ប៉ុស្តិ៍ A', value: '60', prize: '168' },
      { id: 2, name: 'ប៉ុស្តិ៍ B', value: '93', prize: '160' },
      { id: 3, name: 'ប៉ុស្តិ៍ C', value: '11', prize: '118' },
      { id: 4, name: 'ប៉ុស្តិ៍ D', value: '81', prize: '188' },
      { id: 5, name: 'ប៉ុស្តិ៍ F', value: '57', prize: '168' },
      { id: 6, name: 'ប៉ុស្តិ៍ I', value: '57', prize: '168' },
      { id: 7, name: 'ប៉ុស្តិ៍ N', value: '45', prize: '168' },
    ],
    numbers: [
      { id: 1, name: '1', result: '8412' },
      { id: 2, name: '2', result: '8086' },
      { id: 3, name: '3', result: '7271' },
      { id: 4, name: '4', result: '6667' },
      { id: 5, name: '5', result: '64498' },
      { id: 6, name: '6', result: '65882' },
      { id: 7, name: '7', result: '89492' },
      { id: 8, name: '8', result: '57156' },
      { id: 9, name: '9', result: '00989' },
      { id: 10, name: '10', result: '49158' },
      { id: 11, name: '11', result: '85259' },
      { id: 12, name: '12', result: '66334' },
      { id: 13, name: '13', result: '84631' },
      { id: 14, name: '14', result: '56143' },
      { id: 15, name: '15', result: '74622' },
    ],
  },
  {
    id: 5,
    code: 'alarm4',
    name: 'យប់ 5:45',
    icon: 'alarm',
    date: '06-04-2026',
    posts: [
      { id: 1, value: '60', prize: '168' },
      { id: 2, value: '93', prize: '160' },
      { id: 3, name: 'ប៉ុស្តិ៍ A', value: '11', prize: '118' },
      { id: 4, value: '81' },
      { id: 5, name: 'ប៉ុស្តិ៍ B', value: '57', prize: '168' },
      { id: 6, name: 'ប៉ុស្តិ៍ C', value: '57', prize: '168' },
      { id: 7, name: 'ប៉ុស្តិ៍ D', value: '45', prize: '168' },
    ],
    numbers: [
      { id: 1, name: '1', result: '8412' },
      { id: 2, name: '2', result: '8086' },
      { id: 3, name: '3', result: '7271' },
      { id: 4, name: '4', result: '6667' },
      { id: 5, name: '5', result: '64498' },
      { id: 6, name: '6', result: '65882' },
      { id: 7, name: '7', result: '89492' },
      { id: 8, name: '8', result: '57156' },
      { id: 9, name: '9', result: '00989' },
      { id: 10, name: '10', result: '49158' },
      { id: 11, name: '11', result: '85259' },
      { id: 12, name: '12', result: '66334' },
      { id: 13, name: '13', result: '84631' },
      { id: 14, name: '14', result: '56143' },
      { id: 15, name: '15', result: '74622' },
      { id: 16, name: '16', result: '74622' },
      { id: 17, name: '17', result: '74622' },
      { id: 18, name: '18', result: '74622' },
      { id: 19, name: '19', result: '74622' },
    ],
  },
  {
    id: 6,
    code: 'alarm5',
    name: 'យប់ 7:15',
    icon: 'alarm',
    date: '06-04-2026',
    posts: [
      { id: 1, value: '60', prize: '168' },
      { id: 2, value: '93', prize: '160' },
      { id: 3, name: 'ប៉ុស្តិ៍ A', value: '11', prize: '118' },
      { id: 4, value: '81' },
      { id: 5, name: 'ប៉ុស្តិ៍ B', value: '57', prize: '168' },
      { id: 6, name: 'ប៉ុស្តិ៍ C', value: '57', prize: '168' },
      { id: 7, name: 'ប៉ុស្តិ៍ D', value: '45', prize: '168' },
    ],
    numbers: [
      { id: 1, name: '1', result: '8412' },
      { id: 2, name: '2', result: '8086' },
      { id: 3, name: '3', result: '7271' },
      { id: 4, name: '4', result: '6667' },
      { id: 5, name: '5', result: '64498' },
      { id: 6, name: '6', result: '65882' },
      { id: 7, name: '7', result: '89492' },
      { id: 8, name: '8', result: '57156' },
      { id: 9, name: '9', result: '00989' },
      { id: 10, name: '10', result: '49158' },
      { id: 11, name: '11', result: '85259' },
      { id: 12, name: '12', result: '66334' },
      { id: 13, name: '13', result: '84631' },
      { id: 14, name: '14', result: '56143' },
      { id: 15, name: '15', result: '74622' },
      { id: 16, name: '16', result: '74622' },
      { id: 17, name: '17', result: '74622' },
      { id: 18, name: '18', result: '74622' },
      { id: 19, name: '19', result: '74622' },
    ],
  },
])
</script>
