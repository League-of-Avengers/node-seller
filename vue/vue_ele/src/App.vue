

<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px" >
      <div class="tab-item">
         <router-link :to="{path:'/goods'}">
        商品
         </router-link>
      </div>
      <div class="tab-item">
                 <router-link :to="{path:'/ratings'}">
        评论
         </router-link>
      </div>
      <div class="tab-item">
                 <router-link :to="{path:'/seller'}">
        商家
         </router-link></div>
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
/**
 * 根组件
 */

import Header from "@/components/header/header.vue";
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      seller:{},
    }
  },
  created(){
    this.$http.get('/api/seller').then(res=> {
     
      if(res.data.errno == 0){
        this.seller = res.data.data;
         console.log(res.data.data);
      }
    })
  },
  components: {
    "v-header": Header,
    HelloWorld
  }
};
</script>

<style lang="less">
// @import "./common/css/border-1px.less";
@import "./common/css/index.less";

#app {
  .tab {
    height: 40px;
    width: 100%;
    display: flex;
    line-height: 40px;
    // 手机端 1px 像素处理，使用定义好的 Mixin, 可与下面这个对比，差距很明显
    // border-top: 1px solid rgba(7,17,27,0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        // 处理 vue-router 默认选中路由时的样式
        &.router-link-active {
          // background: greenyellow;
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>>

</style>
