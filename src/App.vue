<template>
  <div id="app">
    <Wallpaper ref="wallpaper"/>
    <ProductList/>
  </div>
</template>

<script>
import Wallpaper from './components/Wallpaper.vue'
import ProductList from './components/ProductList'
export default {
  name: 'App',
  components: {
    Wallpaper,
    ProductList
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
