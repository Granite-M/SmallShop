<template>
  <div class="mine">
    <homeheader></homeheader>
    <div class="top" @click="toLogin">
      <div class="left" @click="toPersonInfo">
        <van-image
          round
          width="2rem"
          height="2rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="right">
        <h2>
          {{ name }}
          <p v-if="islogined">普通会员</p>
        </h2>
      </div>
    </div>
    <div class="center">
      <h3>我的订单<span>&gt;</span></h3>
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="bottom">
      <van-grid square>
        <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
    <div v-if="islogined">
      <van-grid square>
        <van-grid-item @click="outLogin" icon="photo-o" text="退出登录" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import homeheader from "../commen/Header";
export default {
  name: "Mine",
  data() {
    return {
      name: "立即登录",
      islogined: false,
      token: "",
    };
  },
  beforeDestroy() {
    console.log("mine被销毁了");
  },
  async created() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      await this.$store.dispatch("person/getPerson", { token: this.token });
      if (this.$store.state.person.personinfo) {
        this.name = this.$store.state.person.personinfo.nickName;
        this.islogined = true;
      }
    }
  },
  components: { homeheader },
  methods: {
    toPersonInfo() {
      if (this.islogined) {
        this.$router.push({
          path: "/person",
          query: {
            title: "会员资料",
            back: true,
          },
        });
      }
    },
    toLogin() {
      if (!this.islogined) {
        this.$router.push({
          path: "/login",
          query: {
            title: "登录",
          },
        });
      }
    },
    outLogin() {
      this.name = "立即登录";
      this.islogined = false;
      localStorage.removeItem("token");
    },
  },
};
</script>

<style lang='less' scpoed>
.mine {
  background-color: #eee;
  > .top {
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orange;
    color: white;
    > .left {
      margin: 0 20px;
    }
    > .right {
      flex: 1;
      font-size: 18px;
      p {
        font-size: 12px;
      }
    }
  }
  > .center {
    margin: 30px 0;
    background-color: #fff;

    h3 > {
      padding-left: 20px;
      padding-top: 10px;
      position: relative;
      > span {
        position: absolute;
        right: 30px;
        color: #bbb;
      }
    }
  }
  // > .bottom {
  // }
}
</style>