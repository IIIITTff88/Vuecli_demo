<template>
  <div>
    <van-nav-bar title="信息编辑" right-text="保存" @click-right="onClickRight" style="background:#3296fa;color:#fff;" />
    <div class="content">
      <van-cell title="头像" @click="show=true" is-link center >
        <van-image slot="default" width="1rem" height="1rem" fit="cover" round :src="user.img" />
      </van-cell>
      <van-cell title="昵称" is-link @click="show1=true" :value="user.nickName" />
      <van-cell title="性别" is-link @click="show2=true" :value="user.sex === 0 ? '男' : '女' "  />
      <van-cell title="出生年月" is-link @click="show3=true" :value="user.brithday" />
      <van-popup v-model="show" position="bottom">
        <van-cell title="打开本地相册" is-link></van-cell>
        <van-cell title="打开相机" is-link></van-cell>
      </van-popup>
      <van-popup v-model="show1" position="bottom">
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-popup>
      <van-popup v-model="show2" position="bottom">
        <van-cell title="男" is-link></van-cell>
        <van-cell title="女" is-link></van-cell>
      </van-popup>
      <van-popup v-model="show3" position="bottom">
        <van-datetime-picker v-model="currentDate" type="date" title="请选择时间" @confirm="getTime" @cancel="show3=false" />
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        img: require('../../../public/images/gallery/16.png'),
        nickName: 'jack',
        sex: 0,
        brithday: '2018-8-8'
      },
      show: false,
      show1: false,
      show2: false,
      show3: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ],
      value: '',
      currentDate: new Date()
    }
  },
  methods: {
    onClickRight () {},
    onSelect (item) {
      console.log(item)
    },
    getTime (time) {
      console.log(time)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
