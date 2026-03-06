<script setup>
import { api } from 'src/boot/axios'
import { ref } from 'vue'
const result = ref({})
const search = ref('')

const searchPrize = (Text = '', type = 'order') => {
  isSearch.value = true
  if (search.value == '') {
    result.value = {}
    return
  }
  const from = {
    Text: Text != '' ? Text : search.value,
    type: type,
  }
}
api.loading()
api
  .post('resultlottery/order/search', from)
  .then((res) => {
    Object.assign(result.value, res.data.data)
  })
  .finally(() => {
    api.hide()
  })
</script>
