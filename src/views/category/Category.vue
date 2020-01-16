<template>
  <div class>
    <Head />
    <ShopItemList/>
  </div>
</template>
 
<script>
import Head from "./components/SearchHead";
import ShopItemList from "./components/ShopItem";

export default {
  name: "Category",
  data() {
    return {
      msg: "Welcome to your vueName",
    
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