import axios from 'axios'
import { URL } from '@/utils/axiosRequest'

const checkloginURL = URL + '/checklogin'
const loginURL = URL + '/login'
const registerURL = URL + '/register'



async function register(
  username: string,
  email: string,
  password: string,
): Promise<boolean> {

  const response = await axios.post(registerURL, {
    username: username,
    email: email,
    password: password,
  }, {
    withCredentials: true, // 添加withCredentials: true选项
  })
  return true
}

async function checklogin(): Promise<boolean> {
  try {
    const response = await axios.get(checkloginURL, {
      withCredentials: true
    })
    return response.data.isAuthorized

  }
  catch (error) {
    console.log(error)
    // 处理错误情况
    return false
  }
}

export { register, checklogin, loginURL }