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
    <el-divider>slot表格</el-divider>
    <div class="table_wraper">
      <el-table ref="myTable" :data='tableList' stripe style="width: 100%" border
        :header-cell-style="{background:'#E8F4FF',color:'#313233'}">
        <el-table-column type="index" width="50" label="序号" align="center" fixed></el-table-column>
        <el-table-column prop="name" label="姓名" width="80" align="center" fixed></el-table-column>
        <el-table-column prop="age" label="年龄" width="80" align="center"></el-table-column>
        <el-table-column label="城市" width="80" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <a href="www.baidu.com">{{scope.row.adress}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
        <el-table-column prop="detail" label="介绍" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="状态" align="center" width="200" :show-overflow-tooltip="true">
          <template slot-scope="scope" v-if="showSelect">
            <el-select placeholder="请选择" v-model="type">
              <el-option label="模块1" value="1"></el-option>
              <el-option label="模块2" value="2"></el-option>
              <el-option label="模块3" value="3"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="备注" width="200" align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入" v-model="message" v-if="showInput"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" type="info">查看</el-button>
            <el-button size="mini" @click="submit" type="success">提交</el-button>
            <el-button size="mini" @click="del" type="warning">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-divider>复杂表头的表格</el-divider>
    <div class="table-wrapper-second">
      <el-table ref="table_fz" :data="table_fz" border :header-cell-style="{background:'#E8F4FF',color:'#313233'}">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column label="全国地区" align="center">
          <el-table-column label="省" align="center" prop="province"></el-table-column>
          <el-table-column label="市" align="center" prop="city"></el-table-column>
          <el-table-column label="县" align="center" prop="county"></el-table-column>
          <el-table-column label="区" align="center" prop="detail_adress"></el-table-column>
        </el-table-column>
        <el-table-column label="个人信息" align="center">
          <el-table-column label="姓名" align="center" prop="name"></el-table-column>
          <el-table-column label="年龄" align="center" prop="num"></el-table-column>
          <el-table-column label="住址" align="center" prop="image">
            <template slot-scope="scope">
              <a href="#" @click="lookDetail($event,scope)">{{scope.row.image}}</a>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-image style="width: 100px; height: 100px" :src="imgUrl"></el-image>
    </el-dialog>
  </div>
</template>
<script>
import Http from '../../http/index'
export default {
  data () {
    return {
      tableList: [],
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      imgUrl: '',
      dialogVisible: false,
      table_fz: [{}],
      showSelect: false,
      message: '',
      showInput: false,
      formInline: {
        name: '',
        like: '',
        age: ''
      },
      type: '',
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
    this._getTableList()
    this._getTestLsit()
  },
  methods: {
    fit () {},
    lookDetail (e, value) {
      e.preventDefault()
      this.dialogVisible = true
      this.imgUrl = value.row.image
      console.log(value)
    },
    async _getTableList () {
      let result = await Http.ajax({
        url: '/tabble/List',
        type: 'get'
      })
      this.tableList = result.newList
    },
    async _getTestLsit () {
      let result = await Http.ajax({
        type: 'get',
        url: '/mock'
      })
      this.table_fz = result.testList
    },
    submit () {
      this.$confirm('你确定要删除本条数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
        .catch(_ => {
          this.$message({
            type: 'warning',
            message: '取消提交'
          })
        })
    },
    del () {
      this.showSelect = true
      this.showInput = true
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
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
    query () {},
    resetForm (formName) {
      this.$refs.formInline.resetFields()
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  /deep/ .el-input__inner {
    width: 300px;
  }
  .btn-group {
    text-align: right;
  }
  .table_wraper {
    /deep/ .el-input__inner {
      width: 150px;
    }
  }
}
</style>
