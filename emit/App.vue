<template>
  <div id="#app">
    <input type="text" v-model="input" @keydown="addfn($event)" placeholder="请输入内容" />
    <p>
      总任务：{{list.length}},已完成{{count}}
      <input type="checkbox" ref="input1" @click="input1" />未完成
      <input type="checkbox" ref="input2" @click="input2" />完成
    </p>
    <ul>
      <li v-for="(v,i) in newlist" :key="i">
        {{i}}.{{v.title}}
        <button @click="del(i)">删除</button>
        <button v-if="!v.bool" type="success" :ref="i" @click="fn(i)">未完成</button>
        <button v-if="v.bool" :style="{background:'red'}">完成</button>
      </li>
    </ul>
        <Emit :state='state' @state='stateChange'/>
  </div>
</template>

<script>
import Emit from "./component/emit";
export default {
  data() {
    return {
      list: [
        {
          num: 0,
          title: "向往的生活",
          bool: false
        },
        {
          num: 1,
          title: "奔跑吧",
          bool: false
        },
        {
          num: 2,
          title: "快乐家族",
          bool: false
        },
        {
          num: 3,
          title: "极限挑战",
          bool: false
        }
      ],
      input: "",
      count: 0,
      newlist: [],
      state:'下雨了'
    };
  },
  mounted() {
    this.newlist = this.list;
  },
  methods: {
    stateChange(e){
             this.state=e
    },
    fn(i) {
      this.list[i].bool = true;
      let arr = this.list.filter(v => v.bool);
      this.count = arr.length;
    },
    del(i) {
      this.list.splice(i, 1);
      let arr = this.list.filter(v => v.bool);
      this.count = arr.length;
    },
    input1() {
      if (this.$refs.input1.checked) {
        let arr = this.list.filter(v => !v.bool);
        this.newlist = arr;
      } else {
        this.newlist = this.list;
      }
    },
    input2() {
      if (this.$refs.input2.checked) {
        let arr = this.list.filter(v => v.bool);
        this.newlist = arr;
      } else {
        this.newlist = this.list;
      }
    },
    addfn(e) {
      let obj = {
        num: this.list.length,
        title: this.input,
        bool: false
      };
      if (e.keyCode === 13) {
        this.list.push(obj);
      }
    }
  },
  components: {
    Emit
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>