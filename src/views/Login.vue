<template>
  <section class="section hero is-medium">
    <div class="container has-text-centered">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Login</p>
            </div>
          </div>
          <div class="content">
            <main>
              <form @submit.prevent="login">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-info">
                    Login
                  </button>
                  <a :href="oauth" class="button is-success">
                    Login with Spotify
                  </a>
                </p>
              </div>
            </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '~/services/authentication'
import config from '~/services/config'
export default {
  methods: {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    login () {
    }
  },
  computed: {
    oauth () {
      return `${config.api}/spotify`
    }
  },
  created () {
    var code = this.$route.query.code
    if (code) {
      api.authenticate(code).then(res => {
        localStorage.setItem('access_token', res.access_token)
        localStorage.setItem('refresh_token', res.refresh_token)
        this.$router.push('/')
      })
    }
  }
}
</script>
