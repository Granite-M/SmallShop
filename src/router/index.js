import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home"),
    redirect: "/home/homepage",

    children: [
      {
        path: "/home/homepage",
        query: true,
        component: () => import("../components/Home/HomePage"),
      },
      {
        path: "/home/collection",
        query: true,
        component: () => import("../components/Home/Collection"),
      },
      {
        path: "/home/mine",
        query: true,
        component: () => import("../components/Home/Mine"),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/home/types",
        query: true,
        component: () => import("../components/Home/Types"),
      },
      {
        path: "/home/shopcar",
        query: true,
        component: () => import("../components/Home/ShopCar"),
      },
    ],
  },
  {
    path: "/addaddress",
    component: () => import("../views/AddAddress"),
  },
  {
    path: "/details",
    component: () => import("../views/Details"),
  },
  {
    path: "/login",

    component: () => import("../views/Login"),
  },
  {
    path: "/person",

    component: () => import("../views/Person"),
  },
  {
    path: "/toaddress",

    component: () => import("../views/ToAddress"),
  },
  {
    path: "*",
    component: () => import("../views/NotFount"),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
