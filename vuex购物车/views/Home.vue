<template>
  <div>
      <div v-for="(item,index) in list" :key='index'>
        
           <h2><input type="checkbox" v-model='item.flag'>{{item.name}}</h2>
           <p>{{item.price}}</p>
           <button @click="add(index)">+</button>
                {{item.num}}
           <button @click="del(index)">-</button>
      </div>
      <p><input type="checkbox" @click="changeAll" :checked="checkAll"/>总价:{{priceReduce}}</p>
  </div>
</template>

<script>

import {mapMutations,mapState,mapActions,mapGetters} from 'vuex'
export default {
  created(){
     this.getlist()
  },
  computed: {
     ...mapGetters(['priceReduce']),
     ...mapState(['list','count','checkAll'])
  },
  methods: {
    ...mapMutations(['add','del','changeAll']),
    ...mapActions(['getlist']),
  },
};
</script>

<style scoped>
</style>