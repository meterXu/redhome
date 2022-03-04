<template>
  <div :style="bgStyle" class="wallpaper">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Wallpaper",
  props: {
    msg: String,
  },
  data() {
    return {
      bgUrl: null,
      images: null,
      cloneImages:null,
      stPageKey:'RDHOME-PAGE',
      stBgKey:'RDHOME-BG',
      page:1
    };
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: "url(" + this.bgUrl + ")",
      };
    }
  },
  methods: {
    refresh() {
      const nowBgIndex = this.cloneImages.findIndex(c=>c===this.bgUrl)
      this.cloneImages.splice(nowBgIndex, 1);
      const max = this.cloneImages.length - 1;
      const min = 0;
      const randomNum = Math.floor(Math.random() * (max - min)) + min;
      this.bgUrl = this.cloneImages[randomNum].toString();
      localStorage.setItem(this.stBgKey, this.bgUrl);
      if (max === 0) {
        this.cloneImages = [...this.images];
      }
    },
    getImgList(p) {
      return new Promise((resolve, reject) => {
        try {
          if(this.$config.baseUrl){
          axios.get(`/bing/webRand?p=${p}`).then((res) => {
            if (res.data) {
              this.images = res.data;
              this.cloneImages = [...this.images]
            }
            resolve();
          });
          }else{
            this.images = this.$config.defaultImages;
            this.cloneImages = [...this.images]
            resolve();
          }

        } catch (err) {
          reject();
        }
      });
    },
    async initBg() {
      const storageBg = localStorage.getItem(this.stBgKey);
      if (storageBg) {
        this.bgUrl = storageBg;
        this.getImgList(this.page);
      } else {
        await this.getImgList(this.page);
        if (this.images) {
          this.bgUrl = this.images[0];
        }
      }
    },
  },
  created() {
    this.initBg();
  },
};
</script>
<style scoped>
.refresh {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.wallpaper {
  width: 100vw;
  height: 100vh;
  background-color: #333;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: width,height 0.3s;
}
</style>
