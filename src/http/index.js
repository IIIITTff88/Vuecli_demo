import axios from 'axios'

class Http {
  static ajax (options) {
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        type: options.type,
        data: options.data && options.data.paras
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default Http
