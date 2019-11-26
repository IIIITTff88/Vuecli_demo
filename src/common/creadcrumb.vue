<template>
  <div class="main">

    <el-breadcrumb separator-class="el-icon-arrow-right">
    <span class="top-left">
      <i class="el-icon-location-outline"></i>
      <span>当前的位置</span>
    </span>
      <el-breadcrumb-item v-for="(item,index) in data" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .main {
    height: 40px;
    line-height: 40px;
    .top-left {
      float: left;
      font-size: 14px;
      margin-right: 15px;
      i {
        margin-right: 10px;
      }
    }
  }
</style>
