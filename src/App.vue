<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$store.state.num)
    this.$store.dispatch('changeNum', 20)
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
