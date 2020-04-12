<template>
  <div class>
    <Head />
    <ShopItemList :shop_list="shop_list"/>
  </div>
</template>
 
<script>
import Head from "./components/SearchHead";
import ShopItemList from "./components/ShopItem";

export default {
  name: "Category",
  data() {
    return {
      categoryId: this.$route.params.categoryId,
      shop_list: this.$route.params.shop_list
    };
  },
  components: {
    Head,
    ShopItemList
  }
};
</script>
 
<style scoped lang = "less">
</style>