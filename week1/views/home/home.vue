<template>
  <div class="homewrap">
    <div class="homenav">
      <router-link to="look">关注</router-link>
      <router-link to="tuijian">推荐</router-link>
      <router-link to="hot">热门</router-link>
    </div>
    <div class="homemian">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.homewrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.homemian {
  width: 100%;
  height: 100%;
}
.homenav {
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #000;
  .router-link-active {
    color: red;
  }
  a {
    flex: 1;
  }
}
</style>