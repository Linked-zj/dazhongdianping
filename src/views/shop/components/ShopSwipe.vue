<template>
   <swiper id="swiper"
          :options="swiperOption"
          ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(sowing) in sowing_list"
                  :key="sowing.id">
      <img :src="sowing.imgUrl"
           :alt="sowing.name">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script type="text/javascript">
// 引入 swiper.css
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      //    images: [
      //   'https://img.yzcdn.cn/vant/apple-1.jpg',
      //   'https://img.yzcdn.cn/vant/apple-2.jpg'
      // ],
      sowing_list: [
        {
          id: 1,
          name: "哈哈",
          imgUrl:  require("@/images/shop/zhuque.png"),
        },
        {
          id: 2,
          name: "哈哈刚刚",
          imgUrl: require("@/images/shop/gaolaojiu.png"),
        }
      ],
      swiperOption: {
        // 进来就加载
        notNextTick: true,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        //配置自动播放
        autoplay: {
          delay: 3000,
          // 最后一个是否停止
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        // 配置速度
        speed: 900,
        // 滑动后回调函数
        on: {
          slideChangeTransitionEnd() {}
          //   preventLinksPropagation: false
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    // 拿到swiper对象
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped>
#swiper {
  /* padding-top: 6rem; */
  width: 95%;
  height: 10rem;
  border-radius: 1rem;
}
#swiper img {
  width: 100%;
  height: 100%;
}
/*
穿透修改样式
*/
#swiper >>> .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper >>> .swiper-pagination-bullet {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0;
}
</style>
