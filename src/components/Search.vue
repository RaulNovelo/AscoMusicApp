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
      <div>
        <p><small>{{ results > 0 ? searchMessage : '' }}</small></p>
        <div class="buttons has-addons is-right">
        <a class="button" @click="withImages = true, isList = false" :class="{'is-selected is-info': withImages}">
          <span class="icon is-small">
            <i class="fas fa-th"></i>
          </span>
        </a>
        <a class="button" @click="isList = true, withImages = false" :class="{'is-selected is-info': isList}">
          <span class="icon is-small">
            <i class="fas fa-list"></i>
          </span>
        </a>
    </div>
      </div>
        <div class="columns is-multiline">
          <div class="column is-one-quarters" :class="{'is-12-desktop': isList}" v-for="(t, i) in tracks" :key="i">
            <track-inline v-if="isList" v-blur="t.preview_url" :track="t"></track-inline>
            <track-card v-else v-blur="t.preview_url" :track="t"></track-card >
          </div>
        </div>
    </section>
</template>

<script>
import trackService from '~/services/track'
import TrackCard from '@/TrackCard'
import TrackInline from '@/InlineTrack'
export default {
  data () {
    return {
      searchQuery: '',
      isList: true,
      withImages: false,
      isLoading: false,
      results: 0,
      tracks: []
    }
  },
  components: {
    TrackCard,
    TrackInline
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
        this.tracks = res.tracks.items
        this.results = res.tracks.total
        this.isLoading = false
      }, e => {
        console.log(e)
        this.$router.push('/login')
      })
    }
  }
}
</script>
