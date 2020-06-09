//关于home首页的网络请求
import {requset} from "./request";
export function getHomeMultidata() {
  return requset({
    url:'/home/multidata'
  })
}
