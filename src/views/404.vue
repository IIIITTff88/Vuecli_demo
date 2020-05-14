<template>
  <div class="main">
    <p>你访问的页面不存在,<a @click="goHome" style="color:red;"> 请去首页</a></p>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goHome () {
      this.$router.push('/about')
    }
  }
}
</script>
<style lang="less">
.main {
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
