// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import MainA from './components/MainA'
import HunterList from './pages/HunterList'
import HunterDetail from './pages/HunterDetail'
import Positions from './pages/Positions'
import Message from './pages/Message'
import Me from './pages/Me'

import 'animate.css/animate.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Router)

const routes = [
  { path: '/', component: MainA },
  { path: '/HunterDetail', component: HunterDetail },
  { path: '/HunterList', component: HunterList },
  { path: '/Positions', component: Positions },
  { path: '/Message', component: Message },
  { path: '/Me', component: Me },
]

//使用路由规则
const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
})
