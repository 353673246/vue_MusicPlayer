<template>
  <div class = "lrc" ref="div">
    <ul>
      <li v-for="(item,key) in parseLyric" :key="key">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  computed: {
    ...mapGetters('list', ['currentItem', 'getLrc', 'parseLyric']),
    ...mapState('player', ['currentTime'])
  },
  mounted () {
    // console.log(this.parseLyric)
    console.log(this.currentTime)
    for (let i in this.parseLyric) {
      console.log(i)
    }
  }
}
</script>

<style lang="scss">
.lrc{
  width: 100%;
  text-align:center;
  font-size: 4vw;
  margin-top: 10vw;
  font-weight: bold;
}
</style>
