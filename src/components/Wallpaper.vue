<template>
  <div>
    <CoinSlider ref="coinSlider" :options="options"/>
  </div>
</template>

<script>
import axios from 'axios'
import CoinSlider from "@/components/CoinSlider";
export default {
  name: 'Wallpaper',
  props: {
    msg: String
  },
  components:{
    CoinSlider
  },
  data(){
    return {
      options:{
        width:'100%',
        height:window.innerHeight,
        delay:24*3600*1000*7,
        sDelay:50,
        navigation:false,
        bgOpacity: 0.8,
        images:[]
      },
      cacheImages:[],
      showImgNum:0
    }
  },
  methods:{
    refresh(){
      if(this.showImgNum<this.options.images.length-1){
        if(this.showImgNum===Math.floor(this.options.images.length/2)){
          this.cacheImgList()
        }
        this.showImgNum++
        this.$refs.coinSlider.refresh()
      }else{
        this.showImgNum=0
        this.options.images = this.cacheImages
      }
      window.localStorage.setItem('RD-HOME-BG',JSON.stringify(this.options.images[this.showImgNum]))
    },
    getImgList(){
      axios.get('/bing/list').then(res=>{
        if(res&&res.data){
          this.options.images = res.data.map(c=>{
            return [c,'javascript:;']
          })
        }
      })
    },
    cacheImgList(){
      axios.get('/bing/list').then(res=>{
        if(res&&res.data){
          this.cacheImages = res.data.map(c=>{
            return [c,'javascript:;']
          })
        }
      })
    }
  },
  mounted() {
    const rdHomeBg = window.localStorage.getItem('RD-HOME-BG')
    if(rdHomeBg){
      this.cacheImgList()
      this.options.images = [JSON.parse(rdHomeBg)]
    }else {
      this.getImgList()
    }

  }
}
</script>
<style scoped>
.refresh{
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
