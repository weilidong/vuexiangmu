<template>
  <div>
      账号:<input type="text" ref="use">
      密码:<input type="text">
      <button @click="addUse">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
      addUse(){
          localStorage.setItem('loken',this.$refs.use.value)
          this.$router.push('/home')
      }
  },
}
</script>

<style>

</style>