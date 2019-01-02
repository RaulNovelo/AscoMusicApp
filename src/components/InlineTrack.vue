<template>
  <div class="card">
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
      <div>
        <a id="play" @click="selectTrack" class="card-footer-item button is-success is-inverted">
          <span class="icon">
            <i class="fa fa-play"></i>
          </span>
          <span>Preview</span>
        </a>
      </div>
      </div>
    </div>
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
