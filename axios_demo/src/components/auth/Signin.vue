<template>
   <div class="main-form">
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label for="pass">Password</label>
        <input type="password" id="pass" class="form-control" v-model="password">
      </div>
      <button class="btn btn-primary" @click.prevent="onSignIn">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
      onSignIn(){
        const formData = {
          email: this.email,
          password: this.password
        }
        console.log(formData)
        this.$store.dispatch('login', formData)
        this.resetForm()
      },
      resetForm(){
        this.email = this.password = ''
      }
    }
}
</script>

<style scoped>
.main-form{
  width: 400px;
  margin: auto;
  padding: 30px;
  box-shadow: 3px 5px 3px 2px grey;
}
</style>