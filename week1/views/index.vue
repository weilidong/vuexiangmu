<template>
  <div class="indexwrap">
    <div class="indexmain">
      <router-view></router-view>
    </div>
    <div class="indexfooter">
      <router-link to="/index/home">首页</router-link>
      <router-link to="/index/ider">想法</router-link>
      <router-link to="/index/school">大学</router-link>
      <router-link to="/index/msg">消息</router-link>
      <router-link to="/index/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.indexwrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.indexmain {
  flex: 1;
  overflow: hidden;
}
.indexfooter {
  width: 100%;
  height: 50px;
  border-top: 1px solid #000;
  line-height: 50px;
  text-align: center;
  display: flex;
  .router-link-active{
      color: red;
  }
  a{
      flex:1;
  }
}
</style>