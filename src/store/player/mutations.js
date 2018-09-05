import * as Types from './mutations-types'
export default {
  [Types.GET_DURATION] (state, time) {
    state.duration = time
  },
  [Types.GET_CURRENTTIME] (state, time) {
    state.currenTime = time
  }
}
