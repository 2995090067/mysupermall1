<template>
  <div id="home">
    <nav-bar class="homebar"><div slot="centers">购物街</div></nav-bar>
    <my-swiper :banners="banners"></my-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <featue-view></featue-view>
    <tab-control :titles="titles" class="tab-control"></tab-control>
    <ul>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
      <li>h</li>
    </ul>
  </div>
</template>

<script>
  // 现在的VUE的UI库有很多 mint-ui， iview

  // 额外的数据导入
 import {getHomeMultidata} from "@/network/home";

  // 导航图组件入口
 import NavBar from "@/components/common/navbar/NavBar";
 //轮播图组件入口
 import MySwiper from "@/components/content/mySwiper/MySwiper";
 //特别推荐
 import tabControl from "@/components/content/tabControl/tabControl";

 // 推荐
 import HomeRecommendView from "./homechildren/HomeRecommendView";
 //每周推荐
 import FeatueView from "./homechildren/FeatueView";

 // 导航
  export default {
    name: "Home",
    components:{
      NavBar,
      getHomeMultidata,
      MySwiper,
      HomeRecommendView,
      FeatueView,
      tabControl
    },
    data(){
      return{
        banners:[],
        recommends:[],
        titles: ['流行','精款','新选'],
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
  #home{
    /*内部上边距44px防止下面的图被盖住*/
    padding-top: 44px;
  }

  /*能识别，但是自己会报错*/
  .homebar{
    color: #f6f6f6;
    background-color:var(--color-tint);
    /*固定好位置，防止标题导航栏被覆盖*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 9;
  }

  .tab-control{
    /*暂时做个黏贴属性*/
    position: sticky;
    top:45px;

  }
</style>
