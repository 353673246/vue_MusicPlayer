import './Progress.scss'
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeProgress (e) {
      let progress = (e.clientX - this.$refs.progressbar.getBoundingClientRect().left) / this.$refs.progressbar.clientWidth
      this.$emit('changeProgress', progress)
    }
  },

  render () {
    return (
      <div class="components-progress" onClick={this.changeProgress} ref="progressbar" >
        <div class="progress"
          style={{width: `${this.value}%`}}>
        </div>
      </div>
    )
  }
}
