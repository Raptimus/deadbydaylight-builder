import { query } from './query.js'

const BASE_URL = '/api'

export const deadByDaylightService = {
  fetchKillers: () => query({ url: BASE_URL + '/killers', method: 'GET' })
}
