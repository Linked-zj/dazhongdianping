<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <!--头部区域-->
    <header class="titleWrapper">
      <h4>
        <strong>{{$t('car.title')}}</strong>
      </h4>
      <div
        class="clearCart"
        :style="selectedGoodsCount==0?'color:grey':'color:#45c763'"
        @click="clearCart"
        v-show="isShowEmptyCart"
      >{{$t('car.delete')}}</div>
    </header>
  </div>
</template>

<script type="text/javascript">
export default {
  mounted() {
    // 初始化数据
    //this._initData();
  },
  data() {
    return {
      selectedGoodsCount: 0,
      isShowEmptyCart: false
    };
  },
  components: {},
  computed: {},
  methods: {
    clearCart(){
      
    }
  }
};
</script>
<style lang="less" scoped>
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
}
</style>
