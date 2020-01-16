
<template>
  <div id="shopItemList">
    <DropMenu />
    <div id="shopItem" v-for="(item,index) in shop_list" :key="index">
      <van-card
        :desc="item.shopDesc"
        :title="item.shopName"
        :thumb="item.shopImage1"
        :price="item.shopAvgPrice"
      >
        <div slot="tags" class="rate">
          <van-rate color="#FF0000" allow-half v-model="item.shopRate" size="15px" readonly />
        </div>
      </van-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import DropMenu from "./DropMenu";

export default {
  data() {
    return {
      shop_list: []
    };
  },
  components: {
    DropMenu
  },
  computed: {},
  methods: {
  
    getShopList() {
      this.httpPost("shop/list", null).then(result => {
        if (result.code == 0) {
          this.shop_list = result.data;
          this.shop_list.forEach(item => {
            item.shopImage1 = this.baseUrl + item.shopImage1;
          });
        }
      });
    }
  },
  created(){
    this.getShopList();
  }
};
</script>

<style lang="less" scoped>
#shopItemList {
  background-color: #f5f5f5;
  position: relative;
  height: auto;
}

.rate {
  margin-top: 0.25rem;
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

.van-card__bottom,
.van-card__desc {
  line-height: 20px;
  margin-bottom: auto;
  margin-top: 0.25rem;
}
</style>