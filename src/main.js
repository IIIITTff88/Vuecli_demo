import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'
// eslint-disable-next-line camelcase
import zh_CN from 'vee-validate/dist/locale/zh_CN'

import './style/index.less'

// eslint-disable-next-line no-unused-vars
import Mock from './mock/index.js'

import moment from 'moment'

// 改变主题的颜色

Vue.prototype.$moment = moment

// import './style/element-variables.scss'

Vue.use(ElementUI)

// 启用Vue国际化插件
Vue.use(VueI18n)

// 配置VeeValidate
const i18n = new VueI18n({
  locale: 'zh_CN'
})

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
