<template>
  <div class="main p20">
    <creadcrumb :data="data"></creadcrumb>
    <el-divider>华丽的分割线</el-divider>
    <!-- <el-row> -->
    <el-form :model="form" ref="form" class="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="身份证" prop="id" label-width="120px">
            <el-input v-model="form.id" placeholder="请输入身份证号"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-col :span="12">
        <el-form-item label="地址" prop="address" label-width="120px">
          <el-input v-model="form.address" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-col>
      <el-form-item style="">
        <el-button type="primary">添加</el-button>
        <el-button type="primary">重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider>分割线-----------------------------分割线</el-divider>
    <el-row>
      <el-col>
        <el-button type="primary" @click="goRouter">路由跳转</el-button>
      </el-col>
    </el-row>
    <!-- </el-row> -->
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
        password: '',
        address: ''
      }
    }
  },
  created () {
    // console.log(this.form)
  },
  methods: {
    add (e) {
      console.log(e)
      this.$nextTick(() => {
        Object.assign(this.form)
      })
    },
    goRouter () {
      // console.log(this.$router)
      this.$router.push({
        path: '/test-Com',
        query: {
          id: 1,
          name: 'rose'
        }
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
