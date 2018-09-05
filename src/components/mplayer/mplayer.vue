<template>
  <audio
    :src="currentItem.file"
    ref = "audio"
    @loadedmetadata="loadedmetadata"
    @timeupdate="timeupdate"
  ></audio>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    audio () {
      return this.$refs.audio
    },
    ...mapState('player', ['pasued', 'volume']),
    ...mapGetters('list', ['currentItem'])
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENTTIME']),
    loadedmetadata () {
      this.GET_DURATION(this.audio.duration)
    },
    timeupdate () {
      this.GET_CURRENTTIME(this.audio.currentTime)
    }
  },
  mounted () {
    this.audio.oncanplay = () => {
      if (!this.pasued) {
        this.audio.play()
      }
    }
    this.audio.volume = this.volume
  }
}
</script>
