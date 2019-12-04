<template>
  <div class="main">
    <van-tabs>
      <van-tab v-for="items in titleArr" :title="items.title" :key="items.id">
        <!-- 主题内容的容器 -->
        <div class="scroll-wrapper">
          <!-- 需要滚动的容器 -->
          <van-pull-refresh v-model="isLoading">
            <!-- 内容的列表 -->
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
              <van-cell v-for="item in items.list" :key="item.id">
                <div class="item_list">
                  <h3>{{item.title}}</h3>
                  <van-image slot="default" width="100%" height="3rem" fit="cover" :src="item.img" />
                  <div class="warp_bottom">
                    <span>{{item.author}}</span>
                    <span>{{item.commentCount}}条评论</span>
                    <span>{{item.time}}天以内</span>
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from '../../api/index'
export default {
  mounted () {
    axios
      .ajax({
        url: '../../../dist/data/list.json'
      })
      .then(res => {
        console.log(res)
      })
  },
  data () {
    return {
      titleArr: [
        {
          id: 1,
          title: 'javascript',
          content: 'this is javascript',
          list: [
            {
              id: 1,
              title: 'this is a javascript',
              // img: require('../../assets/logo.png'),
              img: require('../../../public/images/gallery/1.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a 111',
              img: require('../../../public/images/gallery/2.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a 222',
              img: require('../../../public/images/gallery/3.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a 333',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 5,
              title: 'this is a 333',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 6,
              title: 'this is a 333',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        },
        {
          id: 2,
          title: 'Python',
          content: 'this is text',
          list: [
            {
              id: 1,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        },
        {
          id: 3,
          title: 'Java',
          content: 'this is text',
          list: [
            {
              id: 1,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        },
        {
          id: 4,
          title: 'html',
          content: 'this is text',
          list: [
            {
              id: 1,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        },
        {
          id: 5,
          title: 'css',
          content: 'this is text',
          list: [
            {
              id: 1,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        },
        {
          id: 6,
          title: 'go',
          content: 'this is text',
          list: [
            {
              id: 1,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 2,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 3,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            },
            {
              id: 4,
              title: 'this is a title',
              img: require('../../assets/logo.png'),
              author: 'jack',
              commentCount: 1,
              time: 1
            }
          ]
        }
      ],
      list: [{}],
      contentList: [
        {
          id: 1,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        },
        {
          id: 2,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        },
        {
          id: 3,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        },
        {
          id: 4,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        },
        {
          id: 5,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        },
        {
          id: 6,
          title: 'this is a title',
          img: require('../../assets/logo.png'),
          author: 'jack',
          commentCount: 1,
          time: 1
        }
      ],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  methods: {
    onRefresh () {},
    onLoad () {
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   // 加载状态结束
      //   this.loading = false

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true
      //   }
      // }, 500)
    }
  }
}
</script>
<style lang="less">
.van-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  /deep/ .van-tabs__wrap {
    height: 36px;
    padding-right: 36px;
    .van-tab {
      line-height: 36px;
    }
    .van-tabs__line {
      background-color: #3296fa;
      height: 2px;
    }
  }
  /deep/ .van-tabs__content {
    height: calc(100vh);
    overflow: hidden;
  }
  /deep/ .van-tab__pane {
    height: 100%;
    .scroll-wrapper {
      height: 100%;
      overflow-y: auto;
    }
  }
}
.main {
  .warp_bottom {
    span {
      margin-right: 10px;
    }
  }
}
</style>
