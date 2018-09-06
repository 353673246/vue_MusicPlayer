<template>
  <div class="player">
   <router-link to="/lrc">
      <div class="cover" :class="paused? 'pause':'play'">
        <img :src="currentItem.cover" alt="" style="width:60vw;height:60vw">
      </div>
   </router-link>
    <div class="timer">
      <span>
        -{{leftTime}}
      </span>
      <Progress :value="currentPercentAbsoulte" @changeProgress = "changeProgress"></Progress>
    </div>
    <div class="volume">
      <div class="volumeBtn"></div>
      <volumeProgress :value="volume" @changeProgressVolume = "changeVolume"></volumeProgress>
    </div>

    <div class="control_wrap">
      <div class="control">
        <div class = "control-left" @click = "PREV_NEXT('prev')"></div>
        <div class = "control-center" @click="PLAY_PAUSE" :class="paused?'play':'pause'"></div>
        <div class = "control-right" @click = "PREV_NEXT('next')"></div>
        <div class="playOrder"></div>
      </div>
      </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import Progress from '../progress/Progress'
import volumeProgress from '../progress/volumeProgress'

export default {
  components: {
    Progress,
    volumeProgress
  },
  computed: {
    ...mapState('player', ['volume', 'paused']),
    ...mapGetters('list', ['currentItem']),
    ...mapGetters('player', ['leftTime', 'currentPercentAbsoulte'])
  },
  methods: {
    ...mapMutations('player', ['CHANGE_VOLUME', 'CHANGE_PROGRESS', 'PLAY_PAUSE']),
    ...mapMutations('list', ['PREV_NEXT']),
    changeVolume (volume) {
      // console.log('changeVolume', volume)
      this.CHANGE_VOLUME(volume * 100)
    },
    changeProgress (progress) {
      // console.log('changeProgress', progress)
      this.CHANGE_PROGRESS(progress)
    }
  }
}
</script>

<style lang="scss">
@import "Player.scss";

</style>
