<template>
    <div class="home-content">
        <!-- 首页上方的背景块 -->
        <div class="home-top-background"></div>
        <!-- 搜索框  设置登录按钮 -->
        <div class="home-top-content">
            <span>设置</span>
            <input type="text" class="home-search">
            <span>登录</span>
        </div>
        <!-- 快捷连接 -->
        <div class="grid-content">
            <ul>
                <li v-for="(item,index) in gridlist" :key="index">
                    <div>
                        <span :style="{background:item.gridColor}" :class="item.gridIcon"></span>
                        <p>{{item.gridName}}</p>
                    </div>
                    
                </li>
            </ul>
        </div>
        <!-- 轮播图 -->
        <Slide :slideList="slideList"/>
        <!-- 相似物品 -->
        <div>
            <ul class="recommend-content">
                <router-link :to="'/recommendInif/'+item.id" v-for="item in recommendList" :key="item.id" tag="li">
                    <div class="recommend-top">
                        <img :src="item.url" >
                    </div>
                    <p class="recommend-details">{{item.getrecommendtext}}</p>
                    <div class="recommend-bottom">
                        <h5 class="recommend-price">{{item.price}}</h5>
                        <span class="recommend-look">找相似</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import Slide from "../share/Slide"
export default {
    components :{
        Slide
    },
    data(){
    return {
      gridlist:[
          {gridName:"美食",gridIcon:"glyphicon glyphicon-heart",gridUrl:"",gridColor:"rgb(255,191,6)"},
          {gridName:"商超便利",gridIcon:"glyphicon glyphicon-home",gridUrl:"",gridColor:"rgb(253,128,0)"},
          {gridName:"水果",gridIcon:"glyphicon glyphicon-apple",gridUrl:"",gridColor:"rgb(164,88,56)"},
          {gridName:"跑腿代购",gridIcon:"glyphicon glyphicon-knight",gridUrl:"",gridColor:"rgb(1,194,149)"},
          {gridName:"甜品饮品",gridIcon:"glyphicon glyphicon-ice-lolly-tasted",gridUrl:"",gridColor:"rgb(254,62,0)"},
          {gridName:"晚餐",gridIcon:"glyphicon glyphicon-star-empty",gridUrl:"",gridColor:"rgb(0,214,0)"},
          {gridName:"全球美食",gridIcon:"glyphicon glyphicon-send",gridUrl:"",gridColor:"rgb(255,79,144)"},
          {gridName:"出行",gridIcon:"glyphicon glyphicon-plane",gridUrl:"",gridColor:"rgb(255,180,0)"},
          {gridName:"电话维修",gridIcon:"glyphicon glyphicon-wrench",gridUrl:"",gridColor:"rgb(9,176,248)"},
          {gridName:"送药上门",gridIcon:"glyphicon glyphicon-briefcase",gridUrl:"",gridColor:"rgb(255,134,5)"}
      ],
    slideList:[
            require("../../assets/img/gridlist/1.jpg"),
            require("../../assets/img/gridlist/2.jpg"),
            require("../../assets/img/gridlist/3.jpg"),
            require("../../assets/img/gridlist/4.jpg"),
            require("../../assets/img/gridlist/5.jpg"),
            require("../../assets/img/gridlist/6.jpg"),
        ],
      // child2Msg:""
     
      recommendList:[]
    }
  },
  created(){
      this.getRecommendData()
  },
  methods:{
      getRecommendData(){
          this.$axios.post("/getrecommend").then(res=>{
              this.recommendList=res.data.data
          })
      }
  },
  mounted(){
      
  }
}
</script>
<style lang="less" scoped>
.home-content{
    padding-top:45px;
    .home-top-background{
      width: 100%;
      height:100px;
      background: linear-gradient(0deg,#f1503b,#c82519 50%);
      border-bottom-left-radius:30px;
      border-bottom-right-radius:30px;
      position: absolute;
      z-index: 1;
    }
    .home-top-content{
       position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        display: flex;
        justify-content:space-around;
        align-items: center;
        background: #e43130;
        padding: 10px;
        color:#fff;
        .home-search{
            width: 70%;
            border:1px solid #000;
            height:30px;
            border-radius: 20px;
        }
    }
    .grid-content{
        position: relative;
        z-index: 100;
        background: #fff;
        width: 92%;
        margin: 15px 4%;
        border-radius: 10px;
        background: #e4e4e4;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 20%;
                max-width: 20%;
                min-width: 20%;
                display: flex;
                justify-content: center;
                padding: 8px 0;
                div{
                    text-align: center;
                    span{
                        font-size: 28px;
                        color: #fff;
                        width: 40px;
                        line-height: 40px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
}

  .recommend-content{
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    justify-content:center;
    padding-bottom: 40px;
    margin-top:10px;
    li{
      width:48%;
      flex-direction:column;
      .recommend-top{
        img{
          width:176px;
          height:176px;
        }
      }
      .recommend-details{
        width: 98%;
        height: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .recommend-bottom{
        display: flex;
        height:35px;
        justify-content: space-between;
        padding: 0 4px;
        align-items: center;
        .recommend-price{
          font-weight: bold;
          color:red;
        }
        .recommend-see{
          border:.5px solid #000;
          height:18px;
          padding:2px;
          text-align: center;
        }
      }
    }
    }
</style>