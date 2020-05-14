<template>
  <div>
    <h1>这是一个测试的组件---------------------testCom</h1>
    <el-row>
      <el-col>
        <el-button @click="goBack">返回</el-button>
        <el-button @click="logoTest"></el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  created () {
    console.log(new Date())
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    logoTest () {
      this.$router.push('/test/logo')
    },
    lookId () {
      if (this.$route.path === '/test-Com') {
        if (this.$route.query.id === 1) {
          console.log('我是正确的路由参数')
        }
      }
    }
  },

  watch: {
    '$route.query.id': 'lookId'
  }
}
</script>
<style lang="less" scoped>

</style>>
