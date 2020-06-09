<template>
  <div class="home-recommend-view">
    <div v-for="items in recommends" class="item-recommend">
      <a :href="items.link">
        <img :src="items.image" alt="">
        <div>{{items.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
        recommends:{
          type:Array,
          default(){
            return []
          }
        }
    }
  }
</script>

<style scoped>
  .home-recommend-view{
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item-recommend{
    flex: 1;
  }
  .item-recommend img{
    width: 87%;
    height: 80%;
    margin-bottom: 10px;
  }
</style>
