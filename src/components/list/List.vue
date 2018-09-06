<template>

  <ul>
    <h1>歌曲列表</h1>
    <hr>
    <MusicItem v-for="(item , index) in musicList" :key="item.id" :musicItem="item" :focus = "index === currentIndex"></MusicItem>
  </ul>
</template>

<script>
import MusicItem from './MusicItem'
import {mapState} from 'vuex'
export default {
  components: {
    MusicItem
  },
  computed: {
    ...mapState('list', ['musicList', 'currentIndex'])
  }
}
</script>
<style lang="scss">
@import './List.scss'
</style>
