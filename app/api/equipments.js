import client from './client'

const endpoint = '/equipments'

const getListings = () => client.get(endpoint)

export default {
  getListings,
}
