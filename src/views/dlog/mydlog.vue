<template>
  <div>
    <el-row class="btn-group">
      <el-col :span="2" >
        <el-button @click="addMark">添加标注</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="addControl">添加自定义的控件</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="addCity">添加城市</el-button>
      </el-col>
    </el-row>
    <div id="map"></div>
    <el-row>
      <el-col>
        <div class="e1" id="e1"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    // 创建地图实例
    createMap () {
      // 创建Map实例
      var map = new BMap.Map('map')
      var geolocation = new BMap.Geolocation()
      // 调用百度地图api 中的获取当前位置接口
      geolocation.getCurrentPosition(function (r) {
        // eslint-disable-next-line no-undef
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          // 获取当前位置经纬度
          let myGeo = new BMap.Geocoder()
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function (
            result
          ) {
            if (result) {
              console.log(result)
              // 初始化地图,设置中心点坐标和地图级别
              map.centerAndZoom(
                new BMap.Point(result.point.lng, result.point.lat),
                11
              ) // 设置中心点
              map.setCurrentCity('北京') // 由于有3D图，需要设置城市哦
              // 开启鼠标滚轮缩放,默认关闭
              map.enableScrollWheelZoom(false)
              // 添加缩略图控件
              // eslint-disable-next-line no-undef
              map.addControl(
                new BMap.OverviewMapControl({
                  isOpen: false,
                  // eslint-disable-next-line no-undef
                  anchor: BMAP_ANCHOR_BOTTOM_RIGHT
                })
              )
              // 添加缩放平移控件
              map.addControl(new BMap.NavigationControl())
              // 添加比例尺控件
              map.addControl(new BMap.ScaleControl())
              // 添加地图类型控件
              map.addControl(new BMap.MapTypeControl())
              var marker = new BMap.Marker(
                new BMap.Point(result.point.lng, result.point.lat)
              )
              // 把标注添加到地图上
              map.addOverlay(marker)
            }
          })
        }
      })
    },
    addControl () {
      var map = new BMap.Map('map')
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)

      // eslint-disable-next-line no-undef
      var cr = new BMap.CopyrightControl({ anchor: BMAP_ANCHOR_TOP_RIGHT }) // 设置版权控件位置
      map.addControl(cr) // 添加版权控件

      var bs = map.getBounds() // 返回地图可视区域
      cr.addCopyright({
        id: 1,
        content:
          "<a href='#' style='font-size:20px;background:yellow'>我是自定义版权控件呀</a>",
        bounds: bs
      })
      // Copyright(id,content,bounds)类作为CopyrightControl.addCopyright()方
    },
    addCity () {
      var mp = new BMap.Map('map')
      var point = new BMap.Point(116.404, 39.915)
      mp.centerAndZoom(point, 14)
      mp.enableScrollWheelZoom()
      mp.enableInertialDragging()

      mp.enableContinuousZoom()

      var size = new BMap.Size(10, 20)
      mp.addControl(
        new BMap.CityListControl({
          // eslint-disable-next-line no-undef
          anchor: BMAP_ANCHOR_TOP_LEFT,
          offset: size
          // 切换城市之前事件
          // onChangeBefore: function(){
          //    alert('before');
          // },
          // 切换城市之后事件
          // onChangeAfter:function(){
          //   alert('after');
          // }
        })
      )
    },
    addMark () {
      var map = new BMap.Map('map')
      var point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 15)
      // 编写自定义函数,创建标注
      function addMarker (point) {
        var marker = new BMap.Marker(point)
        map.addOverlay(marker)
      }
      // 随机向地图添加25个标注
      var bounds = map.getBounds()
      var sw = bounds.getSouthWest()
      var ne = bounds.getNorthEast()
      var lngSpan = Math.abs(sw.lng - ne.lng)
      var latSpan = Math.abs(ne.lat - sw.lat)
      for (var i = 0; i < 25; i++) {
        let point = new BMap.Point(
          sw.lng + lngSpan * (Math.random() * 0.7),
          ne.lat - latSpan * (Math.random() * 0.7)
        )
        addMarker(point)
      }
    }
  }
}
</script>
<style lang="less">
@import url('./index.less');
</style>
