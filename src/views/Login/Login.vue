<template>
  <div class="loginwrap">
      <Header />
    <div class="loginmain">
    
      <input type="text" v-model="usename" placeholder="用户名" />
      <span :class="['iconfont',flag ? 'icon-yanjing' :'icon-yanjing_bi']" @click="changeEyes"></span>
      <input :type="inptype" v-model="usepwd" placeholder="密码" />
    </div>
    <div class="login" @click="login">登录</div>
    <router-link class="registerbtn" to="/register">没有账号，快注册</router-link>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  data() {
    return {
      inptype: "password",
      flag: false,
      usename: "",
      usepwd: ""
    };
  },
  methods: {
    changeEyes() {
      this.flag = !this.flag;
      if (this.flag) {
        this.inptype = "text";
      } else {
        this.inptype = "password";
      }
    },
    login() {
      console.log(this.$route);
      if (!this.usename.trim() && !this.usepwd.trim()) {
        alert("不能为空");
        return;
      } else {
        this.$axios
          .post("/usemsg", {
            usename: this.usename,
            usepwd: this.usepwd
          })
          .then(res => {
            if(res.data.code===1){
               this.$router.push('/home/circle')             
                this.$store.commit('adduselist', res.data.currentobj)
            }
          });
      }
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang='scss'>
.loginwrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.loginmain {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    margin-top: 30px;
    width: 80%;
    height: 50px;
    background: #f8f8f8;
    border: 0;
    outline: none;
  }
  span {
    position: absolute;
    bottom: 30%;
    right: 11%;
  }
}
.login {
  width: 80%;
  height: 45px;
  background-color: rgb(247, 105, 104);
  margin-left: 10%;
  text-align: center;
  line-height: 45px;
  color: #fff;
}
.registerbtn {
  color: #000;
  margin-left: 10%;
  margin-top: 10%;
}
</style>