import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'https://192.168.2.225:4000/api',
})

export default apiClient