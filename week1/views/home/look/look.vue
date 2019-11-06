<template>
  <div class="lookwrap">
    <div class="list" v-for="(item,index) in list" :key="index" @click="detail(index,item)">
      <h2>{{item.title}}</h2>
      <p>{{item.con}}</p>
      <span>点赞{{item.num}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  created() {
    if (this.list.length <= 0) {//不重新获取vuex里的数据
      this.getlist();
    }
  },
  computed: {
    ...mapState(["list"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["getlist"]),
    detail(index, item) {
      this.$router.push({
        path: "/detail",
        query: {
          index: JSON.stringify(index),
          item: JSON.stringify(item)
        }
      });
    }
  }
};
</script>
    
<style scoped>
.lookwrap {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.list {
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #000;
}
</style>