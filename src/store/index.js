import Vue from "vue";
import Vuex from "vuex";
import {
  getCodeApi,
  regPersonApi,
  getPersonApi,
  updatePersonApi,
  addAddressApi,
  UpdateAddressApi,
  getToAddressApi,
  getBannerImgApi,
  getHomePageListApi,
  getTypesListApi,
  getDetailApi,
  addShopcarApi,
  getShopcarApi,
} from "../utils/api";

const address = {
  namespaced: true,
  state: {
    addressList: [],
  },
  actions: {
    async addAddress(context, value) {
      const res = await addAddressApi(value);
      console.log(res);
      if (res.status === "0") {
        let temp = {};
        temp.name = value.getName;
        temp.tel = value.getPhone;
        temp.id = context.state.addressList.length;
        temp.address = value.address;
        context.commit("addAddress", temp);
      }
    },
    async UpdateAddress() {
      const res = await UpdateAddressApi();
      if (res.status === "0") {
        // this.list = res.result.list;
        console.log(res.result.list);
      }
    },
    async getToAddress(context, value) {
      const res = await getToAddressApi(value);
      if (res.status === "0") {
        // this.list = res.result.list;
        for (let i = 0; i < res.result.resArr.length; i++) {
          const ele = res.result.resArr[i];
          let temp = {};
          temp.name = ele.getName;
          temp.tel = ele.getPhone;
          temp.id = i + 1;
          temp.address = ele.address;
          context.commit("addAddress", temp);
        }
      }
    },
  },
  mutations: {
    addAddress(state, value) {
      state.addressList.push(value);
    },
  },
  getters: {},
};
const shopcar = {
  namespaced: true,
  state: {
    shopCarList: [],
  },
  actions: {
    async addShopcar(context, value) {
      console.log(value);
      const res = await addShopcarApi(value);
      console.log(res);
      if (res.status === "0") {
        // context.commit('addShopcar',value)
      }
    },
    async getShopcar(context, value) {
      console.log(value);
      const res = await getShopcarApi(value);
      console.log(res);
      if (res.status === "0") {
        context.commit("getShopcar", value);
      }
    },
  },
  mutations: {
    getShopcar(state, value) {
      state.shopCarList = value;
    },
  },
  getters: {},
};
const person = {
  namespaced: true,
  state: {
    // token: "",
    // phone: "",
    // nickName: "",
    // sex: "",
    // avatarImg: "",
    // token: "",
  },
  actions: {
    // token: "618a7309f13bd167b1472379"
    async getCode(context, value) {
      // const res = await getCodeApi(value);
      // console.log(value);
      // if (res.status === "0") {
      //   console.log("请等待接受验证码");
      // } else {
      //   console.log('操作有误，错误原因：',res.msg);
      // }
    },
    async regPerson(context, value) {
      const res = await regPersonApi(value);

      if (res.status === "0") {
        context.commit("regPerson", res.result);
      }
    },
    async getPerson(context, value) {
      const res = await getPersonApi(value);
      if (res.status === "0") {
        context.commit("getPerson", res.result);
      }
    },
    async updatePerson(context, value) {
      const res = await updatePersonApi(value);
      if (res.status === "0") {
        // this.list = res.result.list;
        console.log(res.result);
        // context.commit();
      }
    },
  },
  mutations: {
    regPerson(state, value) {
      for (const key in value) {
        state[key] = value[key];
      }
    },
    getPerson(state, value) {
      state.personinfo = value;
    },
  },
  getters: {},
};
const detail = {
  namespaced: true,
  state: {},
  actions: {},
  mutations: {},
  getters: {},
};
const home = {
  namespaced: true,
  state: {
    bannerList: [],
    homePageList: [],
    typesList: [],
    detail: {},
  },
  actions: {
    async getBanner(context, value) {
      const res = await getBannerImgApi(value);
      if (res.status === "0") {
        context.commit("getBanner", res.result.list);
      }
    },
    async getHomePageList(context, value) {
      const res = await getHomePageListApi(value);
      if (res.status === "0") {
        context.commit("getHomePageList", res.result.list);
      }
    },
    async getDetail(context, value) {
      const res = await getDetailApi(value);

      if (res.status === "0") {
        context.commit("getDetail", res.result);
      }
    },
    async getTypesList(context, value) {
      const res = await getTypesListApi(value);
      if (res.status === "0") {
        context.commit("getTypesList", res.result);
      }
    },
  },
  mutations: {
    getBanner(state, value) {
      state.bannerList = value;
    },
    getHomePageList(state, value) {
      state.homePageList = value;
    },
    getTypesList(state, value) {
      state.typesList = value;
    },
    getDetail(state, value) {
      state.detail = value;
    },
  },
  getters: {},
};

Vue.use(Vuex);
export default new Vuex.Store({
  modules: { detail, home, address, person, shopcar },
});
