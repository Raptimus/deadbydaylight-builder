import { defineStore } from 'pinia'
import { getters } from './getters'
import { actions } from './actions'

const state = () => ({
  killers: [],
  killer: null
})

export const useKillerStore = defineStore('killer', {
  state,
  getters,
  actions
})
