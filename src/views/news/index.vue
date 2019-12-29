<template>
  <div class="main">
    <el-row>
      <el-col>
        <h4 class="c-title">{{objDetail.title}}</h4>
      </el-col>
    </el-row>
    <el-row class="wap_center">
      <el-col :span="4">
        <span>时间：&nbsp;{{objDetail.date}}</span>
      </el-col>
      <el-col :span="6">
        <span>文章来源:&nbsp; {{objDetail.webUrl}}</span>
      </el-col>
      <el-col :span="4" :offset="10" class="font-type">
        <span>[ &nbsp;<span @click="changFontSize('20')" class="lg">大</span> &nbsp; &nbsp; <span @click="changFontSize('16')" class="lx">中</span>&nbsp; &nbsp;  <span @click="changFontSize('14')" class="xm">小</span> &nbsp;  ]</span>
      </el-col>
    </el-row>
    <el-row>
      <p ref="textDetail">{{objDetail.text}}</p>
    </el-row>
    <el-row class="author">
      <el-col :span="4" :offset="20">
        <span>  {{objDetail.author}}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { data } from '../../mock/index'
import Http from '../../http/index'
export default {
  data () {
    return {
      objDetail: {}
    }
  },
  created () {
    console.log(this.$route.query.item)
    console.log(this.$http)
    Http.ajax({
      url: '/news/List',
      type: 'get'
    }).then(res => {
      console.log(res)
      this.objDetail = res.newList[0]
    })
  },
  methods: {
    changFontSize (size) {
      this.$refs.textDetail.style.fontSize = `${size}px`
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
