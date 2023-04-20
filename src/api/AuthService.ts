import axios from '@/utils/axiosRequest'
export interface loginRequest {
  'username_or_email': string,
  'password': string,
}

export const login = (params: loginRequest) => {
  return axios.post<object>('/login', params)
}

export interface registerRequest {
  'username': string,
  'email': string,
  'password': string,
}

export const register = (params: registerRequest) => {
  return axios.post<object>('/register', params)
}

export const checklogin = () => {
  return axios.get<object>('/checklogin')
}