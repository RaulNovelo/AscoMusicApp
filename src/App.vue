<template>
  <div id="app">
    <app-navbar/>
    <app-banner/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppNavbar from '@/layout/AppNavbar'
import AppBanner from '@/layout/AppBanner'
import AppFooter from '@/layout/AppFooter'
export default {
  name: 'app',
  components: {
    AppNavbar,
    AppBanner,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import '~bulma/bulma.sass';
</style>
