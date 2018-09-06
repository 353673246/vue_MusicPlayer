import * as Types from './mutations-types'
export default {
  [Types.GET_DURATION] (state, time) {
    state.duration = time
  },
  [Types.GET_CURRENTTIME] (state, time) {
    state.currentTime = time
  },
  [Types.CHANGE_VOLUME] (state, volume) {
    state.volume = volume
  },
  [Types.CHANGE_PROGRESS] (state, progress) {
    state.changeTime = progress * state.duration
  }

}
