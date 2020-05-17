<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0"></div>
    <div v-else class="noDataPlaceHold">
      <img src="./../../../../images/mine/noData.jpeg" alt />
      <span class="desc">{{$t('mine.feedbackTip')}}</span>
    </div>
    <div class="orderItem" v-for="(item,index) in orderTypeDataArray" :key="index" @click="comment">
      <van-card
        v-for="(orderItem,orderIndex) in item.orderProductList"
        :key="orderIndex"
        :title="orderItem.name"
        :thumb="orderItem.imageUrl"
        :price="orderItem.price"
        :num="orderItem.num"
      ></van-card>
      <div class="confirm">
        <van-cell class="total" title="总计:" :value="item.totalAmount" size="small" />
        <van-button class="delivery" round size="small" type="primary" @click="confirm(item.orderId)">确认收货</van-button>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">

import { Toast, Dialog } from 'vant'

export default {
  props: {
    orderTypeDataArray: Array
  },
  mounted() {},
  data() {
    return {
      num: null
    };
  },
  components: {},
  methods: {
    comment() {
      console.log(this.orderTypeDataArray);
    },
    confirm(id) {
      Dialog.confirm({
        message: "是否确认收货"
      })
        .then(() => {
          // on confirm
          this.httpPost("/order/confirm/" + id, null).then(result => {
            if (result.code == 0) {
              Toast({
                message: "收货成功",
                duration: 800
              });
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less" scoped>
#orderType {
  margin-top: 3rem;
  height: 20rem;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .total {
    background-color: #fafafa;
  }
  .van-button--small {
    margin-left: 300px;
    margin-top: 5px;
  }
}
</style>
