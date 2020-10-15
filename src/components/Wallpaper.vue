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
        navigation:false,
        bgOpacity: 0.8,
        images:[]
      },
      showImgNum:0
    }
  },
  methods:{
    refresh(){
      if(this.showImgNum<this.options.images.length-1){
        this.showImgNum++
        this.$refs.coinSlider.refresh()
      }else{
        this.showImgNum=0
        this.getImgList()
      }
    },
    getImgList(){
      axios.get('/bing/list').then(res=>{
        if(res&&res.data){
          this.options.images = res.data.map(c=>{
            return [c,'javascript:;']
          })
        }
      })
    }
  },
  created() {
    this.getImgList()
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
