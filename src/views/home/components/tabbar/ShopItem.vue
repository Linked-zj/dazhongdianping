
<template>
  <div id="shopItemList">
    <div id="shopItem" v-for="(item,index) in shop_list" :key="index" @click="shopDetail">
      <van-card :desc="item.shopDesc" :title="item.shopName" :thumb="item.shopImage1"  :price="item.shopAvgPrice">
      <div slot="tags" class="rate">
        <van-rate color="#FF0000" allow-half v-model="item.shopRate" size = 15px readonly />
      </div>
      </van-card>
    </div>
  </div>
</template>

<script type="text/javascript">
//import { mapMutations } from "vuex";

export default {
  props: {
    shop_list: Array
  },
  data() {
    return {
    };
  },
  components: {},
  computed: {},
  methods: {
    shopDetail(){
      // 商品详情页面
      this.$router.push({
        path: "shop",
       
      });
    }
    }
};
</script>

<style lang="less" scoped>
#shopItemList {
  background-color: #ffffff;
  position: relative;
  height: auto;
  padding-left: 2%;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
}

.rate{
  margin-top: 0.25rem
}

.van-card__title {
  max-height: 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
}

.van-card {
  position: relative !important;
  box-sizing: border-box;
  color: #323233;
  font-size: 12px;
  background-color: #ffffff;
  margin-bottom: 0.5rem;
  padding: 0 !important;
}

.van-card__desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute !important;
  bottom: 0.2rem !important;
}

.van-card__thumb {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 102px !important;
  height: 83px !important;
  margin-right: 8px;
  border-radius: 8px;
}

.van-card__bottom, .van-card__desc {
    line-height: 20px;
    margin-bottom: auto;
    margin-top: 0.25rem;
}
// .item {
//   position: relative;
//   display: inline-block;
//   width: 48%;
//   margin-right: 2%;
//   margin-bottom: 0.5rem;
//   background-color: white;
//   border-radius: 0.3rem;
//   padding-bottom: 0.6rem;
// }

// .item img {
//   width: 100%;
//   height: 100%;
//   // 等比缩小图片来适应元素的尺寸
//   background-size: contain;
//   background-image: url("../../../../images/placeholderImg/product-img-load.png");
// }
// .item .itemTitle {
//   padding-left: 0.5rem;
//   padding-right: 0.5rem;
//   line-height: 1rem;
//   font-size: 0.625rem;
//   word-break: break-all;
//   display: -webkit-box;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// }

// .item .itemSubTitle {
//   padding-left: 0.5rem;
//   padding-right: 0.5rem;
//   color: gray;
//   padding-top: 0.2rem;
//   font-size: 0.45rem;
//   line-height: 1rem;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   word-break: break-all;
//   margin-bottom: 1.5rem;
// }

// .item .price {
//   padding-left: 0.5rem;
//   color: #f37078;
//   font-size: 0.928rem;
// }
// .tagEat {
//   margin-left: 0.5rem;
//   padding: 0.09rem;
//   color: orangered;
//   width: 2.5rem;
//   height: 0.1rem;
//   border-radius: 0.2rem;
//   font-size: 0.3rem;
//   border: 0.05rem solid red;
// }

// .originPrice {
//   font-size: 0.6875rem;
//   color: #999999;
//   text-decoration: line-through;
// }
// .buyCar {
//   position: absolute;
//   height: 1.5rem;
//   width: 1.5rem;
//   right: 1rem;
//   bottom: 0.5rem;
// }
</style>
