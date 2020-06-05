<template>
  <div id="home">
    <nav-bar class="homebar"><div slot="centers">购物街</div></nav-bar>
  </div>
</template>

<script>
 import NavBar from "@/components/common/navbar/NavBar";
 // 导航
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
/*@import "~@/assets/css/test.css";*/
  /*能识别，但是自己会报错*/
  .home{
    margin: 0;
    padding: 0;
  }
  .homebar{
    color: #f6f6f6;
    background-color:var(--color-tint);
  }
</style>
