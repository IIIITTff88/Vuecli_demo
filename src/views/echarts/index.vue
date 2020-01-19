<template>
  <div class="main">
    <el-divider>柱形图标</el-divider>
    <el-row>
      <el-col :span="8">
        <div id="e1" style="height:250px;width:250px;" ref="e1"></div>
      </el-col>
      <el-col :span="8" :offset="0.1">
        <div id="e2" style="height:350px;width:350px;" ref="e2"></div>
      </el-col>
      <el-col :span="8">
        <div id="e3" style="height:450px;width:450px" ref="e3"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div id="e4" style="width:600px;height:500px" ref="e4"></div>
      </el-col>
      <el-col :span="8" offset="1">
        <div id="e5" style="width:400px;height:400px" ref="e5"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // data: genData(50),
      option: {
        title: {
          text: '入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量'],
          itemWidth: '130'
        },
        xAxis: {
          data: [
            '衬衫',
            '羊毛衫',
            '雪纺衫',
            '胜多负',
            '给第三方',
            '查询',
            '第三方付'
          ]
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 50, 20, 30, 21],
            legendHoverLink: true,
            itemStyle: {
              // borderColor: 'red',
              // borderWidth: 3
            },
            barWidth: 10, // 设置柱条的宽度
            barCategoryGap: '50%'
          }
        ],
        color: 'orange'
      },
      option4: {
        title: {
          text: '折线图堆叠',
          padding: 20
          // top: -30
          // textAlign: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          name: '日期',
          axisLabel: {
            color: 'red',
            interval: 0,
            formatter: function (value) {
              return value.split('').join('\n')
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '时间'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      options: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '35%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' }
            ]
          }
        ]
      },
      option5: {
        legend: {},
        tooltip: {},
        grid: {
          bottom: '30%',
          show: true
        },
        dataset: {
          source: [
            ['product', '2015', '2016', '2017', '2018'],
            ['Matcha', 43.3, 85.8, 93.7, 100],
            ['Milk', 83.1, 73.4, 55.1, 100],
            ['Cheese', 86.4, 65.2, 82.5, 100],
            ['Walnut', 72.4, 53.9, 39.1, 100]
          ]
        },
        xAxis: { // x轴的配置
          type: 'category',
          show: true,
          axisLabel: {
            color: 'red',
            interval: 0,
            formatter: function (value) {
              return value.split('').join('\n')
            }
          },
          offset: 0,
          name: '名称',
          nameGap: 5
        },
        yAxis: {
          show: true,
          position: 'left',
          name: '销量',
          nameTextStyle: {
            color: 'blue',
            fontSize: 18,
            fontWeight: 'bold'
          },
          axisLine: {
            symbol: 'none'
          }
        },
        axisPointer: {
          show: true,
          type: 'shadow'
        },
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      }
    }
  },
  mounted () {
    console.log(this.$echarts)
    this.initEchats(this.$refs.e1, this.option)
    this.initEchats(this.$refs.e2, this.options)
    this.initEchats(this.$refs.e4, this.option4)
    this.initEchats(this.$refs.e5, this.option5)
    // this.initEchats(this.$refs.e3, this.options3)
    this._initEchartsPing()
  },
  methods: {
    initEchats (dom, options) {
      // eslint-disable-next-line no-undef
      let myChart = echarts.init(dom)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options)
    },
    _initEchartsPing () {
      // eslint-disable-next-line no-undef
      let myChart = echarts.init(this.$refs.e3)
      var data = this.genData(50)
      var option = {
        title: {
          text: '测试的饼图',
          right: 'center',
          textStyle: {
            color: 'orange', // 修改文字的颜色
            fontStyle: 'italic',
            fontSize: 18
            // height: 40,
            // lineHeight: 40
          }
        },
        radius: '10%', // 设置饼图大小
        center: ['50%', '50%'], // 设置饼图位置
        tooltip: {
          // show: false,
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          // align: 'auto',
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
          selected: data.selected
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '38%',
            center: ['50%', '50%'],
            data: data.seriesData.splice(1, 3),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    genData (count) {
      var nameList = [
        '赵',
        '钱',
        '孙',
        '李',
        '周',
        '吴',
        '郑',
        '王',
        '冯',
        '陈',
        '褚',
        '卫',
        '蒋',
        '沈',
        '韩',
        '杨',
        '朱',
        '秦',
        '尤',
        '许',
        '何',
        '吕',
        '施',
        '张',
        '孔',
        '曹',
        '严',
        '华',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '谢',
        '邹',
        '喻',
        '柏',
        '水',
        '窦',
        '章',
        '云',
        '苏',
        '潘',
        '葛',
        '奚',
        '范',
        '彭',
        '郎',
        '鲁',
        '韦',
        '昌',
        '马',
        '苗',
        '凤',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鲍',
        '史',
        '唐',
        '费',
        '廉',
        '岑',
        '薛',
        '雷',
        '贺',
        '倪',
        '汤',
        '滕',
        '殷',
        '罗',
        '毕',
        '郝',
        '邬',
        '安',
        '常',
        '乐',
        '于',
        '时',
        '傅',
        '皮',
        '卞',
        '齐',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顾',
        '孟',
        '平',
        '黄',
        '和',
        '穆',
        '萧',
        '尹',
        '姚',
        '邵',
        '湛',
        '汪',
        '祁',
        '毛',
        '禹',
        '狄',
        '米',
        '贝',
        '明',
        '臧',
        '计',
        '伏',
        '成',
        '戴',
        '谈',
        '宋',
        '茅',
        '庞',
        '熊',
        '纪',
        '舒',
        '屈',
        '项',
        '祝',
        '董',
        '梁',
        '杜',
        '阮',
        '蓝',
        '闵',
        '席',
        '季',
        '麻',
        '强',
        '贾',
        '路',
        '娄',
        '危'
      ]
      var legendData = []
      var seriesData = []
      var selected = {}
      for (var i = 0; i < count; i++) {
        var name =
          Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1)
        legendData.push(name)
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        })
        selected[name] = i < 6
      }

      return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
      }

      function makeWord (max, min) {
        var nameLen = Math.ceil(Math.random() * max + min)
        var name = []
        for (var i = 0; i < nameLen; i++) {
          name.push(nameList[Math.round(Math.random() * nameList.length - 1)])
        }
        return name.join('')
      }
    }
  }
}
</script>
<style lang="less">
  .main {
    background: #ffffff;
    padding: 20px;
  }
</style>
