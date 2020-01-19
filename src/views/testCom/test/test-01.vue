<template>
    <div class="main">
      <creadcrumb :data="data"></creadcrumb>
      <el-row class="mb15">
        <el-col :span="4">
          <div class="testImg">
          </div>
        </el-col>
      </el-row>
      <el-row class="mb15">
        <el-col :span="4">
          <div class="img"></div>
        </el-col>
      </el-row>
      <el-row class="mb15">
        <div class="view_port">
          <div class="polling_message">
            Listening for dispatches
          </div>
          <div class="cylon_eye"></div>
        </div>
      </el-row>
      <el-row class="mb15">
        <el-col>
          <div class="father">
            <div class="son"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <div class="content">
            <img src="../../../../public/images/gallery/10.png" alt="">
          </div>
        </el-col>
        <el-col :span="4" :offset="10">
          <div class="triangle">

          </div>
        </el-col>
      </el-row>
      <el-divider>华丽的分割线======================分割线</el-divider>
      <el-row>
        <el-col>
          <div>{{$t('home.say')}}</div>
          <input type="text" :value="$t('home.say')">
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  }
}
</script>

<style scoped lang="less">
  @keyframes text {
    from {
      transform: rotateX(0);
      transform: rotateX(0);
      transform: scale(0);
      background: orange;
      transform: translate3d();
    }
    to {
      transform: rotateX(1);
      transform: rotateY(1);
      transform: scale(2);
      background: #2b669a;
    }
  }
  @keyframes slidein {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  .polling_message {
    color: white;
    float: left;
    margin-right: 2%;
  }

  .view_port {
    background-color: black;
    height: 25px;
    width: 100%;
    overflow: hidden;
  }

  .cylon_eye {
    background-color: red;
    background-image: linear-gradient(to right,
    rgba(0, 0, 0, .9) 25%,
    rgba(0, 0, 0, .1) 50%,
    rgba(0, 0, 0, .9) 75%);
    color: white;
    height: 100%;
    width: 20%;

    -webkit-animation: 4s linear 0s infinite alternate move_eye;
    animation: 4s linear 0s infinite alternate move_eye;
  }

  @-webkit-keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
  @keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
.main {
  background: #ffffff;
  .testImg {
    width: 400px;
    height: 400px;
    background-color: black;
    background: url("../../../../public/images/gallery/1.png"),url("../../../../public/images/gallery/2.png");
    &:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
  }
  .img {
    width: 200px;
    height: 200px;
    background: magenta;
    transition: background 200ms ease-in 50ms;
    &:hover {
      background: orange;
      animation: 1s linear 1s infinite alternate slidein;
    }
  }
  .father {
    width: 500px;
    height: 500px;
    border: 1px solid #000000;
    transform: translate(50%);
    .son  {
      position: fixed;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background: red;
    }
  }
}
  .content {
    width: 300px;
    height: 300px;
    overflow: hidden;
    img {
      width: 300px;
      height: 300px;
      &:hover {
        transform: scale(1.1);
        transition: all 1s linear;
        cursor: pointer;
        filter: blur(1px);
        transform: rotateX(190deg);
      }
    }
  }
  .triangle {
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 0;
      height: 0;
      border-top: 10px solid red;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    &:hover {
      cursor: pointer;
      transform: rotateX(90deg);
    }
  }
</style>
