import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.get('./config.json').then(c=>{
  if(c.data){
    Vue.prototype.$config = c.data
    axios.defaults.baseURL = c.data.baseUrl
    new Vue({
      render: h => h(App),
    }).$mount('#app')
  }
})



