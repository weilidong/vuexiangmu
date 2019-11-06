<template>
    <div class="listwrap">
          <div class="listtop">
               <span>aa</span>
               <span>收藏</span>
          </div>
          <div class="listimg">

          </div>
          <div class="listcon">

          </div>
          <div class="footlist">
           <span>99+</span>
           <span>99+</span>
          </div>
          {{list}}
    </div>
</template>

<script>
export default {
  props:['list']
}
</script>

<style scpoed lang='scss'>
.listwrap{
    width: 100%;
    .listtop{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content:space-between;
        span{
            width: 50px;
            height: 100%;
        }      
    }
    .listimg{
        width: 100%;
        height: 125px;
    }
    .listcon{
        width: 100%;
    }

    .footlist{
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: space-between;
    }
}

</style>