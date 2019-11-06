<template>
  <div>
     <h1 @click="back">&lt;</h1>
    <h2> {{list[id].title}}</h2>
    <span>{{list[id].con}}</span>
    <div>
      点赞数:{{list[id].num}}
      <button @click="addzan(id)">点赞</button>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapGetters,mapState} from 'vuex'
export default {
  data() {
    return {
       id:JSON.parse(this.$route.query.index)
    };
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['addzan']),
    back(){
      //返回到上一层
     this.$router.back()
    }
  },
  mounted() {
  }
};
</script>

<style>
</style>