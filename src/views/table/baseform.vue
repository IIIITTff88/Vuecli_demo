<template>
  <div class="main">
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%" border @row-click="singleElection">
        <el-table-column label="单选" width="65" align="center">
          <template slot-scope="scope">
            <el-radio class="radio" v-model="templateSelection" :label="scope.$index">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" width="70" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-divider>华丽的分割线</el-divider>
    <el-row style="margin-bottom:10px;">
      <el-col>
        <el-button @click="resetCheckout">反选</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData1" stripe style="width: 100%" border @row-click="StepsListRowClick" ref="multipleTable"
        @select="selectRow">
        <el-table-column width="70" align="center" @selection-change="selectRows">
          <template slot-scope="scope">
            <el-checkbox v-model="tableData1[scope.$index].tick" style="padding-right:100%;"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" width="70" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-divider>分割线</el-divider>
    <el-form :model="formInline" class="demo-form-inline" :inline="true" ref="formInline">
      <el-row>
        <el-col :span="6">
          <el-form-item label="姓名：" prop="name">
            <el-input placeholder="请输入姓名" v-model="formInline.name" style="width:200px;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="年龄：" prop="age">
            <el-input placeholder="请输入年龄" v-model="formInline.age"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="爱好：" prop="like">
            <el-select placeholder="请选择爱好" v-model="formInline.like">
              <el-option :label="item.label" :value="item.value" v-for="(item, index) in options" :key="index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="btn-group">
          <el-form-item>
            <el-button @click="query">查询</el-button>
            <el-button @click="resetForm('formInline')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        name: '',
        like: '',
        age: ''
      },
      options: [
        { label: '全部', value: '' },
        { label: '篮球', value: '1' },
        { label: '足球', value: '2' },
        { label: '跑步', value: '3' },
        { label: '看书', value: '4' }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          radio: false
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          radio: true
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          radio: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          radio: false
        }
      ],
      tableData1: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tick: false,
          checkName: 'jack'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tick: false,
          checkName: 'rose'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tick: false,
          checkName: 'tom'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tick: false,
          checkName: 'marck'
        }
      ],
      templateSelection: '',
      multipleSelection: [],
      arr: []
    }
  },
  mounted () {
    this.newarr = []
  },
  methods: {
    singleElection (row) {
      this.templateSelection = this.tableData.indexOf(row) // 下标
      this.templateRadio = row.id // 数据的id
    },
    resetCheckout () {
      this.tableData1.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row)
      })
    },
    StepsListRowClick (row) {
      row.tick = !row.tick
      if (row.tick) {
        this.newarr.push(row)
      } else {
        this.newarr.pop(row)
      }
    },
    selectRow (row) {
      return false
    },
    selectRows (selection) {
      var result = this.StepsListRowClick()
      console.log(result)
    },
    query () {
    },
    resetForm (formName) {
      this.$refs.formInline.resetFields()
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  /deep/ .el-input__inner{
    width: 300px;
  }
  .btn-group {
    text-align: right;
  }
}
</style>
