import Mock from 'mockjs'

Mock.setup({
  timeout: 2000 // 延迟请求的时间
})

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const data = Mock.mock('/mock', {
  // "/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'testList|10': [{ // 生成四个如下格式的数据
    'id|+1': 1, // 数字从1开始，后续依次加1
    'name': '@cname', // 名字为随机中文名
    // 'age|18-28': 25, // 年龄是18-28之间的随机数
    // 'sex|1': ['男', '女'], // 性别是数组里的随机一项
    // 'job|1': ['web', 'teacher', 'python', 'php'], // job是数组里的随机一项
    'email': Random.email(), // 随机生成一个邮箱的地址
    'num': Random.natural(0, 10), // 返回一个随机的自然数（大于等于 0 的整数）。
    'string': Random.string(7, 10), // 返回一个随机的字符串
    'arr': Random.range(1, 10, 3), // 返回一个数组  参数3为步长
    'time': Random.time('HH:mm:ss'), // 返回一个时间
    'date_time': Random.datetime('yy-MM-dd a HH:mm:ss'), // 生成一个日期加时间
    'image': Random.image('200x100', '#fb0a2a'), // 随机生成一个图片的地址
    'dataImage': Random.dataImage(), // 生成base64图片的地址
    'color': Random.color(), // 随机生成一个颜色（为十六进制的色值）
    'english_text': Random.sentence(2, 5), // 随机生成一个英文的句子
    'province': Random.province(), // 随机生成一个省份
    'city': Random.city(), // 随机生成一个市  参数为布尔值表示是否带所属的省份
    'county': Random.county(), // 随机生成一个县  参数为布尔值表示是否带所属的省份
    'zip': Random.zip(), // 随机生成一个邮政编码
    'uId': Random.id(), // 随机生成一个身份证号
    'detail_adress': Random.county(true)
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

const tableList = Mock.mock('/tabble/List', {
  // "/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'newList|10': [{ // 生成四个如下格式的数据
    'id|+1': 1, // 数字从1开始，后续依次加1
    'name': '@cname', // 名字为随机中文名
    'age|18-40': 20, // 年龄是18-28之间的随机数
    'adress': Random.county(true), // 性别是数组里的随机一项
    'date': Random.datetime(), // job是数组里的随机一项
    'city': Random.county(true),
    'sex|1': ['男', '女'], // 性别是数组里的随机一项
    'detail': Random.cparagraph(5)
  }]
})

export default {
  data,
  newsList,
  tableList
}
