<template>
    <section v-if="track.name" class="section">
        <track-card :track="track"></track-card>
    </section>
</template>

<script>
import TrackCard from '@/TrackCard'
import trackService from '~/services/track'
export default {
  computed: {
    track () {
      return this.$store.state.track.track
    }
  },
  created () {
    if (this.track.name) { return }
    trackService.getById(this.$route.query.id).then(res => {
      this.$store.commit('track/setTrack', res)
    })
  },
  components: {
    TrackCard
  }
}
</script>
