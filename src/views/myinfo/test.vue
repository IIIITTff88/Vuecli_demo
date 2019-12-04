<template>
  <div>
    <van-nav-bar title="我是测试的组件" right-text="保存" style="background:#3296fa;color:red;" />
    <van-button @click="chagnVal"  color="linear-gradient(to right, #4bb0ff, #6149f6)" round>change</van-button><br>
    {{count}} ---- {{obj}}
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['count', 'obj']),
    ...mapGetters(['getUser'])
  },
  methods: {
    chagnVal () {
      this.add(10)
      console.log(this.count)
    },
    ...mapMutations(['add']),
    ...mapActions(['changVal'])
  },
  created () {
    console.log(this.count)
    console.log(this.getUser)
  },
  mounted () {
  }
}
</script>
<style lang="less">
</style>
