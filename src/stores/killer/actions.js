import { deadByDaylightService } from '@/service/deadByDaylightService'
import { convertToKiller } from '@/service/dto/killer'

export const actions = {
  async fetchKillers() {
    const response = await deadByDaylightService.fetchKillers()
    this.setKillers(response)
  },
  async fetchKiller(id) {
    const response = await deadByDaylightService.fetchKiller(id)
    this.setKiller(response[0])
  },
  setKillers(killersRaw) {
    this.killers = killersRaw.map(convertToKiller)
  },
  setKiller(killerRaw) {
    this.killer = convertToKiller(killerRaw)
  }
}

// const unsubscribe = someStore.$onAction({
//   name, // name of the action
//   store, // store instance, same as `someStore`
//   args, // array of parameters passed to the action
//   after, // hook after the action returns or resolves
//   onError, // hook if the action throws or rejects
// }) => {
//   store.name(args)

//   after(callback(result))

//   onError(onError(error))
// })

// unsubscribe()
