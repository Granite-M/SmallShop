<template>
  <div class="toaddress">
    <homeheader></homeheader>

    <div class="addressList">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @edit="onEdit"
      />
    </div>
    <button @click="addAddress"><van-icon name="plus" /> 添加收货地址</button>
  </div>
</template>

<script>
import homeheader from "../components/commen/Header.vue";
export default {
  components: { homeheader },
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      temp: {},
    };
  },
  async created() {
    await this.$store.dispatch("address/getToAddress", {
      token: localStorage.getItem("token"),
    });

    this.list = this.$store.state.address.addressList;
  },
  methods: {
    addAddress() {
      this.$router.push({
        path: "/addaddress",
        query: {
          title: "新增收货地址",
          back: true,
        },
      });
    },
    onEdit(item, index) {
      console.log(item, index);
    },
  },
};
</script>

<style lang='less' scoped>
.toaddress {
  button {
    width: 100%;
    height: 50px;
    background-color: white;
    color: orange;
    text-align: center;
    font-size: 18px;
    border: none;
    outline: none;
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
}
</style>