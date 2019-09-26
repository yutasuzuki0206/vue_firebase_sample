import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase';

Vue.config.productionTip = false

const Config = {
    apiKey: "AIzaSyAuyWZ4bYHMfOAHU9HBBV5c9RBoovsobmw",
    authDomain: "my-address-pj-99fe3.firebaseapp.com",
    databaseURL: "https://my-address-pj-99fe3.firebaseio.com",
    projectId: "my-address-pj-99fe3",
    storageBucket: "",
    messagingSenderId: "863800577235",
    appId: "1:863800577235:web:73fc3807ca54e570cc9826"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
