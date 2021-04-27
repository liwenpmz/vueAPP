<template>
  <div class="details-content">
    <span @click="back" class="up-page">返回</span>
    <div >
        <img :src="inifObj.url" alt="">
        <div class="details-body-text">
            <h4>{{inifObj.titletext}}</h4>
            <p>{{inifObj.contenttext}}</p>
            <div>
                <h5>{{inifObj.price}}</h5>
                <span>添加到购物车</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>   

export default {
  data() {
    return {
      id: this.$route.params.id,
      inifObj:{}
    };
  },
  created(){
      this.getInif()
  },
  methods: {
    back(){
        this.$router.go(-1)
    },
    getInif() {
      this.$axios.post(`/commodityinfo/${this.id}`).then((req) => {
          this.inifObj=req.data.data[0];
      });
    },
  },
};
</script>

<style lang="less" scoped>
.details-content{
    .up-page{
        position: fixed;
        top:0;
        left: 0;
        padding:5px 10px;
        border-radius: 15px;
        background: #e4e4e4;
    }
    .details-body-text{
        padding:0 5px;
        div{
            display: flex;
            justify-content: space-between;
            h5{
                color:red;
                font-weight: bold;
            }
            span{
                border:1px solid red;
                height: 20px;
                padding:3px;
            }
        }
    }
}
    
</style>