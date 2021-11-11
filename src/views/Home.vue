<template>
  <div class="home">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <keep-alive v-if="!$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <homefooter></homefooter>
  </div>
</template>

<script>
import homefooter from "../components/commen/Footer.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: { homefooter },

  methods: {},
};
</script>

<style>
.home {
  background-color: #eee;
}
</style>