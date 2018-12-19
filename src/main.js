// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueLocalStorage)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  localStorage: {
    stringKey: {
      type: String
    },
    numberKey: {
      type: Number
    },
    booleanKey: {
      type: Boolean,
      default: true
    },
    listKey: {
      type: Array
    },
    objectKey: {
      type: Object,
      default: {
        val: 'default'
      }
    },
    noTypeKey: ''
  }
})
