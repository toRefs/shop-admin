import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

// request 不支持泛型
// request.get、post、put、delete 等支持响应数据泛型
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
