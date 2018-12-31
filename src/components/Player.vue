<template>
  <div class="content" v-if="track &amp;&amp; track.album">
    <p class="is-128x128"><img :src="track.album.images[0].url" /></p>
    <p><strong>{{ track.name }} - {{ track.artists[0].name }}</strong>
    <br>
    <small>[{{ track.duration_ms | ms-to-mm }}]</small></p>
    <br>
    <figure>
      <audio controls autoplay :src="track.preview_url">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </div>
</template>

<script>
export default {
  computed: {
    track () {
      return this.$store.state.track.track
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 200px;
    border-radius: 50%;
  }
</style>
