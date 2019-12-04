<template>
  <div class="container">
    <van-nav-bar fixed title="标题" left-text="返回" right-text="搜索" left-arrow @click-left="$router.go(-1)"
      @click-right="search" style="background:#3296fa; color:#fff;" v-if="path !== '/myinfo'"/>
    <div class="content" :class="{noTop: path === '/myinfo'}">
      <router-view></router-view>
    </div>
    <van-tabbar route fixed border active-color='green'>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/news" icon="label-o">
        新闻
      </van-tabbar-item>
      <van-tabbar-item replace to="/infomation" icon="apps-o">
        资讯
      </van-tabbar-item>
      <van-tabbar-item replace to="/myinfo" icon="user-circle-o">
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  methods: {
    search () {}
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
