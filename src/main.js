import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import FlagIcon from 'vue-flag-icon'

import router from './router'
import store from './store'

import blur from './directives/blur'
import msToMm from './filters/ms-to-mm'

console.log(process.env)

Vue.use(FlagIcon)
Vue.use(blur)
Vue.use(msToMm)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
