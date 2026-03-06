import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import { date } from 'quasar'

const sdate = date.formatDate(new Date(), 'YYYY-MM-DD')
const api = axios.create({
  baseURL: 'http://192.168.88.60:5001/api/site',
  headers: {
    'x-api-key': 'sSSc49ddNxTDl51hJmUhtZm1yf2V',
  },
})
api.loading = (props) => loading.show(props)
api.hide = (delay = 500) => setTimeout(() => loading.hide(), dalay)
api.today = () => sdate
export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export { axios, api }
