<template>
  <div class="header">
    <h3>
      <span v-if="$route.query.back" @click="back">&lt; </span>
      {{ $route.query.title || "首页" }}
    </h3>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;

  h3 {
    height: 40px;
    line-height: 40px;
    text-align: center;

    font-size: 18px;
    span {
      float: left;
      margin-left: 15px;
    }
  }
}
</style>