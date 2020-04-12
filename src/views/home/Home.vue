<template>
  <div id="home">
    <div class="head">
      <Header></Header>
      <Sowing :sowing_list="sowing_list" />
      <Tip :home_ad="home_ad" />
    </div>

    <Nav :nav_list="nav_list"></Nav>
    <FlashBuy :flash_sale_product_list="flash_sale_product_list" />
    <TabbarGoodsItem />

    <li>
      <ul>1</ul>
      <ul>2</ul>
      <ul>3</ul>
      <ul>4</ul>
      <ul>5</ul>
      <ul>6</ul>
      <ul>7</ul>
      <ul>8</ul>
      <ul>9</ul>
    </li>
  </div>
</template>
 
<script>
// 引入页面组件
import Header from "./components/header/Header";
import Sowing from "./components/sowing/Sowing";
import Tip from "./components/tip/Tip";
import Nav from "./components/nav/Nav";
import FlashBuy from "./components/flash/FlashBuy";
import TabbarGoodsItem from "./components/tabbar/TabbarGoodsItem";

// 引入请求方法
import { getswipedata } from "../../utils/home";

export default {
  name: "Home",
  data() {
    return {
      //轮播图数据
      sowing_list: [],
      home_ad: "http://518taole.7-orange.cn/homead2.gif",
      nav_list: [
        {
          icon_url: require("@/images/nav/meishi.png"),
          name: "美食",
          categoryId: 1
        },
        {
          icon_url: require("@/images/nav/meituan.png"),
          name: "美团外卖",
          categoryId: 2
        },
        {
          icon_url: require("@/images/nav/xiuxian.png"),
          name: "休闲娱乐",
          categoryId: 3
        },
        {
          icon_url: require("@/images/nav/jiudian.png"),
          name: "酒店",
          categoryId: 4
        },
        {
          icon_url: require("@/images/nav/dianying.png"),
          name: "电影/演出",
          categoryId: 5
        },
        {
          icon_url: require("@/images/nav/liren.png"),
          name: "丽人",
          categoryId: 6
        },
        {
          icon_url: require("@/images/nav/jianshen.png"),
          name: "运动健身",
          categoryId: 7
        },
        {
          icon_url: require("@/images/nav/jingdian.png"),
          name: "景点/门票",
          categoryId: 8
        },
        {
          icon_url: require("@/images/nav/ktv.png"),
          name: "KTV",
          categoryId: 9
        },
        {
          icon_url: require("@/images/nav/peixun.png"),
          name: "培训教育",
          categoryId: 10
        }
      ],
      flash_sale_product_list: [],
      shop_list: []
    };
  },
  methods: {
    // 轮播图数据
    getswipedata() {
      this.httpPost("/swipe/data", null).then(result => {
        if (result.code == 0) {
          this.sowing_list = result.data;
          this.sowing_list.forEach(item => {
            item.imgUrl = this.baseUrl + item.imgUrl;
          });
        }
      });
    },

    // 限时抢购数据
    getflashdata() {
      this.httpPost("/flash/data", null).then(result => {
        if (result.code == 0) {
          this.flash_sale_product_list = result.data;
        }
      });
    }
    // 商店数据
    // getShopList() {
    //   this.httpPost("/shop/list", null).then(result => {
    //     if (result.code == 0) {
    //       this.shop_list = result.data;
    //       this.shop_list.forEach(item => {
    //         item.shopImage1 = this.baseUrl + item.shopImage1;
    //       });
    //     }
    //   });
    // }
  },
  created() {
    this.getswipedata();
    this.getflashdata();
    // this.getShopList();
  },
  components: {
    Header,
    Sowing,
    Tip,
    Nav,
    FlashBuy,
    TabbarGoodsItem
  }
};
</script>
 
<style scoped lang = "less">
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
  .head {
    margin-top: -3rem;
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
}
</style>