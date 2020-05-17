<template>
  <div class="container-water-fall">
    <waterfall :col="col" :data="data">
      <div class="cell-item" v-for="(item) in data" :key="item.id">
        <img v-lazy="item.commentImg1" />
        <div class="item-body">
          <div class="item-desc">{{item.commentInfo}}</div>
          <div class="item-footer">
            <img class="avatar" v-lazy="item.userAvatarImg" alt />
            <div class="name">{{item.userName}}</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { Toast } from "vant";

export default {
  data() {
    return {
      data: [],
      col: 2,
      menulistDetail: [],
      page: 1
    };
  },
  computed: {},
  mounted() {
    // this._initData();
  },
  methods: {
    // 精选评论数据
    getCommentSelected() {
      this.httpPost("/comment/select", null).then(result => {
        if (result.code == 0) {
          this.data = result.data;
          this.data.forEach(item => {
            item.commentImg1 = this.baseUrl + item.commentImg1;
            item.userAvatarImg = this.baseUrl + item.userAvatarImg;
          });
        }
      });
    }

    // // 1.数据请求
    // async _initData () {
    //   // 第一条数据
    //   let ref = await getTodayMenuDetail('/lk01');
    //   if (ref.success) {
    //     this.menulistDetail = ref.data.big_recommend.list;
    //     this.data = ref.data.big_recommend.list;
    //   }
    // },
    // loadmore (num) {
    //   let index = ++this.page;
    //   let param;
    //   if (index > 31) {
    //     Toast({
    //       message: $t('eat.tip_bottom'),
    //       duration: 800
    //     });
    //     return;
    //   } else {
    //     param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
    //   }
    //   getTodayMenuDetail(param).then(response => {
    //     if (response.success) {
    //       let newArray = response.data.big_recommend.list;
    //       this.data = this.data.concat(newArray);
    //     }
    //   });
    // }
  },
  created() {
    this.getCommentSelected();
  }
};
</script>
<style lang="less" scoped>
.container-water-fall {
  width: 100vw;
  box-sizing: border-box;
  background-color: #f5f5f5f5;
  .vue-waterfall {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 2rem;
  }
  h4 {
    padding-top: 56px;
    padding-bottom: 1rem;
    font-family: PingFangSC-Medium;
    font-size: 2rem;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  .cell-item {
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: 0.3rem;
    img {
      border-radius: 12px;
      width: 100%;
      display: block;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url("../../../images/placeholderImg/product-img-load.png");
    }
    .item-body {
      padding: 0.6rem;
      .item-desc {
        font-size: 0.8 rem;
        color: #333333;
        line-height: 1rem;
        font-weight: bold;
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .item-footer {
        margin-top: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #999999;
        }
      }
    }
  }
}
</style>
