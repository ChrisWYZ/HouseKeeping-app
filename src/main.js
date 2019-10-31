import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from  'moment'


Vue.config.productionTip = false
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format("YYYY-MM-DD HH:mm:ss")
  }else {
    return val;
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
