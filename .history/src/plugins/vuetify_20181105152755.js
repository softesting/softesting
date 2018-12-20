import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuex)

Vue.use(Vuetify, {
  iconfont: 'fa4',
  icons: {
    'bomb': 'bomb'
  }
});