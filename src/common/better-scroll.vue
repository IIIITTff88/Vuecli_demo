<template>
  <div>
    <div class="container" ref="wrapper">
      <div class="conten">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'BetterScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: { // 是否启用下拉刷新
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 1.滚动效果 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: false,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll', (position) => {
      // 将监听的数据坐标发射出去，父组件用来接收处理
      this.$emit('scroll', position)
    })
    // 3.实现加载更多 监听上拉事件
    this.scroll.on('pullingUp', () => {
      // 当滚动到底部的时候调用。
      console.log('底部到了')
      this.$emit('pullingUp')
    })
  }
}
</script>
<style lang="less">
</style>
