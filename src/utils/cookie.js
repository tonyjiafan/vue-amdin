import cookie from 'cookie_js'

// token在Cookie中存储的天数，默认1天
const cookieExpires = 1
export const TOKEN_KEY = 'admin_toKen'
export const USER_NAME_KEY = 'username'

export function getToKen () {
  return cookie.get(TOKEN_KEY)
}

export function setToKen (toKen) {
  return cookie.set(TOKEN_KEY, toKen, { expires: cookieExpires || 1 })
}

export function removeToKen (toKen) {
  return cookie.remove(TOKEN_KEY)
}

export function setUserName (value) {
  return cookie.set(USER_NAME_KEY, value)
}

export function getUserName () {
  return cookie.get(USER_NAME_KEY)
}

export function removeUserName () {
  return cookie.remove(USER_NAME_KEY)
}
