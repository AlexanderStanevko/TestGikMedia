import Vue from 'vue'
import App from './App.vue'
import '../src/styles/main.scss'

import { BootstrapVue } from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  render: h => h(App)
})
