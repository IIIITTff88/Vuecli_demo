<template>
  <div>
    <el-row>
      这是一个测试的组件
    </el-row>
    <el-button @click="send()">senMsg</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello world'
    }
  },
  methods: {
    send () {
      this.$emit('sendMsg', this.message)
    }
  }
}
</script>
<style lang="">

</style>
