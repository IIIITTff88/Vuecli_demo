<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="180px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动地址">
            <el-input v-model="form.adress"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="姓名">
            <el-input v-model="form.cname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="btn-group">
        <el-col :span="6" :offset="9">
          <el-button>提交</el-button>
          <el-button>查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <el-col>
        <el-button>dilog</el-button>
      </el-col>
    </el-row>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogTableVisible: true,
      form: {
        name: '',
        adress: '',
        aaa: '',
        cname: '',
        age: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  background: #fff;
  padding: 15px;
  .btn-group {
    .el-button {
      background: #e8f8ee;
      border: 1px solid #a4e5bc;
      color: #a4e5bc;
      &:hover {
        background: #1bbd57;
        color: #fff;
      }
    }
  }
}
</style>
