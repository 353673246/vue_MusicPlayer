import {CHANGE_MUSIC_INDEX, PREV_NEXT, CHANGE_REPEATTYPE} from './mutations-types'
import player from '../player/state'
export default {
  [CHANGE_MUSIC_INDEX] (state, musicItem) {
    state.currentIndex = state.musicList.indexOf(musicItem)
    player.paused = false
  },
  [PREV_NEXT] (state, type) {
    player.paused = false
    let currentIndex = state.currentIndex
    let num = state.musicList.length
    if (state.repeatType === 'cycle' || state.repeatType === 'once') {
      if (type === 'prev') {
        currentIndex = (currentIndex - 1 + num) % num
      } else {
        currentIndex = (currentIndex + 1 + num) % num
      }
    } else {
      let newIndex = Math.floor((Math.random() * num))
      currentIndex = newIndex
    }
    state.currentIndex = currentIndex
  },
  [CHANGE_REPEATTYPE] (state, repeatType) {
    if (state.repeatType === 'cycle') {
      state.repeatType = 'random'
    } else if (state.repeatType === 'random') {
      state.repeatType = 'once'
    } else if (state.repeatType === 'once') {
      state.repeatType = 'cycle'
    }
    console.log(state.repeatType)
  }
}
