import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { routes } from './routes' 

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('Global BeforeEach')
  next();
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
