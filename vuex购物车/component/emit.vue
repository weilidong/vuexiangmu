<template>
    <div>
      {{state}}<button @click="changebtn">change</button>
    </div>
</template>

<script>
export default {
     props:['state'],
     methods: {
         changebtn(){
             this.$emit('state','魔鬼筋肉人张恒')
         }
     },
}
</script>

<style>

</style>