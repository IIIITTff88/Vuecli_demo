<template>
  <div class="main p20">
    <creadcrumb :data="data"></creadcrumb>
    <el-row class="mb15">
      <el-button @click="add">测试的按钮</el-button>
    </el-row>
    <el-form :model="form" ref="mode" class="form">
      <el-form-item label="账号：" :label-width="labelWidth">
        <el-input v-model="form.id" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="labelWidth">
        <el-input v-model="form.password">
        </el-input>
      </el-form-item>
    </el-form>
    <el-row class="">
      <div class="test"></div>
      <button style="">button</button>
    </el-row>
  </div>
</template>

<script>
import creadcrumb from '../../../common/creadcrumb'
export default {
  name: 'test-03.vue',
  components: {
    creadcrumb
  },
  data () {
    return {
      labelWidth: '120px',
      data: ['1', '2'],
      form: {
        id: '',
        password: ''
      }
    }
  },
  created () {
    console.log(this.form)
  },
  methods: {
    add (e) {
      console.log(e)
      this.$nextTick(() => {
        Object.assign(this.form)
      })
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    background: #fff;
  }
</style>
