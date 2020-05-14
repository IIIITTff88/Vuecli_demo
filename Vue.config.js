// module.exports = {
//   configureWebpack: {
//     externals: {
//       'BMap': 'BMap'
//     }
//   }
// }

const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 可加入需要的其他文件类型，比如json
// 图片不要压缩，体积会比原来还大
const productionGzipExtensions = ['js', 'css']

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            // filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240, // 对超过10k的数据进行压缩
            minRatio: 0.6 // 压缩比例，值为0 ~ 1
          })
        ],
        externals: {
          'BMap': 'BMap'
        }
      }
    }
  }
}
