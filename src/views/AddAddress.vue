<template>
  <div class="addaddress">
    <homeheader></homeheader>

    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import homeheader from "../components/commen/Header.vue";
import { areaList } from "@vant/area-data";
export default {
  components: { homeheader },
  data() {
    return {
      areaList,
      newAddress: {},
    };
  },
  methods: {
    async onSave(context) {
      this.newAddress.token = localStorage.getItem("token");
      this.newAddress.getName = context.name;
      this.newAddress.getPhone = context.tel;
      this.newAddress.status = context.isDefault ? 1 : 2;
      this.newAddress.address =
        context.province + context.city + context.county;

      await this.$store.dispatch("address/addAddress", this.newAddress);
      this.$router.push({
        path: "/toaddress",
        query: {
          title: "我的收货地址",
          back: true,
        },
      });
    },
    onDelete() {
      // this.$store.dispatch('address/getToAddress', {token:localStorage.getItem('token')} )
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

<style>
</style>