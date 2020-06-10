//关于home首页的网络请求
import {requset} from "./request";
export function getHomeMultidata() {
  return requset({
    url:'/home/multidata'
  })
}
//获取主页商品列表
export function getHomeDateGoods(type,page) {
  return requset({
    url:'/home/date',
    params:{
      type,
      page
    }
  })
}
