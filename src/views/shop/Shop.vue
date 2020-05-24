<template>
  <div id="Shop">
    <shopSwipe :shopImages="shopImages" />
    <div class="shopName">
      <div class="shopTitle">{{this.shop.shopName}}</div>
      <div slot="tags" class="rate">
        <van-rate color="#FF0000" allow-half v-model="this.shop.shopRate" size="15px" readonly />
        <span class="score">{{this.shop.shopRate}}</span>
        <svg
          t="1578558444328"
          class="icon money"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5194"
          width="200"
          height="200"
        >
          <path
            d="M153.40946 453.939653l717.180056 0 0 48.933479-717.180056 0 0-48.933479Z"
            p-id="5195"
          />
          <path
            d="M153.40946 668.293649l717.180056 0 0 48.921199-717.180056 0 0-48.921199Z"
            p-id="5196"
          />
          <path
            d="M477.696218 528.783245l48.935526 0 0 430.204066-48.935526 0 0-430.204066Z"
            p-id="5197"
          />
          <path
            d="M491.945757 542.798447 177.550277 93.041046 217.658763 65.011666 532.05322 514.769067Z"
            p-id="5198"
          />
          <path
            d="M532.144294 542.655184 491.84138 514.912329 801.334199 65.154929 841.622788 92.897783Z"
            p-id="5199"
          />
        </svg>
        <span>{{this.shop.shopAvgPrice}}/人</span>
      </div>
    </div>
    <van-divider />
    <van-cell :title="this.shop.shopAddress" icon="location-o" size="large" is-link />
    <div class="product">特惠商品</div>
    <van-card  v-for="(item) in shopProductsList" :key="item.id"
      tag="特惠"
      :price="item.price"
      :desc="item.produceDesc"
      :title="item.productName"
      :thumb="item.imgUrl"
      :origin-price="item.originPrice"
    />
    <van-cell title="查看更多优惠商品" size="large" is-link />
    <div class="product">网友评价</div>

    <div class="commentDetail" v-for="(item) in comments" :key="item.id">
      <div class="userAvatar">
        <img class="avatar" v-lazy="item.userAvatarImg" alt />
      </div>
      <div class="userInfo">
        <div class="userName">{{item.userName}}</div>
        <div class="userComment">{{item.commentInfo}}</div>
      </div>
      <!-- <div id="flashFood">
        <div class="flashItemwrapper">
          <ul class="itemWrapper" ref="ulWrappers">
            <li class="itemInCovers" v-for="(image) in item.commentImages" :key="image.index">
              <img v-lazy="image" class="itemImage" />
            </li>
          </ul>
        </div>
      </div> -->
    </div>
    <van-tabbar :safe-area-inset-bottom="true" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="goComment()">评论</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 
<script>
// 引入页面组件
import shopSwipe from "./components/ShopSwipe";
// 引入第三方组件
import BScroll from "better-scroll";

export default {
  name: "Shop",
  data() {
    return {
      data: null,
      shopId: this.$route.params.shopId,
      shopImages: [],
      comments: null,
      commentImages: [],
      shopProductsList: [],
      shop: Object
    };
  },
  methods: {
    // 精选评论数据
    getShopDetail() {
      let param = {
        shopId: this.shopId
      };
      this.httpPost("/shop/detail", param).then(result => {
        if (result.code == 0) {
          this.shop = result.data.shop;
          this.comments = result.data.comments;
          this.shopProductsList = result.data.shopProductsList;
          this.comments.forEach(item => {
            item.commentImg1 = this.baseUrl + item.commentImg1;
            item.userAvatarImg = this.baseUrl + item.userAvatarImg;
            // this.commentImages.push(item.commentImg1);
          });
          this.shopProductsList.forEach(item => {
            item.imgUrl = this.baseUrl + item.imgUrl;
            // this.commentImages.push(item.commentImg1);
          });
          this.shopImages.push(this.baseUrl + result.data.shop.shopImage1);
        }
      });
      // console.log(this.data);
    },
    goComment(){
      this.$router.push({name:'ShopComment'})
    }
  },
  mounted() {
    // let that = this
    //console.log(this);
    this.$nextTick(() => {
      // console.log(this.$refs.ulWrappers);
      let contentWrapperWidth = 630;
      // let el = this.$refs.productItem;
      // console.log(this.$refs.productItem);
      // for (let i = 0; i < el.length; i++) {
      //   contentWrapperWidth += el[i].clientWidth;
      // }
      // 给ul设置值

      // this.$refs.ulWrappers.style.width = contentWrapperWidth + "px";
      // console.log(this.$refs.ulWrappers)
      // if (!this.scroll) {
      //   // 名字一定要唯一 和父组件独立
      //   this.scroll = new BScroll(".flashItemwrapper", {
      //     probeType: 2,
      //     startX: 0,
      //     click: true,
      //     scrollX: true,
      //     scrollY: false,
      //     eventPassthrough: "vertical"
      //   });
      // } else {
      //   this.scroll.refresh();
      // }
    });
  },
  created() {
    this.getShopDetail();
  },
  components: {
    shopSwipe
  }
};
</script>
 
<style scoped lang = "less">
.shopName {
  margin-top: 0.8rem;
  margin-left: 0.8rem;
}
.shopTitle {
  font-size: 1.8rem;
}
.shopDesc {
  margin-top: 0.8rem;
}
.rate {
  margin-top: 0.8rem;
}
.score {
  color: #ff0000;
  margin-left: 0.25rem;
}
.icon {
  width: 19px;
  height: 13px;
  margin-left: 0.8rem;
}
.product {
  margin-top: 0.9rem;
  padding-left: 0.4rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-left: 0.25rem solid #75a342;
  font-size: 0.6728;
  font-weight: 2000;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}

.commentDetail {
  height: 8rem;
  display: flex;
}
.userName {
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;
}
.userComment {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.avatar {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}

/* .flashItemwrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  .itemWrapper {
    display: flex;
    justify-content: flex-start;
  }

  .itemInCovers {
    // 设置子li的宽度
    flex: 0 0 6rem;
    align-items: center;
    padding-right: 0.5rem;
    .itemImage {
      width: 100%;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url("../../images/placeholderImg/product-img-load.png");
    }
  }
} */
</style>