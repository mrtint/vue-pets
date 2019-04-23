import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwXS0onUp8QIkJOY633ZoBpxawFW6A63c",
  authDomain: "vuepets-30e00.firebaseapp.com",
  databaseURL: "https://vuepets-30e00.firebaseio.com",
  projectId: "vuepets-30e00",
  storageBucket: "vuepets-30e00.appspot.com",
  messagingSenderId: "535696952196"
};
firebase.initializeApp(config);

//Bootstrap
Vue.use(BootstrapVue)

// Vue
new Vue({
  el: '#pet-list',
  render: h => h(App)
})
