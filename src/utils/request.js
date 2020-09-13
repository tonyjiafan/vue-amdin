import axios from 'axios'
import { Message } from 'view-design'
import { getToKen, getUserName } from './cookie'

const BASEURL = process.env.NODE_ENV === 'production' ? '' : 'https://www.api.jingyuhuodong.com'

const $axios = axios.create({
  baseURL: BASEURL,
  timeout: 15000 // 超时
})

/**
 * 请求接口前，做一些数据处理（请求拦截器）
 */
$axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 后台需要前端这边传相关的参数（在请求头添加参数）
    // Tokey
    // userId
    // sui
    // 业务需求
    // 最终目地不是在请求头添加参数
    config.headers['Tokey'] = getToKen()
    config.headers['UserName'] = getUserName()

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/**
 * 请求接口后，返回数据进行拦截（响应拦截器）
 */
$axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    let data = response.data
    // 业务需求

    if (data.resCode !== 0) {
      Message.error(data.message)
      return Promise.reject(data)
    } else {
      return response
      // return Promise.resolve(data);
    }
  },
  function (error) {
    // 响应错误做什么
    return Promise.reject(error)
  }
)

export default $axios
