// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App'

Vue.use(firestorePlugin)

Vue.filter('formatPrice', (value) => {
  let val = (value/1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
