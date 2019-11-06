<template>
  <div class="mywrap">
    <div class="mytop">
      <div class="mytopL">
        <div class="touxiang"><img :src='require("@/assets/avator/"+uselist.avator)'></div>
      </div>
      <div class="mytopR">
        <h2>{{uselist.nick}}</h2>
        <div>年龄：{{uselist.age}}</div>
      </div>
    </div>
    <ul class="mymid">
      <li>个人信息</li>
      <li>我的评论</li>
      <li>个人收藏</li>
    </ul>
    <ul class="mybot">
      <li>修改密码</li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["uselist"])
  }
};
</script>

<style scpoed lang='scss'>
.mywrap {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  .mytop {
    display: flex;
    width: 100%;
    height: 135px;
    background-color: rgb(247, 105, 104);
    .mytopL {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      .touxiang {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: #fff;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;

        }
      }
    }
    .mytopR {
      display: flex;
      flex-direction: column;
      flex: 7;
      justify-content: center;
      align-items: center;
      h2 {
        width: 100%;
      }
      div {
        width: 100%;
      }
    }
  }
}
.mymid {
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 30px;
  line-height: 50px;
}
.mybot {
  width: 100%;
  height: 100px;
  margin-top: 30px;
  background: #fff;
  line-height: 50px;
}
</style>