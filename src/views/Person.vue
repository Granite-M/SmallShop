<template>
  <div class="person" v-if="$store.state.person.personinfo">
    <homeheader></homeheader>
    <div class="info">
      <p>
        <span>头像</span>
        <span>
          <van-image
            round
            width="1rem"
            height="1rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
        /></span>
      </p>
      <p>
        <span>账号</span>
        <span>{{ $store.state.person.personinfo.nickName }}</span>
      </p>
      <p>
        <span>姓名 </span>
        <span>{{ $store.state.person.personinfo.nickName }}</span>
      </p>
      <p>
        <span>手机</span>
        <span>{{ $store.state.person.phone || "未填写" }}</span>
      </p>
      <p>
        <span>邮箱</span>
        <span>{{ $store.state.person.personinfo.email || "未填写" }}</span>
      </p>
    </div>
    <div class="address">
      <p @click="toAddress"><span>地址管理</span> <span>&gt;</span></p>
    </div>
    <div class="others">
      <p><span>修改密码</span> <span>&gt;</span></p>
      <p><span>绑定其他账号</span> <span>&gt;</span></p>
    </div>
    <button @click="outLogin">退出当前账号</button>
  </div>
</template>

<script>
import homeheader from "../components/commen/Header.vue";

export default {
  components: { homeheader },

  async created() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      await this.$store.dispatch("person/getPerson", { token: this.token });
      this.$forceUpdate();
      if (this.$store.state.person.personinfo) {
        this.name = this.$store.state.person.personinfo.nickName;
        this.islogined = true;
      }
    } else {
      this.$router.push({
        path: "/login",
        query: {
          title: "登录",
        },
      });
    }
  },
  methods: {
    outLogin() {
      localStorage.removeItem("token");
    },
    toAddress() {
      this.$router.push({
        path: "/toaddress",
        query: {
          title: "我的收货地址",
          back: true,
        },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.person {
  background-color: #bbb;
  > div {
    margin: 10px 0;

    font-size: 15px;
    p {
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      padding: 0 15px;
      border-bottom: 1px solid #ccc;
      span:nth-of-type(2) {
        color: gray;
      }
    }
  }
  button {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    outline: none;
    border: none;
    font-size: 15px;
  }
}
</style>