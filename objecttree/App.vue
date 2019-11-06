<template>
  <div id="app">
     <Meau :list='list' />
  </div>
</template>

<script>
import Meau from './components/meau'
export default {
  data() {
    return {
      list: [
        {
          name: "一级1",
          bool:false,
          children: [
            {
              name: "二级1-1",
              bool:false,
              children: [
                {
                  name: "三级1-1-1"
                },
                  {
                  name: "三级1-1-2"
                }
              ]
            }
          ]
        },
        {
          name: "一级2",
           bool:false,
          children: [
            {
              name: "二级2-1",
               bool:false,
              children: [
                {
                  name: "二级2-1-1"
                },
                  {
                  name: "二级2-1-2"
                }
              ]
            }
          ]
        },
        {
          name: "一级3",
           bool:false,
          children: [
            {
              name: "二级3-1"
            }
          ]
        },
        {
          name: "一级4",
           bool:false,
          children: [
            {
              name: "二级4-1"
            }
          ]
        }
      ]
    };
  },
  components: {
    Meau
  }
};
</script>

<style lang="scss">
</style>
