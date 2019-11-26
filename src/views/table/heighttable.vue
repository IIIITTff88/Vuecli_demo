<template>
  <div class="main">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" align="center" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" align="center" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" align="center" label="地址">
      </el-table-column>
    </el-table>

    <el-divider>table</el-divider>
    <el-row>
      <el-col style="margin:10px 0;">
        <el-button @click="toggleSelete">反选</el-button>
      </el-col>
    </el-row>
    <el-table ref="multipleTable1" :data="tableData1" tooltip-effect="dark" style="width: 100%" border stripe
      :highlight-current-row="true" @selection-change="handleSelectionChange">
      <el-table-column type="selection" align="center" width="55">
      </el-table-column>
      <el-table-column label="日期" align="center" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" align="center" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" align="center" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="num" align="center" label="数量" show-overflow-tooltip sortable :formatter="filters">
      </el-table-column>
      <el-table-column prop="time" align="center" label="时间" show-overflow-tooltip sortable :sort-method="methods" >
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableData1: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 1,
          time: '2018-01-01'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 2,
          time: '2018-01-02'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 3,
          time: '2018-01-03'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 4,
          time: '2018-01-04'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 5,
          time: '2018-01-05'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 6,
          time: '2018-01-06'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 7,
          time: '2018-01-07'
        }
      ],
      multipleSelection1: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    toggleSelete () {
      this.tableData1.forEach(row => {
        this.$refs.multipleTable1.toggleRowSelection(row)
      })
    },
    methods (a, b) {
      // console.log(a, b)
      return 0
    },
    filters (row) {
      if (row) {
        return (row.num * 100 / 3).toFixed(2)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  padding: 10px 5px;
  background: #fff;
  /deep/ .el-table {
    margin-bottom: 20px;
  }
}
</style>
