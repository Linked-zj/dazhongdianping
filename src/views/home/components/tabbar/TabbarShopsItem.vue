
<template>
  <div id="tabbarItem">
    <van-tabs
      v-model="active"
      animated
      swipeable
      sticky
      :border="false"
      :offset-top="47"
      ref="tabs"
      type="line"
      color="#28BE57"
      title-active-color="#28BE57"
      animated:yes
    >
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
         
        </div>
         <ShopItem :shop_list="shop_list"/>
      </van-tab>
      <!-- 晚餐 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
          <ShopItem :shop_list="shop_list"/>

      </van-tab>
      <!-- 人气 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
          <ShopItem :shop_list="shop_list"/>

      </van-tab>
      <!-- 心选 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
      <ShopItem :shop_list="shop_list"/>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import ShopItem from "./ShopItem";
export default {
  // props: {
  //   tabbar_all_product_list: Array,
  //   flash_sale_product_list: Array
  // },
  props:{
    shop_list:Array
  },
  data() {
    return {
      active: 0,
      itemsTitle: ["智能筛选", "离你最近", "猜你喜欢", "评价最高"]
    };
  },
  components: {
    ShopItem
  }
};
</script>

<style lang="less" scoped>
#tabbarItem {
  width: 100%;
}
</style>
