import '@babel/polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import './plugins/vuetify'
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app');