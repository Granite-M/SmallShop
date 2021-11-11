<template>
  <div class="details" v-if="detail.currentPrice">
    <homeheader></homeheader>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in detail.imgArr" :key="index"
          ><img :src="item" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="main">
      <div class="part1">
        <div class="nowprice">
          <p>
            ￥<span>{{ detail.currentPrice }}</span>
          </p>
          <span>会员专享</span>
        </div>
        <div class="oldprice">普通价￥{{ detail.originalPrice }}.00</div>
        <div class="title">{{ detail.title }}</div>
        <div class="productName">{{ detail.productName }}</div>
      </div>
      <div class="part2">
        <div @click="show = !show" class="types">
          <span>选择</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>可选规格</span>
        </div>
        <div class="">商品评论 （0）</div>
        <div class="">推荐商品</div>
      </div>
    </div>
    <div class="bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button
          @click="addShopcar(detail.productId)"
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div id="shop">
        <div class="img"><img :src="detail.imgArr[0]" alt="" /></div>
        <div class="right">
          <p>
            ￥ <span>{{ detail.currentPrice }}</span> <em>会员专享</em>
          </p>
          <p>普通价{{ detail.originalPrice }}</p>
        </div>
      </div>
      <div id="type">
        <h2>{{ detail.standards.title }}</h2>
        <span
          :class="{ active: typeactive == index }"
          v-for="(item, index) in detail.standards.standards"
          :key="index"
          @click="changetypeactive(index)"
          >{{ item }}</span
        >
      </div>
      <div class="num">
        购买数量 <span><van-stepper v-model="value" /> </span>
      </div>
    </van-popup>
  </div>
</template>

<script>
import homeheader from "../components/commen/Header.vue";
import { mapActions } from "vuex";
export default {
  components: { homeheader },
  data() {
    return {
      detail: {},
      show: false,
      value: 1,
      typeactive: 0,
    };
  },
  methods: {
    ...mapActions("home", ["getDetail"]),
    addShopcar(id) {
      this.$store.dispatch("shopcar/addShopcar", {
        token: localStorage.getItem("token"),
        productId: id,
        count: this.value,
        standard: this.detail.standards.standards[this.typeactive],
      });
    },
    async changetypeactive(val) {
      this.typeactive = val;
      await this.$store.dispatch("shopcar/getShopcar", {
        token: localStorage.getItem("token"),
      });
    },
  },
  watch: {
    "$route.path"() {
      this.$destroy();
    },
  },

  async created() {
    await this.getDetail({ productId: this.$route.query.productId });
    this.detail = this.$store.state.home.detail;
  },

  activated() {},
};
</script>
<style lang='less' scpoed>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
  img {
    display: block;
    margin: 0 auto;
  }
}

.main {
  .part1 {
    font-size: 16px;
    margin-top: 10px;
    > div {
      line-height: 30px;
      height: 40px;
      padding: 5px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      font-size: 14px;
      background-color: #fff;
      border-bottom: solid 1px #eee;
      > p {
        font-size: 12px;
        color: orange;
        span {
          font-size: 18px;
          font-weight: 800;
        }
      }
      > span {
        background-color: orange;
        color: white;
        border-radius: 20px;
        font-size: 12px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        position: relative;
        top: 10px;
        left: 10px;
      }
    }
  }
  .part2 {
    font-size: 14px;

    > div {
      padding: 5px;
      margin-top: 15px;
      background-color: #fff;
      height: 40px;
      line-height: 30px;
    }
  }
}
.num {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 15px;
  font-size: 18px;
}
#shop {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;

  .right {
    color: orange;
    flex: 1;
    align-self: center;
    p {
      margin: 5px 0;
      font-size: 14px;
      span {
        font-size: 20px;
      }
      em {
        font-style: normal;
        font-size: 12px;
        color: white;
        background-color: orange;
        display: inline-block;
        height: 18px;
        line-height: 18px;
        padding: 0 2px;
        border-radius: 7px;
      }
    }
    p:nth-of-type(2) {
      color: grey;
    }
  }
  .img {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
#type {
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 18px;
    margin-left: 15px;
  }
  span {
    border: 2px solid #999;
    color: #999;
    display: inline-block;
    border-radius: 8px;
    font-size: 16px;
    height: 25px;
    padding: 0 3px;
    line-height: 20px;
    margin-left: 15px;
  }
  .active {
    color: red !important;
  }
}
</style>