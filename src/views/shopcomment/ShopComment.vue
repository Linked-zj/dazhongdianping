<template>
  <div id="ShopComment">
    <header class="
       titleWrapper">
      <h4><strong>{{$t('car.title')}}</strong></h4>
      <div class="clearCart"
           :style="selectedGoodsCount==0?'color:grey':'color:#45c763'"
           @click="clearCart"
           v-show="isShowEmptyCart">{{$t('car.delete')}}</div>
    </header>
  </div>
</template>
 
<script>
// 引入页面组件

export default {
  name: "ShopComment",
  data() {
    return {
     
    };
  },
  methods: {
    
    
    
  },
  created() {
    
  },
  components: {
   
  }
};
</script>
 
<style scoped lang = "less">
.cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .titleWrapper {
    width: 100%;
    height: 2.6rem;
    background: #fff;
    -webkit-background-size: 0.1rem 4.4rem;
    background-size: 0.1rem 4.4rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .titleWrapper .clearCart {
    position: absolute;
    right: 0.3rem;
    font-size: 0.8rem;
  }

  }

}
</style>