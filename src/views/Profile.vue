<template>
<section class="section"><div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img v-if="profile.images[0]" :src="profile.images[0].url">
          <img v-else :src="user">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ profile.display_name }}</p>
        <p class="subtitle is-6">{{ profile.email }}</p>
        <strong>{{ profile.country }}</strong>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <br><a :href="profile.external_urls.spotify">Spotify profile</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</section>
</template>

<script>
import api from '~/services/track'
export default {
  data () {
    return {
      user: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'
    }
  },
  computed: {
    profile () {
      return this.$store.state.user.profile
    }
  },
  mounted () {
    api.getUserInfo().then(res => {
      this.$store.commit('user/setProfile', res)
    })
  }
}
</script>
