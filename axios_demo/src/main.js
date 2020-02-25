import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'
import { store } from './store/store.js'

import 'bootstrap/dist/css/bootstrap.css'
// import Axios from 'axios'

// Axios.defaults.baseURL = 'https://axios-demo-8f6b9.firebaseio.com'
// Axios.defaults.headers.get['Accepts'] = 'application/json'

// Axios.interceptors.request.use( config => {
//   console.log('Request',config)
//   return config
// })

// Axios.interceptors.response.use( config => {
//   console.log('Response',config)
//   return config
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
