<template>
  <div class="collection">
    <homeheader></homeheader>
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <div class="main">
      <div class="list">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in 10" :key="item" title="精品奶粉" />
        </van-sidebar>
      </div>
      <div class="shopshow">
        <div
          v-for="item in list"
          @click="todetail(item.productId)"
          :key="item.productId"
        >
          <div>
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeheader from "../commen/Header";
export default {
  components: { homeheader },
  data() {
    return {
      activeKey: 0,
      value: "",
      list: [],
    };
  },
  async created() {
    await this.$store.dispatch("home/getTypesList", { type: 1 });
    this.$nextTick(() => {
      this.list = this.$store.state.home.typesList;
    });
  },
  watch: {
    activeKey(val) {
      this.$store.dispatch("home/getTypesList", { type: (val % 3) + 1 });
      this.list = this.$store.state.home.typesList;
    },
  },
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
.collection {
  .main {
    display: flex;
    .list {
      width: 80px;
    }
    .shopshow {
      font-size: 16px;
      flex: 1;
      background-color: lightcyan;
      display: flex;

      align-content: flex-start;
      flex-wrap: wrap;
      > div {
        > div {
          text-align: center;
        }
        width: 33%;
        height: 100px;
        img {
          width: 80px;
          height: 80px;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>

