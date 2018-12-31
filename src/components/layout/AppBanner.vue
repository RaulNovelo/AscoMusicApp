<template>
    <section class="hero is-success is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">AscoMusic</h1>
          <h2 class="subtitle">Canciones que estan Vue-nísimas!</h2>
          <player/>
        </div>
      </div>
    </section>
</template>

<script>
import Player from '@/Player'
export default {
  components: {
    Player
  }
}
</script>
