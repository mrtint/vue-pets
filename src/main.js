import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue)

new Vue({
  el: '#pet-list',
  render: h => h(App)
})
