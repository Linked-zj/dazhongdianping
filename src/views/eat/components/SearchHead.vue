<template>
  <div class="searchWrapper">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入商店名称"
        shape="round"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="comment">精选评论</div>
  </div>
</template>

<script type="text/javascript">
import { Toast } from "vant";

export default {
  data() {
    return {
      value:null
    };
  },
  components: {},
  methods: {
    // 到搜索界面
    onSearch() {
      Toast({
        message: "我的工程师爸爸正在开发~",
        duration: 800
      });
    },
    onCancel() {
      Toast({
        message: "我的工程师爸爸正在开发~",
        duration: 800
      });
    }
  }
};
</script>

<style lang="less" scoped>

  .comment {
    margin-top: 0.9rem;
    padding-left: 0.4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-left: 0.25rem solid #75a342;
    font-size: 0.6728;
    font-weight: 2000;
  }
</style>
