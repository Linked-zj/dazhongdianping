import axios from 'axios'

axios.defaults.baseURL = ``

// 设置请求超时
axios.defaults.timeout = 10000

// 添加request拦截器
axios.interceptors.request.use(config => {
  /**
   * 请求拦截
   * 判断token是否存在,将token放在请求头发送给后端
   */
  return config
}, error => {
  Promise.reject(error)
})

// 添加response拦截器
axios.interceptors.response.use(response => {
  /**
   * 响应拦截
   */
  return Promise.resolve(response)
}, (error) => {
  /**
   * 响应错误处理
   */
  return Promise.reject(error)
})

export default axios
