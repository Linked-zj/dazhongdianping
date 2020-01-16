<template>
  <div class="DropMenu">
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item :title="areaTitle" ref="areaItem">
        <van-tree-select
          :items="area"
          :active-id.sync="activeAreaId"
          :main-active-index.sync="activeAreaIndex"
          @click-item="selectArea"
        />
      </van-dropdown-item>

       <van-dropdown-item :title="categoryTitle" ref="categoryItem">
        <van-tree-select
          :items="category"
          :active-id.sync="activeCategoryId"
          :main-active-index.sync="activeCategoryIndex"
          @click-item="selectCategory"
        />
      </van-dropdown-item>

      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>

<script type="text/javascript">
import { Toast } from "vant";

export default {
  data() {
    return {
      areaTitle: "附近",
      area: [
        //附近
        {
          text: "附近",
          //className: "my-class",
          children: [
            {
              text: "附近(智能范围)",
              id: 1
            },
            {
              text: "500米",
              id: 2
            },
            {
              text: "1000米",
              id: 3
            },
            {
              text: "2000米",
              id: 4
            },
            {
              text: "3000米",
              id: 5
            }
          ]
        },
        // 热门商区
        {
          text: "热门商区",
          className: "my-clas1s",
          children: [
            {
              text: "全部商区",
              id: 1
            },
            {
              text: "静安寺",
              id: 2
            },
            {
              text: "陆家嘴",
              id: 3
            },
            {
              text: "南京西路",
              id: 4
            },
            {
              text: "五角场",
              id: 5
            },
            {
              text: "新天地",
              id: 6
            },
            {
              text: "徐家汇",
              id: 7
            },
            {
              text: "人民广场",
              id: 8
            },
            {
              text: "中山公园",
              id: 9
            }
          ]
        }
        //
      ],
      activeAreaId: 1,
      activeAreaIndex: 0,
      //---------
      categoryTitle: "全部分类",
      category: [
        // 全部分类
        {
          text: "全部分类",
          children: [
            {
              text: "全部分类",
              id: 1
            },
            {
              text: "美食",
              id: 2
            },
            {
              text: "电影赛事演出",
              id: 3
            },
            {
              text: "运动健身",
              id: 4
            },
            {
              text: "休闲娱乐",
              id: 5
            },
            {
              text: "酒店",
              id: 6
            },
            {
              text: "丽人",
              id: 7
            },
            {
              text: "培训教育",
              id: 8
            }
          ]
        },
        {
          text:"美食",
          children:[
            {
              text:"火锅",
              id:1
            }, {
              text:"西餐",
              id:2
            }, {
              text:"自助餐",
              id:3
            }, {
              text:"咖啡厅",
              id:4
            }, {
              text:"韩国料理",
              id:5
            }, {
              text:"川菜",
              id:6
            },
          ]
        }
      ],
      activeCategoryId: 1,
      activeCategoryIndex: 0,
      //----------
      //value2: 0,
      value3: 0,
      // option2: [
      //   { text: "全部分类", value: 0 },
      //   { text: "美食", value: 1 },
      //   { text: "外卖", value: 2 },
      //   { text: "休闲娱乐", value: 3 }
      // ],
      option3: [
        { text: "智能排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "销量排序", value: 2 },
        { text: "高价优先", value: 3 },
        { text: "低价排序", value: 4 }
      ]
    };
  },

  methods: {
    selectArea(data) {
      this.areaTitle = data.text;
      this.$refs.areaItem.toggle();
    },
    selectCategory(data) {
      this.categoryTitle = data.text;
      this.$refs.categoryItem.toggle();
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
</style>