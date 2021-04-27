<template>
    <div class="slide-content">
        <div class="slide-view">
            <img  v-for="(item,index) in slideList " v-show="index === x" :key="index" :src="item" alt="">
            <ul class="slide-page">
                <li v-for="(v,index) in slideList" :key="index" :class="x===index?'active':''"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:["slideList"],
    data(){
        return{
      
        x:0
        }
    },
    methods:{
      //轮播图定时器方法
      go(){
          setInterval(() => {
              this.x++;
              if(this.x==this.slideList.length){
                  this.x=0;
              }
          },2000);
      }
  },
  mounted(){
      this.go()
  }
}
</script>
<style lang="less" scoped>
.slide-content{
        .slide-view{
            height: 140px;
            img{
                width: 92%;
                height: auto;
                margin: 0 4%;
                position: absolute;
            }
            .slide-page{
                    position: relative;
                    bottom:-119px;
                    text-align: center;
                li{
                    width: 10px;
                    height:10px;
                    border-radius: 10px;
                    background: #fff;
                    display: inline-block;
                    margin: 0 3px;
                    opacity: .6;
                }
            }
        }
    }
     .active{
        background: #000 !important;
    }
</style>