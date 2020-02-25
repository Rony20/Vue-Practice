<template>
  <div>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">Axios Authentication</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <router-link to='/' tag="li" active-class="active" exact><a>Home</a></router-link>
          <router-link to='/signup' tag="li" active-class="active"><a>Sign Up</a></router-link>
          <router-link to='/signin' tag="li" active-class="active"><a>Sign In</a></router-link>
          <router-link to='/dashboard' tag="li" active-class="active"><a>Deshboard</a></router-link>
        </ul>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>