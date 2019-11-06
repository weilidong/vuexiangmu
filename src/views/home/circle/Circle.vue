<template>
  <div class="circlewrap">
    <div class="circletop">
      <input type="text" />
    </div>
    <div class="circlemain">
      <List v-for="(item,index) in listdata" :key='index' :list='item'/>
    </div>

  </div>
</template>

<script>
import List from "@/components/List.vue";
import {mapActions,mapState} from 'vuex'
export default {
  components: {
    List
  },
  created() {
    this.getlist()
  },
  computed: {
    ...mapState(['listdata'])

  },
  methods: {
     ...mapActions(['getlist'])
  },
};
</script>

<style scpoed lang='scss'>
.circlewrap {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
.circletop {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 80%;
    height: 70%;
    background: #eeeeee;
    border-radius: 10px;
    border: 0;
    outline: none;
  }
}
.circlemain{
    flex:1;
    overflow: auto;
}
</style>