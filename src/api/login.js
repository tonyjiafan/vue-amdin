import $axios from '@/utils/request'

/**
 * 登录
 */
export function Login (data) {
  return $axios.request({
    method: 'post',
    url: '/login/',
    data
  })
}

/**
 * 注册
 */
export function Register (data) {
  return $axios.request({
    method: 'post',
    url: '/register/',
    data
  })
}

/**
 * 获取用户角色
 */
export function getUserRole (data = {}) {
  return $axios.request({
    method: 'post',
    url: '/userRole/',
    data
  })
}
