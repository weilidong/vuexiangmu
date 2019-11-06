<template>
  <div>
    <ul v-for="(item,index) in list" :key="index"  >
      <li @click="fn(index)">{{item.name}}
             <treeMenus v-if='item.children' :list='item.children' v-show="item.bool"></treeMenus>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'treeMenus',  
  data(){
    return {
        active:false,
        show:false
    }
  },
  props: ["list"],
  methods: {
      fn(i){
         this.list[i].bool=!this.list[i].bool
   
      },
      fn1(){
          this.show=!this.show
      }
  },
  
};
</script>

<style>
</style>