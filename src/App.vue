<template>
  <div class="app">
    <keep-alive>
    <router-view></router-view>
    
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
.app{
  user-select: none;
}
</style>