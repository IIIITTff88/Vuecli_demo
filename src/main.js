import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'lib-flexible'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'

// eslint-disable-next-line camelcase
import zh_CN from 'vee-validate/dist/locale/zh_CN'

import './style/index.less'

// eslint-disable-next-line no-unused-varsOOOOO
// eslint-disable-next-line no-unused-vars
import Mock from './mock/index.js'

// 使用echats
// import echarts from 'echarts'

import moment from 'moment'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts

// 改变主题的颜色

Vue.prototype.$moment = moment

// import './style/element-variables.scss'

Vue.use(ElementUI)

// 启用Vue国际化插件
Vue.use(VueI18n)

// 配置VeeValidate
const i18n = new VueI18n({
  locale: 'chs', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'chs': require('./assets/languages/chs.json'), // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en': require('./assets/languages/en.json')
  }
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
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
