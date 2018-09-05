import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Toast from "./components/toast"

Vue.prototype.$axios = axios
Vue.$toast = Toast;
Vue.prototype.$toast = Vue.$toast
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')