import { query } from './query.js'
import { convertToKiller } from '@/service/dto/killer'

const BASE_URL = '/api'

export const deadByDaylightService = {
  fetchKillers: async () => {
    const response = await query({ url: BASE_URL + '/killers', method: 'GET' })

    return response.data
  },
  fetchKiller: async (id) => {
    const response = await query({ url: BASE_URL + `/killers/${id}`, method: 'GET' })

    return response.data
  }
}
