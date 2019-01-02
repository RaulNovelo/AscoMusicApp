const trackMixin = {
  methods: {
    toTrack () {
      this.$router.push({ name: 'Track', query: { id: this.track.id } })
      if (!this.track.preview_url) { return }
      this.$store.commit('track/setTrack', this.track)
    },
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$store.commit('track/setTrack', this.track)
    }
  }
}

export default trackMixin
