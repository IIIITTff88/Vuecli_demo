<template>
  <div class="container">
    <el-divider>这是一个tab</el-divider>
    <div class="tab-content">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="用户管理" name="first">
          <div class="item">
            <el-row>
              111111111
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <div class="item">
            <el-row>
              2222222
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <div class="item">
            <el-row>
              3333333
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">
          <div class="item">
            <el-row>
              4444444
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  background: #fff;
  padding: 10px 5px;
  // 除去tab默认的样式
  .tab-content {
    /deep/ .el-tabs--card > .el-tabs__header {
      border: none;
      /deep/ .el-tabs__nav {
        border: none;
        /deep/ .el-tabs__item {
          border: none;
        }
      }
    }
  }
}
</style>
