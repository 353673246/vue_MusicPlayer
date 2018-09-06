import './volumeProgress.scss'
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeProgressVolume (e) {
      let progress = (e.clientX - this.$refs.volumeprogressbar.getBoundingClientRect().left) / this.$refs.volumeprogressbar.clientWidth
      this.$emit('changeProgressVolume', progress)
    }
  },
  render () {
    return (
      <div class="components-volume-progress" onClick={this.changeProgressVolume} ref = "volumeprogressbar">

        <div class="progress-volume"
          style={{width: `${this.value}%`}}>
        </div>

      </div>
    )
  }
}
