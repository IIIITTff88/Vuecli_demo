<template>
  <div id="main">
    <el-container style="height: calc(100vh); border: 1px solid #eee">
      <div class="my-aside test-5">
        <el-row class="col_top">
          <div class="my-top" id="top">
            系统列表
          </div>
        </el-row>
        <el-aside width="" class="test-5">
          <el-menu class="menu" router :default-active="$route.path" :collapse="false">
            <template v-for="(menu_v,menu_k) in menu">
              <el-submenu :key="menu_k" v-if="menu_v.children" :index="menu_v.name">
                <template slot="title">
                  <i :class="menu_v.icon"></i>
                  <span slot="title">{{ menu_v.name }}</span>
                </template>
                <el-menu-item v-for="(menuChildren_v,menuChildren_k) in menu_v.children" :key="menuChildren_k"
                  :index="menuChildren_v.path">
                  <i :class="menuChildren_v.icon"></i>
                  <span slot="title">{{ menuChildren_v.name }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item :key="menu_k" v-else :index="menu_v.path">
                <i :class="menu_v.icon"></i>
                <span slot="title">{{ menu_v.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-row class="col_bottom">
          <div class="my-bottom">
            返回
          </div>
        </el-row>
      </div>

      <el-container>
        <el-header style="text-align: right; font-size: 12px; height:50px">
          <!-- <el-col :span="4">
            <span @click="changelang('en')" style="cursor: pointer">中文</span>
            <span @click="changelang('zh')" style="margin-left: 20px;cursor: pointer;">英文</span>
            <span>{{msg | test}}</span>
          </el-col> -->
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出系统</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main class="test-5" style="background:#f3f3f3;" @scroll="scrollTop($event)">
          <router-view @scroll="scrollTop($event)" ref="content"></router-view>
        </el-main>
        <el-footer style="text-align: center; font-size: 14px; height:50px;background: #1bbd57">
          我是底部
        </el-footer>
      </el-container>
    </el-container>
    <div style="position:fixed;right:40px;bottom:20px;border-radius:20px;opacity:0.8;">
      <img src="../assets/images/001.png" alt="" style="border-radius:20px;" @click="goTop">
    </div>
    <!-- 返回顶部 -->
    <!-- <div class="goTop"> -->
      <!-- <template>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
      </template> -->
    <!-- </div> -->
  </div>
</template>
<script>
import menu from '../menu/menu'
// import ThemePicker from '../common/ThemePicker'
export default {
  components: {
    // ThemePicker
  },
  filters: {
    test (val) {
      console.log(this)
      return val
        .split('')
        .reverse()
        .join()
    }
  },
  data () {
    return {
      menu: menu,
      color1: 'red',
      theme: '',
      msg: 'hello world',
      btnFlag: true
    }
  },

  computed: {},
  created () {
    this.scrollTop()
    // console.log(this.menu)
    // console.log(111)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    changelang (type) {
      console.log(this.$i18n)
      console.log(type)
      this.$i18n.locale = type
    },
    fn (type) {
      console.log(type)
    },
    goTop () {
      console.log(123)
      this.$refs.content.scrollTop = 0
      console.log(this.$refs.content)
    },
    scrollTop (e) {
      console.log(e)
    },
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    scrollToTop () {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>
<style lang="less">
#main {
  .my-aside {
    height: calc(100vh) -100px;
    min-width: 220px;
    margin: 50px 0;
    overflow-x: hidden;
    background: #fff;
    .col_top {
      position: fixed;
      top: 0;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #18c48c;
      width: 220px;
      font-weight: 700;
      color: beige;
    }
    .col_bottom {
      position: fixed;
      bottom: 0;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #18c48c;
      width: 220px;
      font-weight: 700;
    }
    .el-aside {
      overflow-x: hidden;
      background-color: #fff;
      /deep/ .menu {
        background-color: #fff;
        border-right: none;
        /deep/ .el-menu {
          background: #fff;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: red;
    width: calc(100vw);
  }
}
.el-header {
  background-color: rgb(164, 216, 160);
  color: #333;
  line-height: 50px;
  /deep/ .el-color-picker__trigger {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    transform: translateY(25%);
  }
}
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 50px;
}

.el-aside {
  color: #333;
}
.goTop {
  position: fixed;
  right: 20px;
  bottom: 20px;
  img {
    opacity: 0.8;
    border-radius: 50px;
  }
}
</style>
