<template>
  <div class="main">
    <el-button>这是一个测试的按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    console.log('测试的组件创建了')
  }
}
</script>

<style scoped lang="less">
  .main {
    background: #18c48c;
    color: orange;
    font-size: 18px;
  }
</style>
