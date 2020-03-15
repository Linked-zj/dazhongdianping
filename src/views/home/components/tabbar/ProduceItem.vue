<template>
  <div id="produceItem">
    <div class="item"
         v-for="(product,index) in product_list"
         :key="index"
         @click.stop="goToGoodsDetail(product.id)">
      <img v-lazy="product.imageUrl"
           alt="">
      <p class="itemTitle">{{product.name}}</p>
      <p class="itemSubTitle">{{product.spec}}</p>
      <span class="tagEat"
            v-if="isShowEatTag">{{$t('home.foodie')}}</span>
      <span class="price">
        {{product.price | moneyFormat}}
      </span>
      <span class="originPrice">{{product.originPrice | moneyFormat}}</span>
      <!-- <div class="buyCar"
           @click.stop="addCart(product)">
        <svg-icon iconClass="car"
                  style="width:1.5rem;height:1.5rem" />
      </div> -->
    </div>
  </div>
</template>

<script type="text/javascript">

import { mapMutations } from 'vuex'

export default {
  props: {
    product_list: Array
  },
  data () {
    return {
      isShowEatTag: false
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    ...mapMutations({
      addCart: 'ADD_TO_CART'
    }),
    // 商品详情页面
    goToGoodsDetail (id) {
      // 跳转到商品详情页面并且传值
      this.$router.push({
        name: "goodsDetail",
        query: {
          id: id,
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
#produceItem {
  background-color: #f5f5f5;
  height: auto;
  padding-left: 2%;
  padding-top: 0.5rem;
}
.item {
  position: relative;
  display: inline-block;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 0.3rem;
  padding-bottom: 0.6rem;
}

.item img {
  width: 100%;
  height: 100%;
  // 等比缩小图片来适应元素的尺寸
  background-size: contain;
  background-image: url("../../../../images/placeholderImg/product-img-load.png");
}
.item .itemTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  line-height: 1rem;
  font-size: 0.625rem;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item .itemSubTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: gray;
  padding-top: 0.2rem;
  font-size: 0.45rem;
  line-height: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 1.5rem;
}

.item .price {
  padding-left: 0.5rem;
  color: #f37078;
  font-size: 0.928rem;
}
.tagEat {
  margin-left: 0.5rem;
  padding: 0.09rem;
  color: orangered;
  width: 2.5rem;
  height: 0.1rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  border: 0.05rem solid red;
}

.originPrice {
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
.buyCar {
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  right: 1rem;
  bottom: 0.5rem;
}
</style>
