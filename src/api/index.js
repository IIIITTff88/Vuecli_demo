import axios from 'axios'

export default class Http {
  static ajax (options) {
    const baseUrl = 'http://localhost:8080'
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: options.url,
        baseURL: baseUrl,
        data: (options.data && options.data.params) || '', // 求情携带的参数
        timeout: 5000 // 最长的请求的时间
      }).then(response => {
        console.log(response)
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static http (options) {
    return new Promise((resolve, reject) => {
      axios({
        method: options.type,
        url: options.url,
        data: (options.data && options.data.params) || ''
      }).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
