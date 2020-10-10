<template>
  <div id="app">
    <Wallpaper/>
  </div>
</template>

<script>
import Wallpaper from './components/Wallpaper.vue'

export default {
  name: 'App',
  components: {
    Wallpaper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
