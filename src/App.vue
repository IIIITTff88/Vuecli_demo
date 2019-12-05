<template>
  <div id="app">
    <keep-alive>
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
  #app {
    width: calc(100vw);
    height: calc(100vh);
    position: relative;
  }
</style>
