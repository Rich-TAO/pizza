// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store.js'
Vue.prototype.$axios = axios

Vue.config.productionTip = false


//全局守卫
// router.beforeEach((to,from,next) => {
//   if (to.name == 'LoginLink'){
//     next();
//   }else{
//     alert('cuo')
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
