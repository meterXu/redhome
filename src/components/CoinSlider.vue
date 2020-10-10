<template>
  <div id="bg" ref="bg">

  </div>
</template>

<script>
import coinSlider from 'coin-slider'
export default {
  name: "CoinSlider",
  props: ["options"],
  mounted() {
    new coinSlider("#bg",this.options)
  }
}
</script>

<style>

</style>
