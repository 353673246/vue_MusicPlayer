<template>
  <div class = "lrc" ref="div">
    <ul>
      <li v-for="(item,key) in parseLyric" :key="key" ref="li" >{{item}}</li>
    </ul>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: 'lrc',
  computed: {
    ...mapGetters('list', ['currentItem', 'parseLyric']),
    ...mapState('player', ['currentTime'])
  },
  methods: {
    getLrc () {
      // console.log(lrc)
      // this.lrc.map((item, i) => {

      // })
      let li = document.querySelector('div ul li')
      for (let i in this.parseLyric) {
        console.log(parseInt(i))
        console.log('-')
        console.log(this.currentTime)
        if (parseInt(i) === this.currentTime) {
          li.className = 'active'
          // this.$refs.li.classList.add('active')
          // console.log('1')
        }
      }
    }
  },
  mounted () {
    // console.log(this.parseLyric)
    this.getLrc()
    // let list = this.parseLyric
    // let curTime = this.currentTime
    // let lrclist = list.map((item, i) => {
    //   console.log(curTime)
    //   console.log(lrclist)
    // })
    // console.log(this.parseLyric)
    // console.log(this.currentTime)
    // for (let i in this.parseLyric) {
    // console.log(i)
    // }
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
  .active{
    color: red;
  }
}
</style>
