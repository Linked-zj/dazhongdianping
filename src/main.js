import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import i18n from "./i18n/index";
import VueI18n from "vue-i18n";
import './icons'


import { httpGet, httpPost, baseUrl } from './utils/httpService'



// 瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

Vue.config.productionTip = false

Vue.prototype.httpGet = httpGet;
Vue.prototype.httpPost = httpPost;
Vue.prototype.baseUrl = baseUrl;

// 多语言
Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入rem
import '@/config/rem'
// 全局引入 Reset-css
import 'reset-css'
//  全局引入 过滤器
import '@/config/filter'



new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
