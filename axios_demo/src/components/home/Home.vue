<template>
  <div id="home">
    <h2> This is Home page We can start from Here !</h2>
    <h6>Use 'Sign Up' and 'Sign In' page to navigate</h6>
    <div class="myButtons">
      <router-link to="/signin"><button class="btn btn-info">Sign In</button></router-link>
      <router-link to="/signup"><button class="btn btn-info">Sign Up</button></router-link>
    </div>
  </div>
</template>

<script>

export default {
  
  }
</script>

<style scoped>

  .myButtons{
    display: inline;
  }
  button{
    margin: 10px;
  }
  #home{
    text-align: center;
  }

</style>