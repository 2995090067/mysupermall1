import axios from 'axios'

export function requset(config) {
  const instance=axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    // 延迟5秒
    timeout:5000
  })
  // 拦截响应
  instance.interceptors.request.use(config=>{
    console.log("hello,欢迎进入。。。。request")
    console.log(config)
    //1.比如config中的一些不符合服务器要求
    //2.每次发送请求，都希望界面中显示一个请求图标
    //3.某些网络请求，比如登录（token），必须携带一些特殊信息
    return config
  },e=>{
    console.log(e);
  })
  instance.interceptors.response.use(res=>{
    //服务器响应过了，获取结果
    console.log("进入response，res");
    console.log(res);
    //这个才是服务返回的真正的东西
    return res.data
  },e=>{
    console.log(e);
  })
  // 返回的就是Promise
    return instance(config)
  // 其他地方调用可以直接.then
}
