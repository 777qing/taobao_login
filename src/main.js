import Vue from 'vue'
import App from './App.vue'
import '../public/font_iftac4j3pfb/iconfont.css'
import '@/css/rest.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
