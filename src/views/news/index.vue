<template>
  <div class="main">
    <better-scroll class="content" :probeType="3" :pullUpLoad="true" @scroll="scroll" @pullingUp="pullingUp" ref="scroll">
      <ul>
        <li v-for="item in 100" :key="item">{{item}}</li>
      </ul>
      <van-button plain type="primary" @click="show=!show" size="mini">是否显示骨架屏</van-button>
    </better-scroll>
    <go-back v-show="isshow" @click.native="backclick"></go-back>
  </div>
</template>
<script>
import BetterScroll from '../../common/better-scroll'
import goBack from '../../common/goTop'
export default {
  components: {
    BetterScroll,
    goBack
  },
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    scroll (position) {
      console.log(position)
      this.isshow = -position.y > 1000
    },
    pullingUp () {
      this.getHomeGoods(this.cutype)
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.refresh() // 重新计算容器的高度
    },
    backclick () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    getHomeGoods () {
      // to do
    }
  }
}
</script>
<style lang="less" scoped>
  .main {
    height: calc(100vh);
    position: relative;
    .content {
      position: absolute;
      overflow: hidden;
      top: 0;
      bottom: 40px;
      left: 0;
      right: 0;
      li {
        height: 50px;
        line-height: 50px;
        &:nth-child(2n-1) {
          background: f3f4f4
        }
        &:nth-child(2n) {
          background: pink;
        }
        &:nth-child(0) {
          background: #f3f4f4;
        }
      }
    }
  }
</style>
