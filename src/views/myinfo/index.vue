<template>
  <div class="container">
    <div class="content_top">
      <div class="personal_info">
        <van-row>
          <van-col span="6">
            <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" style="" class="avator_img"
              round />
          </van-col>
          <van-col span="18" class="info_message">
            <p class="info">个人信息</p>
            <van-tag plain type="primary">认证信息</van-tag>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row class="item" style="text-align: center;color: #fff;">
          <van-col span="6">
            <p>12</p>
            <p>动态</p>
          </van-col>
          <van-col span="6">
            <p>111</p>
            <p>动态</p>
          </van-col>
          <van-col span="6">
            <p>1212</p>
            <p>动态</p>
          </van-col>
          <van-col span="6">
            <p>1234</p>
            <p>动态</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="content_center">
      <van-row>
        <van-col span="8">
          <van-icon class="item" name="newspaper-o" color="#7af" />我的作品
        </van-col>
        <van-col span="8">
          <van-icon class="item" name="search" color="green" />我的点赞
        </van-col>
        <van-col span="8">
          <van-icon class="item" name="like" color="red" />我的收货地址
        </van-col>
      </van-row>
    </div>
    <van-cell-group>
      <van-cell title="个人信息" is-link @click="$router.push('/edit')" icon="manager" />
      <van-cell title="收货地址" is-link url="/vant/mobile.html" icon="location" />
      <van-cell title="系统设置" is-link url="/vant/mobile.html" icon="setting" />
      <van-cell title="退出登录" icon="bell" @click="goOut" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goOut () {
      this.$dialog.confirm({
        title: '提示',
        message: '其确定要退出吗？'
      }).then((res) => {
        this.$router.push('/home')
        // on close
        console.log(res)
      }).catch(e => {
        return false
      })
    }
  }
}
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  padding: 0;
  .content_top {
    background: #3296fa;
    padding: 10px 10px;
    .personal_info {
      padding: 5px 10px;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .info_message {
        margin-top: 20px;
        padding-left: 30px;
        color: #fff;
      }
    }
  }
  .content_center {
    text-align: center;
    margin-bottom: 15px;
    .item {
      font-size: 30px;
      padding: 10px 0;
      display: block;
      text-align: center;
    }
  }
}
</style>
