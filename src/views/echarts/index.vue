<template>
  <div class="main">
    <el-divider>柱形图标</el-divider>
    <el-row>
      <el-col :span="8">
        <div id="e1" style="height:350px;width:350px;" ref="e1"></div>
      </el-col>
      <el-col :span="8" :offset="0.1">
        <div id="e2" style="height:350px;width:350px;" ref="e2"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      option: {
        title: {
          text: '入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      options: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
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
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    console.log(this.$refs.e1)
    // eslint-disable-next-line no-undef
    console.log(echarts)
    this.initEchats(this.$refs.e1, this.option)
    this.initEchats(this.$refs.e2, this.options)
  },
  methods: {
    initEchats (dom, options) {
      // eslint-disable-next-line no-undef
      let myChart = echarts.init(dom)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options)
    }
  }
}
</script>
<style lang="less">
</style>
