import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http-deac5.firebaseio.com/'

Vue.http.interceptors.push(( request, next ) => {
  console.log(request)
  if( request.method == 'POST'){
    request.method = 'PUT'
  }
  next( response => {
    response.json = () => { return { messages: response.body }}
  })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
