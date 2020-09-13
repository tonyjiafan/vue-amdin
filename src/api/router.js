import $axios from '@/utils/request'

/**
 * 登录
 */
export function Login(data) {
  return $axios.request({
    method: 'post',
    url: '/login/',
    data,
  })
}
