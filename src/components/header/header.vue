<template>
  <div class="header">
    <span><router-link to="/">{{currentItem.title}}</router-link></span>
    <p>{{currentItem.artist}}</p>
    <router-link to="/list"><div class="list"></div></router-link>
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
