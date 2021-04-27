<template>
  <div id="app">
    <div class="nav-botton">
      <ul>
        <router-link v-for="(item,index) in routerList"  :key="index" :to="item.url" tag="li">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
        </router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      routerList:[
        {name:"首页",icon:" glyphicon glyphicon-home",url:"/home"},
        {name:"分类",icon:"glyphicon glyphicon-th-large",url:"/classify"},
        {name:"购物车",icon:"glyphicon glyphicon-shopping-cart",url:"/shopcart"},
        {name:"我的",icon:"glyphicon glyphicon-user",url:"/my"},
        ]
    }
  }
}
</script>

<style lang="less">
 ul,ol,li,body,html,p{
   list-style: none;
   padding: 0;
   margin: 0;
 }
 *{
   font-size: 12px;
 }
 .nav-botton{
   width: 100%;
   height: 40px;
   position: fixed;
   bottom: 0;
   z-index: 1000;
   background: #fff;
   padding-bottom: 40px;
   ul{
     display: flex;
     height: 40px;
     li{
       width: 25%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       align-content: center;
     }
     .router-active{
       background: #108ee9;
       color: #fff;
     }
   }
 }
</style>
