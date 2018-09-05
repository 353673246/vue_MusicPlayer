import Router from 'vue-router'
import Vue from 'vue'
import Header from '@/header/header'
import Main from '@/Main'
import Player from '@/player/Player'
import Mplayer from '@/mplayer/Mplayer'
import List from '@/list/List'
import Lrc from '@/Lrc/Lrc'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main,
        header: Header,
        mplayer: Mplayer
      },
      children: [
        {
          path: '', name: 'Player', component: Player
        },
        {
          path: 'list', name: 'List', component: List
        },
        {
          path: 'lrc', name: 'Lrc', component: Lrc
        }
      ]
    }
  ]
})
