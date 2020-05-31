
<template>
  <div id="tabbarItem">
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 休闲零食 -->
      <van-tab>
        <div slot="title">
          <span @click="getProductList(1)">{{itemsTitle[0]}}</span>
        </div>
        <ProduceItem :product_list="product_list" />
      </van-tab>
      <!-- 饮料饮品 -->
      <van-tab>
        <div slot="title">
          <span @click="getProductList(2)">{{itemsTitle[1]}}</span>
        </div>
        <ProduceItem :product_list="product_list" />
      </van-tab>
      <!-- 日用百货 -->
      <van-tab>
        <div slot="title">
          <span @click="getProductList(3)">{{itemsTitle[2]}}</span>
        </div>
        <ProduceItem :product_list="product_list" />
      </van-tab>
      <!-- 新鲜蔬果 -->
      <van-tab>
        <div slot="title">
          <span @click="getProductList(4)">{{itemsTitle[3]}}</span>
        </div>
        <ProduceItem :product_list="product_list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import ProduceItem from './ProduceItem'
export default {
  data () {
    return {
      product_list:[],
      active: 0,
      itemsTitle: ["休闲零食", "饮料饮品", "日用百货", "新鲜蔬果"]
    }
  },
  methods:{
    //商品数据
    getProductList(type){
      let param={
        "categoryId":type
      }
        this.httpPost("/product/list", param).then(result => {
          if (result.code == 0) {
          this.product_list = result.data;
          this.product_list.forEach(item => {
            item.imageUrl = this.baseUrl + item.imageUrl;
          });
        }
      });
    }
  },
  created(){
    this.getProductList(1)
  },
  components: {
    ProduceItem
  }
}
</script>

<style lang="less" scoped>
#tabbarItem {
  width: 100%;
}
</style>
