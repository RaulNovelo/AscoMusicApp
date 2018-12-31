<template>
    <section class="section">
      <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input is-large" @keyup.enter="search" v-model="searchQuery"  type="text" placeholder="Search songs...">
        </div>
        <p class="control">
          <a class="button is-large is-info" @click="search">
            <span class="icon is-large">
              <i class="fas fa-search"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-large is-danger" @click="searchQuery = ''">
            <span class="icon is-large">
              <i class="fas fa-times"></i>
            </span>
          </a>
        </p>
      </div>
      <div class="content">
        <p><small>{{ results > 0 ? searchMessage : '' }}</small></p>
      </div>
      <div class="content has-text-centered" v-show="isLoading">
        <span class="icon is-large">
        <i class="fas fa-spinner fa-pulse fa-2x"></i>
        </span>
      </div>
      <div class="columns" v-for="(t, i) in tracks" :key="i">
        <div class="column is-one-quarters-mobile" v-for="(track, j) in t" :key="j">
          <track-card v-blur="!!track.preview_url" :track="track"></track-card>
        </div>
      </div>
    </section>
</template>

<script>
import trackService from '~/services/track'
import TrackCard from '@/TrackCard'
export default {
  data () {
    return {
      searchQuery: '',
      isLoading: false,
      results: 0,
      tracks: []
    }
  },
  components: {
    TrackCard
  },
  computed: {
    searchMessage () {
      return `Found: ${this.results.toLocaleString()} results`
    }
  },
  created () {
    this.search()
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.tracks = []
      this.results = 0
      this.isLoading = true
      trackService.search(this.searchQuery).then(res => {
        var result = res.tracks.items
        for (let index = 0; index < result.length; index = index + 4) {
          this.tracks.push(result.slice(index, index + 4))
        }
        this.searchQuery = ''
        this.results = res.tracks.total
        this.isLoading = false
      }, e => console.log(e))
    }
  }
}
</script>
