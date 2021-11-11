<template>
  <div class="login">
    <homeheader title="注册"></homeheader>
    <div>
      <input v-model="tel" type="tel" placeholder="请输入手机号" />
      <button :disabled="disabled" @click="getCode">{{ msg }}</button>
    </div>
    <div>
      <input type="text" placeholder="请输入手机验证码" v-model="code" />
    </div>
    <div><button @click="reg">登录</button></div>
  </div>
</template>

<script>
import homeheader from "../components/commen/Header.vue";
export default {
  components: { homeheader },
  data() {
    return {
      tel: "18967610877",
      code: "",
      disabled: false,
      msg: "发送验证码",
      // "token": "618a7309f13bd167b1472379"
    };
  },
  methods: {
    reg() {
      this.$store.dispatch("person/regPerson", {
        phone: this.tel,
        code: this.code,
      });
      this.timer = setInterval(() => {
        localStorage.setItem("token", this.$store.state.person.token);
        if (localStorage.getItem("token")) {
          clearInterval(this.timer);
          this.$router.replace({
            path: "/",
            query: {
              title: "首页",
            },
          });
        }
      }, 500);
    },
    getCode() {
      //   this.$store.dispatch("person/getCode", {
      //   phone: this.tel,
      //   templateId: '537707',
      // });
      this.code = "5519";
    },
  },
};
</script>

<style lang='less' scoped>
.login {
  padding: 30px;
  text-align: center;
  background-color: #aaa;
  input::placeholder {
    font-size: 16px;
    font-family: "楷体";
  }
  input,
  button {
    width: 100%;
    outline: none;
    border: none;
    margin: 10px 0;
    height: 40px;
  }
  button {
    font-size: 15px;
  }
  > div:nth-of-type(2) {
    display: flex;

    // background-color: green;
    > input {
      width: 75%;
    }
    > button {
      width: 25%;
    }
  }
}
</style>