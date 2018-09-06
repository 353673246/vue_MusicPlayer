import {mapMutations} from 'vuex'
export default {
  props: {
    musicItem: {
      type: Object,
      required: true
    },
    focus: {
      type: Boolean
    }
  },
  methods: {
    ...mapMutations('list', ['CHANGE_MUSIC_INDEX'])
  },
  render () {
    return (

      <router-link to="/">
        <li class={`components-listitem row ${this.focus ? 'focus' : ''}`} onClick = { () => this.CHANGE_MUSIC_INDEX(this.musicItem)}>
          <p class = "list-title">{this.musicItem.title}</p>

          <p><router-link to={{name: 'lrc'}}></router-link></p>
          <p></p>
        </li>
      </router-link>
    )
  }
}
