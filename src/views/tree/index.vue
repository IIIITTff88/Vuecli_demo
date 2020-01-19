<template>
  <div class="main">
    <el-row>
      <el-col :span="4">
        <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">
        </el-tree>
      </el-col>
    </el-row>
    <el-divider>分割线------测试的表单</el-divider>
    <el-row>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" :rules="rules">
        <el-form-item
          label="年龄"
          prop="age"
        >
          <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="numberValidateForm.address" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item label="文件" prop="file">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload" style="width: 100px;height: 100px;border: 1px solid #000;text-align: center;">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 100px;font-size: 18px;"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="国家" prop="city">
          <el-input v-model="numberValidateForm.city" placeholder="请输入国家"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px">
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider>分割线============================分割线</el-divider>
    <el-row>
      <el-col :span="24">
        <Editor @sendMsg="sendMsg"></Editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Editor from '../../common/editor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones'
      },
      count: 1,
      imageUrl: '',
      numberValidateForm: {
        age: '',
        address: '',
        file: '',
        city: ''
      },
      rules: {
        age: [
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '类型必须为数字' }
        ],
        address: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        file: [
          { required: true, message: '不能为空,请上传文件' }
        ],
        city: [
          { required: true, message: '必须输入国家' },
          { min: 3, max: 20, message: '国家字符必须在3-20个之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick (data) {
      console.log(data)
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess (data) {
      console.log(data)
    },
    beforeAvatarUpload (data) {
      console.log(data)
      this.numberValidateForm.file = data.lastModified
    },
    sendMsg (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="less">
  .main {
    background: #ffffff;
  }
</style>
