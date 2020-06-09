<template>
  <div id="home">
    <nav-bar class="homebar"><div slot="centers">购物街</div></nav-bar>
    <my-swiper :banners="banners"></my-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
 import {getHomeMultidata} from "@/network/home";
  // 导航图组件入口
 import NavBar from "@/components/common/navbar/NavBar";
 //轮播图组件入口
 import MySwiper from "@/components/content/myswiper/MySwiper";
 // 推荐
 import HomeRecommendView from "./homechildren/HomeRecommendView";
  // 现在的VUE的UI库有很多 mint-ui， iview
 // 导航
  export default {
    name: "Home",
    components:{
      NavBar,
      getHomeMultidata,
      MySwiper,
      HomeRecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        // 由于接口更新，banner.list 里面才有书
        // console.log(this.banners);
        this.recommends=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  /*能识别，但是自己会报错*/
  .homebar{
    color: #f6f6f6;
    background-color:var(--color-tint);
  }
</style>
