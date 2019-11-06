<template>
   <div class="homewrap">
     
       <div class="homemain">
           <router-view></router-view>
       </div>
       <div class="homefooter">
           <router-link to='/home/circle'>圈子</router-link>
           <router-link to='/home/my'>我的</router-link>
       </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scpoed lang='scss'>
.homewrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.homemain{
    flex:1;
    overflow: auto;
}
.homefooter{
    width: 100%;
    height: 50px;
    font-size: 16px;
    display: flex;
     a{
         flex:1;
         color:#000;
         text-align: center;
         line-height: 50px;
     }
}

</style>