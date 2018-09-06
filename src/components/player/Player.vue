<template>
  <div class="player">
    <div class="cover">
      <img :src="currentItem.cover" alt="" style="width:60vw;height:60vw">
    </div>
    <div class="timer">
      <span>
        {{leftTime}}
      </span>
      <Progress :value="currentPercentAbsoulte" @changeProgress = "changeProgress"></Progress>
    </div>
    <div class="control">
      <span>
        <img src="../../images/previous.png" alt="">
      </span>
      <span>
        <img src="../../images/play.png" alt="">
      </span>
      <span>
        <img src="../../images/next.png" alt="">
      </span>
      <span class="volume">
        <img src="../../images/volume.png" alt="">
      </span>
      <volumeProgress :value="volume" @changeProgressVolume = "changeVolume"></volumeProgress>
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
    ...mapState('player', ['volume']),
    ...mapGetters('list', ['currentItem']),
    ...mapGetters('player', ['leftTime', 'currentPercentAbsoulte'])
  },
  methods: {
    ...mapMutations('player', ['CHANGE_VOLUME', 'CHANGE_PROGRESS']),
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
