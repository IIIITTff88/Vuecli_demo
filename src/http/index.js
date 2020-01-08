import axios from 'axios'
import { Loading } from 'element-ui'

// let service = axios.create({
//   baseURL: process.env.NODE_ENV === 'production' ? 'production' : 'measurement',
//   headers: {
//     get: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//       // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
//     },
//     post: {
//       'Content-Type': 'application/json;charset=utf-8'
//       // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
//     }
//   },
//   // 跨域请求时是否需要使用凭证
//   withCredentials: true,
//   // 请求 30s 超时
//   timeout: 30000,
//   validateStatus: function () {
//     // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
//     return true
//   },
//   // 请求前处理参数
//   transformRequest: [function (data) {
//     data = JSON.stringify(data)
//     return data
//   }],
//   // 响应处理参数
//   transformReponse: [function (data) {
//     if (typeof data === 'string' && data.startWith('{')) {
//       data = JSON.parse(data)
//     }
//     return data
//   }]
// })

// // 请求拦击器的配置
// service.interceptors.request.use((config) => {
//   return config
// }, (error) => {
//   error.data = {}
//   error.data.msg = '服务器异常'
//   return Promise.resolve(error)
// })

// // 根据不同的状态码  生产不同的提示信息
// const showStatus = (status) => {
//   // eslint-disable-next-line no-unused-vars
//   let message = ''
//   switch (status) {
//     case 400:
//       message = '请求错误'
//       break
//     case 401:
//       message = '未授权，请重新登录'
//       break
//     case 403:
//       message = '拒绝访问'
//       break
//     case 404:
//       message = '访问的地址不存在'
//       break
//     case 408:
//       message = '请求超时'
//       break
//     case 500:
//       message = '服务器异常'
//       break
//     case 504:
//       message = '网络超时'
//       break
//     case 505:
//       message = 'http版本不受支持'
//       break
//     default:
//       message = `链接错误（${status}）`
//   }
//   return `${message},错误的信息`
// }
// showStatus('404')

// // 响应拦截器
// service.interceptors.response.use(response => {
//   let status = response.status
//   // eslint-disable-next-line no-unused-vars
//   let msg = ''
//   if (status < 200 || status > 300) {
//     msg = showStatus(status)
//     if (typeof response.data === 'string') {
//       response.data = { msg }
//     } else {
//       response.data = msg
//     }
//   }
//   return response
// }, (error) => {
//   error.data = {}
//   error.data.msg = '请求异常'
//   return Promise.resolve(error)
// })

// 封装请求的方法的类
class Http {
  static ajax (options) {
    return new Promise((resolve, reject) => {
      let loadingInstance = Loading.service({
        lock: true,
        text: '正在加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      axios({
        url: options.url,
        type: options.type,
        data: options.data && options.data.paras
      }).then(res => {
        if (res.status === 200) {
          loadingInstance.close()
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

// export default {
//   // service,
//   Http
// }

export default Http
