<template>
  <div class="homepage">
    <homeheader></homeheader>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index"
          ><img :src="bannerList[index]" alt=""
        /></van-swipe-item>
      </van-swipe>
      <van-search
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="tab">
      <van-grid>
        <van-grid-item icon="photo-o" text="每日福利" />
        <van-grid-item icon="photo-o" text="热销榜" />
        <van-grid-item icon="photo-o" text="精选" />
        <van-grid-item icon="photo-o" text="会员中心" />
      </van-grid>
    </div>
    <div class="center">
      <div v-for="item in 4" :key="item">
        <h2>手机精选</h2>
        <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" alt="" />
      </div>
    </div>
    <div class="bottom">
      <van-card
        v-for="(item, index) in homePageList"
        :key="index"
        @click="todetail(item.productId)"
        :price="item.currentPrice"
        :title="item.productName"
        :thumb="item.imgUrl"
        :origin-price="item.originalPrice"
      />
    </div>
  </div>
</template>

<script>
import homeheader from "../commen/Header";
export default {
  data() {
    return {
      value: "",
      bannerList: [],
      homePageList: [],
    };
  },
  created() {
    this.$store.dispatch("home/getBanner");
    this.$store.dispatch("home/getHomePageList");
    setTimeout(() => {
      this.bannerList = this.$store.state.home.bannerList;
      this.homePageList = this.$store.state.home.homePageList;
      console.log(this.$store.state.home.homePageList);
    }, 300);
  },
  components: { homeheader },
  props: ["title"],
  mounted() {},

  methods: {
    todetail(id) {
      this.$store.dispatch("home/getDetail", { productId: id });
      this.$router.push({
        path: "/details",
        query: {
          title: "商品详情",
          back: true,
          productId: id,
        },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.homepage {
  height: 620px;
  overflow: auto;
  .banner {
    position: relative;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.center {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  > div {
    width: 45%;
    height: 80px;
    margin: 20px 0;
    background-color: white;
    > h2 {
      float: left;
      height: 50%;
      font-size: 18px;
    }
    > img {
      width: 45%;
    }
  }
}
.van-swipe-item {
  img {
    width: 100%;
    display: block;
    height: 130px;
  }
  margin-bottom: 20px;
}
.van-search {
  position: absolute;
  width: 100%;
  top: 10px;
  background-color: rgba(194, 162, 162, 0) !important;
  opacity: 0.8;
}
</style>