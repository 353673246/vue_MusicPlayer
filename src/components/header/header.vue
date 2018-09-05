<template>
  <div class="header">
    <span>{{currentItem.title}}</span>
    <p>{{currentItem.artist}}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('list', ['currentItem'])
  }
}
</script>

<style lang="scss">
@import "header.scss";
</style>
