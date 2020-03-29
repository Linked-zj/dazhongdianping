<template>
  <div id="wrapper">
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="(nav,index) in nav_list"
        :key="nav.cid"
        :icon="nav.icon_url"
        :text="nav.name"
        @click="gotoCategory(index,nav.categoryId)"
      />
    </van-grid>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    nav_list: Array
  },
  data() {
    return {
      shop_list: []
    };
  },
  components: {},
  methods: {
    gotoCategory(index, categoryId) {
      let param = { categoryId: categoryId };
      this.httpPost("/shop/list", param).then(result => {
        if (result.code == 0) {
          this.shop_list = result.data;
          this.shop_list.forEach(item => {
            item.shopImage1 = this.baseUrl + item.shopImage1;
          });
        }
        this.$router.push({
          name: "category",
          params: {
            currentIndex: index,
            shop_list: this.shop_list,
            categoryId: categoryId
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>

