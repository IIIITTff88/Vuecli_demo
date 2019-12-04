<template>
  <div>
    <van-skeleton title :row="10" avatar v-if="show"/>
    <van-button plain type="primary" @click="show=!show" size="mini">是否显示骨架屏</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
<style lang="">

</style>
