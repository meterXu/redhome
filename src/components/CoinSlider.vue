<template>
  <div id="bg" ref="bg">

  </div>
</template>

<script>
import $ from 'jquery'
import 'coin-slider'
export default {
  name: "CoinSlider",
  props: ['options'],
  methods:{
    refresh(){
      $("#bg").coinslider('refresh')
    }
  },
  watch:{
    options:{
      handler:function (v) {
        $("#bg").coinslider(v)
      },
      deep:true
    }
  },
  mounted() {
    $("#bg").coinslider(this.options)
  }
}
</script>

<style>

</style>
