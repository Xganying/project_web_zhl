import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'

Vue.use(ElementUI)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
