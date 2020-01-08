
let menu = [
  { name: '表格',
    path: '/table',
    icon: 'el-icon-s-fold',
    children: [
      { name: '高级表格', path: '/table/height' },
      { name: '基础表格', path: '/table/base' }
    ] },
  { name: '表单',
    path: '/form',
    icon: 'el-icon-reading',
    children: [
      { name: '基础表格', path: '/form/base' },
      { name: '高级表格', path: '/form/height' }
    ] },
  { name: 'input组件', path: '/input', icon: 'el-icon-mobile' },
  { name: '树枝插件', path: '/tree', icon: 'el-icon-s-help' },
  { name: 'tab切换', path: '/tab', icon: 'el-icon-video-camera' },
  { name: '文件上传', path: '/upload', icon: 'el-icon-video-camera' },
  { name: '测试路由', path: '/myloog', icon: 'el-icon-video-camera' },
  { name: '时间线', path: '/timeLine', icon: 'el-icon-s-promotion' },
  { name: 'echarts', path: '/echarts', icon: 'el-icon-paperclip' }
]
export default menu
