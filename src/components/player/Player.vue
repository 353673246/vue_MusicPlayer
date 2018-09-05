<template>
  <div class="player">
    <div class="cover">
      <img :src="currentItem.cover" alt="" style="width:60vw;height:60vw">
    </div>
    <div class="control">
      <span>
        <img src="../../images/previous.png" alt="" @click = 'click'>
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
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('list', ['currentItem'])
  },
  methods: {
    click () {
      console.log('111')
    }
  }
}
</script>

<style lang="scss">
@import "Player.scss";

</style>
