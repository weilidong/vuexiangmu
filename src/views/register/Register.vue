<template>
   <div class="registerwrap">
    <Header />
    <div class="registermain">
      <input type="text"  placeholder="用户名"/>
      <input type="text" placeholder="密码" />
    </div>
    <div class="register">
        注册
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
 components:{
   Header
 }
}
</script>

<style scpoed lang='scss'>
.loginwrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.registerheader {
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  text-align: center;
  line-height: 50px;
}
.registermain {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  input {
    margin-top: 30px;
    width: 80%;
    height: 50px;
    background: #f8f8f8;
    border: 0;
    outline: none;
  }
}
.register {
  width: 80%;
  height: 45px;
  background-color: rgb(247, 105, 104);
  margin-left: 10%;
  text-align: center;
  line-height: 45px;
  color: #fff;
}
</style>