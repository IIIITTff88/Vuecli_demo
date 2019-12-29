<template>
  <div class="main">
    <el-row>
      <el-col>
        <el-divider>条形的进度条</el-divider>
        <el-progress :percentage="percentage" :format="format"></el-progress>
      </el-col>

      <!-- <el-col>
        <el-divider>百分比内显</el-divider>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="percentage" status="success"></el-progress>
      </el-col> -->
      <!-- <el-col>
        <el-divider>圆形的进度条</el-divider>
        <el-progress type="circle" :percentage="percentage" status="success"></el-progress>
      </el-col> -->
    </el-row>
    <el-divider>轮播图</el-divider>
    <el-row>
      <el-col>
        <el-carousel :interval="2000" type="card" height="400px">
          <el-carousel-item v-for="item in arrImg" :key="item.id">
            <img :src="item.url" alt="" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-divider>分割线 --------- 卡片</el-divider>
    <!-- <el-row>
      <el-col :span="6" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in arrImg" :key="index">
          <img :src="item.url"
            class="image">
          <div style="padding: 20px 20px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
    <el-row v-for="(items, index) in arrImg" :key="index">
      <el-col v-for="(item, index) in 5" :key="index" :span="4" class="warpper-item" :offset="index > 0 ? 1 : 0"
        style="margin-bottom:15px;">
        <el-card :body-style="{ padding: '0px' }" class="card-item">
          <img :src="items.url" class="image">
          <div style="padding:20px;">
            <span>{{items.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="success" @click="lookDetail(items,index)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-divider>分页插件</el-divider> -->
    <el-row>
      <el-col>
        <div class="block" style="text-align: right;">
          <!-- <span class="demonstration">完整功能</span> -->
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
            layout="total, sizes, prev, pager, next, jumper" :total="1400">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-divider style="color:orange; font-size:20px;padding:20px 0;">适配多屏幕的样式</el-divider>
    <el-row :gutter="30">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-divider>布局样式</el-divider>
    <!-- <el-row> -->
      <el-form :model="myForm" label-width="100px" class="myForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label="姓名：">
              <el-input v-model="myForm.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄：">
              <el-input v-model="myForm.age" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="爱好：">
              <el-select v-model="myForm.like" placeholder="请选择">
                <el-option label="篮球" value="1"></el-option>
                <el-option label="足球" value="2"></el-option>
                <el-option label="兵乒球" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button @click="search">查询</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="日期">
               <el-date-picker type="date" placeholder="选择日期" v-model="myForm.date1" style="width: 100%;" :picker-options="pickerOptions"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="时间：">
              <el-time-select placeholder="请选择时间：" v-model="myForm.time">
              </el-time-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    <!-- </el-row> -->
  </div>
</template>
<script>
// import moment from 'moment'
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      },
      percentage: 0,
      myForm: {
        name: '',
        age: '',
        like: '',
        data1: '',
        time: ''
      },
      currentDate: this.$moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      Cpercentage: 0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      arrImg: [
        {
          id: 1,
          url: require('../../../public/images/gallery/10.png'),
          title: '大漠孤烟直'
        },
        {
          id: 2,
          url: require('../../../public/images/gallery/12.png'),
          title: '长河落日圆'
        },
        {
          id: 3,
          url: require('../../../public/images/gallery/13.png'),
          tilte: '千里孤坟'
        },
        {
          id: 4,
          url: require('../../../public/images/gallery/14.png'),
          title: '无处话凄凉'
        }
      ]
    }
  },
  mounted () {
    this.flag = setInterval(() => {
      this.percentage += 5
      if (this.percentage === 100) {
        clearInterval(this.flag)
      }
    }, 1000)
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    search () {
      console.log(this.myForm)
    },
    lookDetail (item, index) {
      this.$router.push({
        path: '/news/detail',
        query: {
          item
        }
      })
    }
  },
  destroyed () {
    clearInterval(this.flag)
  }

}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
