<template>
  <div class="container">
    <h2 class="text-center">你好，请登录</h2>
    <div class="row">
      <form class="form-horizontal col-md-offset-4 col-md-4" id="loginFrom">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">邮箱</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model="email" v-validate="'required|email'" data-vv-as="邮箱"/>
            <p class="alert alert-danger" role="alert" v-show="errors.has('email')">{{ errors.first('email') }}</p>
          </div>
        </div>
        <div class="form-group" name="password" rules="required">
          <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" v-model="password" v-validate="'required|min:6'" data-vv-as="密码"/>
            <p class="alert alert-danger" role="alert" v-show="errors.has('password')">{{ errors.first('password') }}</p>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox" />记住密码
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default login" v-on:click="login()">登录</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<!-- script of LoginForm -->
<script>
export default {
  name: 'LoginForm',
  components: {},
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login: function () {

    }
  }
}
</script>
<!-- style of LoginForm -->
<style scoped>
.login {
  color: white;
  height: 38px;
  width: 300px;
  background-color: #2b669a;
}
</style>
