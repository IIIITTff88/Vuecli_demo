<template>
  <div class="main p20">
    <el-form :model="ruleForm" ref="ruleForm" class="ruleForm" :rules="rules">
      <el-row>
        <el-form-item label="地址" prop="address" :label-width="labelWidth">
          <el-input
            v-model="ruleForm.address"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="联系方式" prop="phone" :label-width="labelWidth">
          <el-input v-model="ruleForm.phone" placeholder="请输入联系方式"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="邮政编码" prop="code" :label-width="labelWidth">
          <el-input v-model.number="ruleForm.code" maxlength="10" minlength="3" placeholder="请输入邮政编码"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="身份证号" prop="id" :label-width="labelWidth">
          <el-input v-model="ruleForm.id" placeholder="请输入域身份证号"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="选择日期" :label-width="labelWidth">
          <el-date-picker
            v-model="ruleForm.startTime"
            type="date"
            placeholder="开始时间">
          </el-date-picker>
          <span style="margin: 0 15px;">至</span>
          <el-date-picker
            v-model="ruleForm.endTime"
            type="date"
            placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="选择城市" :label-width="labelWidth" prop="city">
          <el-select v-model="ruleForm.city">
            <el-option v-for="city in citysChian" :key="city.value" :label="city.label" :value="city.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label-width="labelWidth" label="是否已婚">
          <el-radio-group v-model="ruleForm.isMarry">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="城市" :label-width="labelWidth">
          <el-checkbox-group v-model="ruleForm.checkedCities">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="是否开始记录" :label-width="labelWidth" prop="isTake">
          <el-switch v-model="ruleForm.isTake" active-text="否" inactive-text="是">
          </el-switch>
        </el-form-item>
      </el-row>
      <el-row>
        <!-- <img src="../../../../public/images/gallery/10.png" alt=""> -->
      </el-row>
      <el-form-item>
        <el-row style="display: flex; justify-content: center;">
          <el-button @click="add('ruleForm')" style="background: #1bbd57; color: #ffffff; margin-right: 30px;">添加</el-button>
          <el-button @click="reset('ruleForm')" style="background: #409eff; color: #ffffff">重置</el-button>
        </el-row>
      </el-form-item>
    </el-form>
    <el-divider>测试的案列</el-divider>
    <el-row>
      <son @sendMsg="getMsg"></son>
    </el-row>
  </div>
</template>

<script>
import son from '../../../common/son'
const citys = ['北京', '上海', '广州', '深圳']
export default {
  name: 'text-03.vue',
  components: {
    son
  },
  data () {
    const validatePass = (rule, value, callback) => {
      let reg = /[m]/g
      if (value === '') {
        callback(new Error('不能为空'))
      } else if (reg.test(value)) {
        callback(new Error('不能出现字符M'))
      } else {
        callback()
      }
    }
    const validate = (rule, value, callback) => {
      let reg = /[k]/g
      if (reg.test(value)) {
        callback(new Error('不能出现字符k'))
      } else {
        callback()
      }
    }
    return {
      cities: citys,
      labelWidth: '110px',
      citysChian: [
        { value: '1', label: '北京' },
        { value: '2', label: '郑州' },
        { value: '3', label: '焦作' }
      ],
      ruleForm: {
        address: '',
        phone: '',
        code: '',
        id: '',
        isMarry: '是',
        checkedCities: ['北京'],
        city: '',
        startTime: new Date(),
        endTime: new Date() + 1,
        isTake: true
      },
      rules: {
        address: [
          { required: true, message: '地址不能为空' },
          { min: 3, max: 10, message: '长度在3到10个之间', trigger: ['blur', 'change'] },
          { validator: validatePass, trigger: 'blur' },
          { validator: validate, trigger: 'blur' }
        ],
        phone: [{ required: true, message: '地址不能为空' }],
        code: [
          { required: true, message: '不能为空' }
        ],
        id: [
          { required: true, message: '不能为空' }
        ]
      }
    }
  },
  methods: {
    add (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm)
          alert(this.ruleForm)
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
      // 这是测试的注释
    },
    getMsg (v) {
      console.log(v)
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    background: #ffffff;
    /*padding: 20px;*/
  }
</style>
