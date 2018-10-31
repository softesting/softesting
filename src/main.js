import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')



Vue.use(Vuetify, {
  iconfont: 'fa4',
  icons:
  {
    'left-arrow': 'left-arrow'
  }
 })