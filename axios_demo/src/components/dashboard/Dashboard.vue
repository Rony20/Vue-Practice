<template>
  <div id="dashboard">
    <h1>This is Dashboard !</h1>
    <p>You only get here if you are authenticated!</p>
    <p>Email is : {{ email }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: ''
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
#dashboard{
  text-align: center;
}
p{
  color: red
}
</style>
