
<template>
  <div class="eatWrapper">
    <Head />
    <MenuWaterFall/>
  </div>
</template>

<script type="text/javascript">
import Head from "./components/SearchHead";
import MenuWaterFall from "./components/MenuWaterFall"
export default {
  data() {
    return {};
  },
  components: {
    Head,
    MenuWaterFall
  }
};
</script>

<style lang="less" scoped>
#eatWrapper {
  background-color: "#f5f5f5";
}
</style>
