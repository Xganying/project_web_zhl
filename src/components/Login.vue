<template>
  <div class="login-page-wrap">
    <div class="logo-wrap">
      <img class="logo" src="../assets/login_logo.png" />
    </div>
    <div class="welcome-text">欢迎，请登陆系统～</div>
    <div class="content-wrap">
      <div>
        <label>用户名：</label>
        <el-input placeholder="用户名" v-model="user"></el-input>
      </div>
      <div>
        <label>密码：</label>
        <el-input
          placeholder="密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <el-button type="primary" round @click="_handleLogin">登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    _handleLogin() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page-wrap {
  width: 100%;
  .logo-wrap {
    width: 100%;
    height: 100%;
    .logo {
      width: 100%;
      height: 180px;
    }
  }
  .welcome-text {
    margin: 6% 0 2%;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }
  .content-wrap {
    text-align: center;
    margin: 6% auto;
    label {
      display: inline-block;
      width: 100px;
      text-align: right;
      font-size: 16px;
      font-weight: bold;
    }
    .el-input {
      width: 500px;
      margin: 15px 0;
    }
    .el-button {
      width: 500px;
      margin-top: 15px;
      margin-left: 100px;
      border-radius: 8px;
    }
  }
}
</style>