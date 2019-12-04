<template>
  <div class="main">
    <van-list :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="scroll_wrap">
        <van-cell v-for="item in list" :key="item.id" @click="goDetail(item)">
          <h3>{{item.title}}</h3>
          <van-image width="100%" height="200" :src="item.src" />
          <p>{{item.text}}</p>
          <van-row>
            <van-col span="8">{{item.author}}</van-col>
            <van-col span="8">{{item.time}}</van-col>
            <van-col span="8">{{item.count}}</van-col>
          </van-row>
        </van-cell>
      </div>
    </van-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          title: 'this is title',
          src: require('../../../public/images/gallery/10.png'),
          text: 'this is text',
          author: 'jack',
          time: '2018-9-17',
          count: 20
        },
        {
          id: 2,
          title: 'this is title',
          src: require('../../../public/images/gallery/11.png'),
          text: 'this is text',
          author: 'jack',
          time: '2018-9-17',
          count: 20
        },
        {
          id: 3,
          title: 'this is title',
          src: require('../../../public/images/gallery/12.png'),
          text: 'this is text',
          author: 'jack',
          time: '2018-9-17',
          count: 20
        }
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    goDetail (item) {
      this.$router.push({ path: '/infoDetail', query: { id: item.id } })
    }
  }
}
</script>
<style lang="less">
.main {
  /deep/ .van-list {
    height: calc(100vh);
    .scroll_wrap {
      overflow-y: scroll;
      height: 100%;
    }
  }
}
</style>
