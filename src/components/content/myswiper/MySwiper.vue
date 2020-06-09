<template>
  <div>
    <swiper>
      <swiper-item v-for="items in banners">
        <a :href="items.link">
          <img :src="items.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "@/components/common/swiper/module"
  export default {
    name: "MySwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      // 子组件获取父组件信息
      banners:{
        type:Array,
        default() {
          return [];
        }
      }
    }

  }
</script>

<style scoped>

</style>
