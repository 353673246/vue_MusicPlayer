import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import router from './router'

Vue.use(MintUI)
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h('App')

})
