// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import io from 'socket.io-client'
import store from './store'


// let socket = io('https://chorewars.herokuapp.com')

// socket.on('CONNECTED', function (data) {
//   console.log(data)
//   socket.emit('update', {})
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
