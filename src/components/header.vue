<template>
    <div class='loginheader'>
        <span @click="$router.back()" v-if='$route.meta.flag'>&lt;</span>{{$route.meta.title}}
    </div>
</template>

<script>
export default {

}
</script>

<style scpoed lang='scss'>
.loginheader {
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  text-align: center;
  line-height: 50px;
  span{
    text-align: left;
  }
}
</style>