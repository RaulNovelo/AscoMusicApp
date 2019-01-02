<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url"  alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
            <strong><a @click.prevent="toTrack" class="title is-6">{{ track.name }}</a></strong> -
            <a class="subtitle is-6">{{ track.artists[0].name }}</a>
            <p class="subtitle is-6">{{ track.duration_ms | ms-to-mm }}</p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a id="play" @click="selectTrack" class="card-footer-item button is-success is-inverted">
        <span class="icon">
          <i class="fa fa-play"></i>
        </span>
        <span>Preview</span>
      </a>
      <a :href="track.external_urls.spotify" target="_blank" class="card-footer-item is-primary is-inverted button">
        <span class="icon">
          <i class="fab fa-spotify"></i>
        </span>
        <span>Go to Spotify</span>
      </a>
    </footer>
  </div>
</template>

<script>
import trackMixin from '~/mixins/track'
export default {
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>
