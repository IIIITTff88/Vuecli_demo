<template>
  <div class="main">
    <creadcrumb :data="data"></creadcrumb>
    <el-form ref="form" :model="form" label-width="180px" class="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动地址">
            <el-input v-model="form.adress" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="姓名">
            <el-input v-model="form.cname" readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="年龄">
            <el-input v-model="form.age" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>

    <div class="diog-content">
      <el-row>
        <el-col>
          <el-button type="success" size="small" @click="opendiog1">
            diog1
          </el-button>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <!-- diog部分 -->
    <el-dialog :visible.sync="centerDialogVisible" width="30%" center :show-close="false">
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        <el-button type="primary">test</el-button>
      </span>
    </el-dialog>

    <el-divider>分割线</el-divider>
    <el-row class="form-title">
      <el-col style="text-algin:center">表单数据</el-col>
    </el-row>
    <div class="form-content">
      <el-form :model="form1" label-width="150px" ref="form1" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="form1.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="QQ号:" prop="qq">
              <el-input v-model="form1.qq" placeholder="请输入QQ"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="手机号:" prop="phone">
              <el-input v-model="form1.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="form1.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="position">
          <el-col :span="4">
            <el-form-item label="经度">
              <el-input v-model="form1.lat" placeholder="经度"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="纬度">
              <el-input v-model="form1.lon" placeholder="纬度"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="海拔">
              <el-input v-model.number="form1.height" placeholder="海拔"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="date">
              <el-date-picker v-model="form1.date" type="date" placeholder="选择日期" default-value="2019-8-8">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="是否已婚" prop="isMarry">
              <el-switch v-model="form1.isMarry" active-text="是" inactive-text="否">
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="性别:" prop="radio">
              <el-radio v-model="form1.radio" label="1">男</el-radio>
              <el-radio v-model="form1.radio" label="2">女</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="爱好：" prop="checkList">
              <el-checkbox-group v-model="form1.checkList">
                <el-checkbox label='看书'></el-checkbox>
                <el-checkbox label="打球"></el-checkbox>
                <el-checkbox label="打游戏"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="上传头像：">
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="家庭住址：" prop="textarea">
              <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="form1.textarea">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="3">
            <el-form-item>
              <el-button type="primary" @click="reset">重置</el-button>
              <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

  </div>
</template>
<script>
import creadcrumb from '../../common/creadcrumb'
import customValid from './util/customValidate'
export default {
  data () {
    return {
      data: ['1', '2', '3'],
      imageUrl: '',
      centerDialogVisible: false,
      form: {
        name: 'jack',
        adress: '北京市丰台区马家堡东路169号',
        aaa: '1111',
        cname: 'rose',
        age: '20'
      },
      form1: {
        name: '',
        age: '',
        date: new Date(),
        isMarry: '',
        radio: '',
        checkList: [], // 类型为数组
        textarea: '',
        qq: '',
        phone: '',
        lon: '',
        lat: '',
        height: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: ['blur', 'change'] }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: ['blur', 'change'] }
        ],
        date: [
          { required: true, message: '请选择日期', trigger: ['blur', 'change'] }
        ],
        radio: [
          { required: true, message: '请选择性别', trigger: ['blur', 'change'] }
        ],
        checkList: [
          { required: true, message: '请选择爱好', trigger: ['blur', 'change'] }
        ],
        textarea: [
          {
            required: true,
            message: '请输入家庭住址',
            trigger: ['blur', 'change']
          }
        ],
        qq: [
          { required: true, message: '请输入qq', trigger: ['blur', 'change'] },
          { validator: customValid.isQQ, trigger: ['blur', 'change'] }
        ],
        phone: [
          {
            required: true,
            message: '请输入电话号',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  components: {
    creadcrumb
  },
  methods: {
    opendiog1 () {
      this.centerDialogVisible = true
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    reset () {
      this.$refs['form1'].resetFields()
    },
    submit () {
      this.$refs['form1'].validate(valid => {
        if (valid) {
          console.log(...this.form1)
          this.$message({
            type: 'success',
            message: '通过验证'
          })
        } else {
          this.$message({
            type: 'warning',
            message: '填写的信息有误！！！'
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  background: #fff;
  padding: 15px;
  .form {
    /deep/ .el-input__inner {
      border: none;
    }
  }
  .form-title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-weight: bold;
    color: #aaa;
    font-size: 20px;
    .el-col {
      letter-spacing: 10px;
    }
  }
}

avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.position {
  /deep/ .el-input__inner{
    // width: 80px
  }
}
</style>
