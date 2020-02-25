import Home from './components/home/Home.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Signin from './components/auth/Signin.vue'
import Signup from './components/auth/Signup.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard},
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup}
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})