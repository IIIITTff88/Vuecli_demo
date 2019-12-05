<template>
  <div class="back-top" @click="toTop">
    <img src="./image/to.png" alt="">
  </div>
</template>
<script>
export default {
  mounted: {
    toTop () {

    }
  }
}
</script>
<style lang="less" scoped>
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 10px;
    img {
      width: 50px;
    }
  }
</style>
