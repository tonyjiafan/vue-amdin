/**
 * 动态路由 集中暴露
 * 角色：admin, manager
 */
import { home } from './home'
import { main } from './main'
import { user, user2 } from './user'

const asnycRouterMap = [
    ...home,
    ...main,
    ...user,
    ...user2,
]

export default asnycRouterMap


