import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/index'

axios.interceptors.response.use(success => {
  if (success.status && success.status === 200) {
    if (success.data.code === 200) {
      return success.data
    }
    if (success.data.message) {
      return Message.error('数据错误:' + success.data.message)
    }
    return Message.error('数据错误!!!')
  }
  return Message.error('服务器错误,请稍后再试！')
}, error => {
  if (error.response.code === 404 || error.response.code === 504) {
    Message.error('页面找不到啦啦啦!!!')
  } else if (error.response.code === 403) {
    Message.error('权限不足,请联系管理员！')
  } else if (error.response.code === 401) {
    Message.error('尚未登录,请登录！')
    router.replace('/')
  } else {
    if (error.response.data.message) {
      Message.error(error.response.data.message)
    } else {
      Message.error('服务器错误,请稍后再试！！！')
    }
  }
  return null
})
