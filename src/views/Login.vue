<template>
  <div>
    <el-form class="login-form" ref="loginFormRef" :rules="loginFormRules" :model="loginForm">
      <h3 class="login-title">系统登录</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" placeholder="请输入验证码" type="text" auto-complete="false" style="width: 250px; margin-right: 5px"></el-input>
        <img :src="captchaUrl" alt="验证码">
        </el-form-item>
      <el-checkbox class="login-remember" v-model="checked">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="loginSubmit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      checked: true,
      loginFormRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 3,
            max: 32,
            message: '长度在 3 到 32 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            min: 4,
            max: 4,
            message: '长度在 4 个字符',
            trigger: 'blur'
          }
        ]
      },
      captchaUrl: ''
    }
  },
  methods: {
    loginSubmit () {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) {
          return this.$message.error('预校验未通过！')
        }
        alert('111')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  padding: 15px 35px 15px 35px;
  width: 350px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login-title {
  text-align: center;
}

.login-remember {
  text-align: left;
  margin: 0 0 15px 15px;
}
</style>
