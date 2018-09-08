export default {
  currentItem (state) {
    return state.musicList[state.currentIndex]
  },
  parseLyric (state) {
    let lrc = state.musicList[state.currentIndex].lrc
    let lyrics = lrc.split('\n')
    // console.log(lyrics)
    let lrcObj = {}
    for (let i = 0; i < lyrics.length; i++) {
      let lyric = decodeURIComponent(lyrics[i])
      let timeReg = /\[\d*:\d*((\.|:)\d*)*\]/g
      let timeRegExpArr = lyric.match(timeReg)
      if (!timeRegExpArr) continue
      let clause = lyric.replace(timeReg, '')
      for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
        let t = timeRegExpArr[k]
        let min = Number(String(t.match(/\[\d*/i)).slice(1))
        let sec = Number(String(t.match(/:\d*/i)).slice(1))
        let time = min * 60 + sec
        lrcObj[time] = clause
      }
    }
    return lrcObj
  }
}
