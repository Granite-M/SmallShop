import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";



import App from "./App.vue";
import "amfe-flexible";
import "./assets/css/reset.less";



import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


//多次通过push跳转同一页面报错 解决方案
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
//多次通过replace跳转同一页面报错 解决方案
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
  render: (h) => h(App),
}).$mount("#app");
