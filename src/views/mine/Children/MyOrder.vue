<template>
  <div id="myOrder">
    <van-nav-bar
      :title=" $t('mine.myOrders')"
      :border="false"
      :fixed="true"
      @click-left="onClickLeft"
      left-arrow
      style="height:2.5rem"
    />
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
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/javascript">
import OrderType from "./MyOrderChildren/OrderType";
export default {
  data() {
    return {
      typeArray: [],
      // 路由传递过来的数据 active
      active: this.$route.params.active,
      itemsTitle: this.$t("mine.itemsTitle"),
      orderStatus: this.$route.params.orderStatus,
      confirmStatus: this.$route.params.confirmStatus
    };
  },
  components: {
    OrderType
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    getOrderList() {
      let param = {
        orderStatus: this.orderStatus,
        confirmStatus: this.confirmStatus
      };
      this.httpPost("/order/list", param).then(result => {
        if (result.code == 0) {
          this.typeArray = result.data;
          for (let i = 0; i < this.typeArray.length; i++) {
            this.typeArray[i].orderProductList.forEach(item => {
              item.imageUrl = this.baseUrl + item.imageUrl;
            });
          }
        }
      });
    }
  },
  created() {
    this.getOrderList();
  }
};
</script>

<style lang="less" scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
