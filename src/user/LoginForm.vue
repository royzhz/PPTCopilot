<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">欢迎登录ppt-copilot</h1>
      <form @submit.prevent="onsbmit">
        <div>
          <label for="username">用户名: </label>
          <input type="text" id="username" v-model="username">
        </div>

        <div>
          <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码: </label>
          <input type="password" id="password" v-model="password">
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
        <div class="message"></div>
      </form>
      <div class="login-footer">
        <a href="#">忘记密码?</a>
        <a href="/register">注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login, checklogin, loginRequest } from '@/api/AuthService'
import { ref } from 'vue'

const username = ref<string>('')
const password = ref<string>('')

const onsbmit = () => {
  const my_login_request:loginRequest = {
    username_or_email: username.value,
    password: password.value
  }

  login(my_login_request).then((res) => {
    console.log(res)

    mycheckLogin()

  }).catch((err) => {
    console.log(err)
  })
}

const mycheckLogin = () => {
  checklogin().then((res) => {
    console.log(res)

  }).catch((err) => {
    console.log(err)
  })

}



</script>

<style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .login-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  label {
    margin-right: 10px;
  }

  input[type="text"],
  input[type="password"] {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 16px;
  }

  button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: #3e8e41;
  }

  .login-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }

  .login-footer a {
    font-size: 14px;
    text-decoration: none;
    color: #333;
  }

  .login-footer a:hover {
    text-decoration: underline;
  }
</style>




<!--<template>-->
<!--  <div>-->
<!--    <h1>Login</h1>-->
<!--    <form @submit.prevent="login">-->
<!--      <label>Username or Email:</label>-->
<!--      <input type="text" v-model="username_or_email" />-->
<!--      <br /><br />-->
<!--      <label>Password:</label>-->
<!--      <input type="password" v-model="password" />-->
<!--      <br /><br />-->
<!--      <button type="submit">Login</button>-->
<!--    </form>-->

<!--    <form @submit.prevent="checkLogin">-->
<!--      <button type="submit">check</button>-->
<!--      <div id="check"></div>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from 'axios'-->
<!--export default {-->
<!--  methods: {-->
<!--    async login() {-->
<!--      try {-->
<!--        const response = await axios.post('http://localhost:8080/login', {-->
<!--          username_or_email: this.username_or_email,-->
<!--          password: this.password-->
<!--        }, {-->
<!--          withCredentials: true-->
<!--        })-->

<!--        // const sessionId = document.cookie.match(/session_id=([^;]+)/)[1]-->
<!--        console.log(document.cookie)-->
<!--      }-->
<!--      catch (error) {-->
<!--        console.log('error')-->
<!--        console.log(error)-->
<!--        // 处理错误情况-->
<!--      }-->
<!--    },-->

<!--    async checkLogin() {-->
<!--      try {-->
<!--        const response = await axios.get('http://localhost:8080/checklogin', {-->
<!--          withCredentials: true-->
<!--        })-->
<!--        if (response.data.isAuthorized) {-->
<!--          this.isAuthorized = true-->
<!--          this.username = response.data.username-->
<!--          this.email = response.data.email-->
<!--          // 修改checkdiv-->
<!--          const checkDiv = document.querySelector('#check')-->
<!--          checkDiv.textContent = '已登录'-->
<!--        }-->
<!--      }-->
<!--      catch (error) {-->
<!--        console.log(error)-->
<!--        // 处理错误情况-->

<!--        const checkDiv = document.querySelector('#check')-->
<!--        checkDiv.textContent = '出错'-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->