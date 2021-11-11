<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="wap-home-o"
        :to="{
          path: '/home/homepage',
          query: {
            index: 0,
            title: '首页',
          },
        }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        icon="apps-o"
        :to="{
          path: '/home/collection',
          query: {
            index: 1,
            title: '精选',
          },
        }"
        >精选</van-tabbar-item
      >
      <van-tabbar-item
        icon="label-o"
        :to="{
          path: '/home/types',
          query: {
            index: 2,
            title: '分类',
          },
        }"
      >
        分类</van-tabbar-item
      >
      <van-tabbar-item
        icon="cart-o"
        :to="{
          path: '/home/shopcar',
          query: {
            index: 3,
            title: '购物车',
          },
        }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item
        icon="user-circle-o"
        :to="{
          path: '/home/mine',
          query: {
            index: 4,
            title: '会员中心',
          },
        }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang='less' scoped>
.van-tabbar-item--active {
  color: orange !important;
}
</style>