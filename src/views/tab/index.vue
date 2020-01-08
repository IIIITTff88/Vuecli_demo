<template>
  <div class="container">
    <el-divider>这是一个tab</el-divider>
    <div class="tab-content">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="用户管理" name="first">
          <div class="item">
            <el-row>
              <el-table :data="data1" stripe border>
                <el-table-column type="index" label="序号" align="center" width="70">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center">
                </el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="adress" label="地址" align="center">
                </el-table-column>
                <el-table-column prop="date" label="日期" align="center"></el-table-column>
                <el-table-column prop="city" label="城市" align="center"></el-table-column>
                <el-table-column label="性别" prop="sex" align="center"></el-table-column>
                <el-table-column prop="detail" label="描述" align="center">
                </el-table-column>
              </el-table>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <div class="item">
            <el-row>
              <el-table :data="data2" stripe border>
                <el-table-column type="index" label="序号" align="center" width="70">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center">
                </el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="adress" label="地址" align="center">
                </el-table-column>
                <el-table-column prop="date" label="日期" align="center"></el-table-column>
                <el-table-column prop="city" label="城市" align="center"></el-table-column>
                <el-table-column label="性别" prop="sex" align="center"></el-table-column>
                <el-table-column prop="detail" label="描述" align="center">
                </el-table-column>
              </el-table>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="简爱博客" name="third" class="list">
          <div class="item">
            <el-row>
              <el-table :data="data3" stripe border  :header-cell-style="{background:'#e5f6ff',color:'#2E3D55'}">
                <el-table-column type="index" label="序号" align="center" width="70">
                </el-table-column>
                <el-table-column prop="author" label="作者" align="center" width="100">
                </el-table-column>
                <el-table-column prop="date_timestamp" label="时间" align="center" :formatter="transformDate" width="200"></el-table-column>
                <el-table-column prop="title" label="标题" align="center">
                </el-table-column>
                <el-table-column show-overflow-tooltip label="描述" align="center" width="1000">
                  <template slot-scope="scoped">
                    <p class="description">{{scoped.row.description}}</p>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="历史上的今天" name="history">
          <div class="item">
            <el-row>
              <el-table :data="histroyList" border stripe>
                <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
                <el-table-column prop="year" width="220" label="出生时间" align="center"></el-table-column>
                <el-table-column prop="title" align="center" label="标题"></el-table-column>
                <el-table-column  label="链接" align="center">
                  <template slot-scope="scope"><a href="#">{{ scope.row.link }}</a></template>
                </el-table-column>
                <el-table-column prop="type" width="100" align="center" label="类型"></el-table-column>
              </el-table>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { getTab1, getTab2 } from '../../api/index'

import jsonp from '../../jsonp/index'
export default {
  data () {
    return {
      activeName: 'second',
      data1: [],
      data2: [],
      data3: [],
      histroyList: []
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    transformDate (row) {
      return new Date(parseInt(row.date_timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
    },
    async getList () {
      let result1 = await getTab1()
      this.data1 = result1.tabList1
      let result2 = await getTab2()
      this.data2 = result2.tabList2
    }
  },
  created () {
    this.getList()
    jsonp('https://api.asilu.com/today/').then(res => {
      if (res.code === 200) {
        this.histroyList = res.data
      }
    })
    jsonp('https://api.asilu.com/rss/').then(res => {
      this.data3 = res.list
    })
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
          // background: orange;
          // color: wheat;
          // border-radius: 44px;
          &.is-active {
            background: orange;
            color: wheat;
            border-radius: 44px;
          }
        }
      }
    }
  }
}
.list {
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    // width: 100%;
    white-space: nowrap;
    // padding: 0 30px;
  }
}
</style>
