<template>
  <div class="register-container">
    <div class="register-box">
      <h1 class="register-title">欢迎注册ppt-copilot</h1>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="username">用户名: &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="username" v-model="username">
        </div>

        <div>
          <label for="password">密码: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="password" id="password" v-model="password">
        </div>

        <div>
          <label for="passwordConfirm">确认密码: </label>
          <input type="password" id="passwordConfirm" v-model="passwordConfirm">
        </div>

        <div>
          <label for="email">邮箱: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="email" v-model="email">
        </div>

        <div>
          <button type="submit" @click="sendVerificationCode">发送</button>
        </div>

        <div>
          <label for="verificationCode">验证码: &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="verificationCode" v-model="verificationCode">
        </div>

        <div>
          <button type="submit" @click="onSubmit">注册</button>
        </div>
      </form>
      <div class="register-footer">
        <a href="/login">已有账号，立即登录</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { register } from '@/api/AuthService'
import { ref } from 'vue'

const username = ref<string>('')
const password = ref<string>('')
const passwordConfirm = ref<string>('')
const email = ref<string>('')
const verificationCode = ref<string>('')



</script>


<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

.register-title {
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
  margin-bottom: 20px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

.register-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}

.register-footer a {
  font-size: 14px;
  text-decoration: none;
  color: #333;
}

.register-footer a:hover {
  text-decoration: underline;
}
</style>