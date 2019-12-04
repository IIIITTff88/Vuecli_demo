<template>
  <div class="main">
    <van-nav-bar title="详情" left-arrow @click-left="$router.go(-1)" />
    <div class="content_wrap">
      <van-row>
        <h2>{{detailObj.title}}</h2>
      </van-row>
      <van-row>
        <p>
          {{detailObj.Paragraph}}
        </p>
      </van-row>
      <van-row style="width:100%;height:200px; magin: 10px 0;">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide>
            <div class="item">
              <van-image width="100%" height="200" :src="imgList[0]" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item">2asdsad</div>
          </swiper-slide>
          <swiper-slide>
            <div class="item">3asdadddddddddd</div>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </van-row>
      <van-row>
        <van-col span="6">
          {{detailObj.Address}}
        </van-col>
        <van-col span="6" offset="12">
          {{detailObj.Name}}
        </van-col>
      </van-row>
      <video src="../../../public/mp4/test.mp4" ref="myVideo" style="width:100%;height:300px;" controls loop></video>
      <van-button @click="getDom">测试按钮</van-button>
      <audio src="../../../public/mp3/王菲-匆匆那年.mp3" autoplay loop controls></audio>
      <div style="height:100px;">
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../api/index'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      detailObj: null,
      imgList: [require('../../../public/images/gallery/19.png')],
      // 滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      // 上一张，下一张
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  },
  mounted () {
    axios
      .http({
        type: 'post',
        url: '/newdata/index'
      })
      .then(res => {
        this.detailObj = res[0]
        console.log(this.detailObj)
      })
  },
  created () {},
  methods: {
    getDom () {
      console.log(this.$refs.myVideo)
    },
    callback () {}
  }
}
</script>
<style lang="less" scoped>
.main {
  height: calc(100vh);
  .content_wrap {
    padding: 0 10px;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 200px;
    margin-bottom: 100px;
    h2 {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: black;
      line-height: 50px;
    }
    /deep/ .van-image {
      margin: 5px 0;
    }
  }
}
</style>
