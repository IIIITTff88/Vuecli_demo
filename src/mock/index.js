import Mock from 'mockjs'

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const data = Mock.mock('/mock', {
  // "/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'userinfo|4': [{ // 生成四个如下格式的数据
    'id|+1': 1, // 数字从1开始，后续依次加1
    'name': '@cname', // 名字为随机中文名
    'age|18-28': 25, // 年龄是18-28之间的随机数
    'sex|1': ['男', '女'], // 性别是数组里的随机一项
    'job|1': ['web', 'teacher', 'python', 'php'] // job是数组里的随机一项
  }]
})

const newsList = Mock.mock('/news/List', {
  // "/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'newList|10': [{ // 生成四个如下格式的数据
    'id|+1': 1, // 数字从1开始，后续依次加1
    'author': '@cname', // 名字为随机中文名
    'title': Random.cparagraph(1), // 年龄是18-28之间的随机数
    'text': Random.cparagraph(150), // 性别是数组里的随机一项
    'date': Random.datetime(), // job是数组里的随机一项
    'city': Random.county(true),
    'webUrl': Random.url('http', 'nuysoft.com'), // 生成一个地址
    'font-type| 1-3': 0
  }]
})

export default {
  data,
  newsList
}
