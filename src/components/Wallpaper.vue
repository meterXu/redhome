<template>
  <div>
    <CoinSlider options="options"/>
  </div>
</template>

<script>
import CoinSlider from "@/components/CoinSlider";
export default {
  name: 'Wallpaper',
  props: {
    msg: String
  },
  components:[
    CoinSlider
  ],
  data(){
    return {
      options:{
        width:'100%',
        height:500,
        delay:24*3600*1000*7,
        navigation:false,
        images:[
          ["http://h1.ioliu.cn/bing/BagpipeOpera_ZH-CN9506207351_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/KnittedPoppies_EN-GB11009515775_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/WatChaloem_ZH-CN8722271527_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/HatsuhinodeOarai_ZH-CN9858647947_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/SunFlowersStorm_FR-CA8863925685_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/Tegallalang_ROW5185124671_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/NightofNights_ZH-CN5872572560_1920x1080.jpg?imageslim","javascript:;"],
          ["http://h1.ioliu.cn/bing/DuskyDolphin_PT-BR11918143365_1920x1080.jpg?imageslim","javascript:;"]
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
