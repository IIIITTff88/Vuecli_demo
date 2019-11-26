// let OSS = require('ali-oss')

// let OSS = require('ali-oss')
import oss from 'ali-oss'
export var client = oss({
  accessKeyId: 'your access key',
  accessKeySecret: 'your access secret',
  bucket: 'your bucket name',
  region: 'oss-cn-hangzhou'
})
