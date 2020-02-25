<template>
  <div class="main-form">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label for="pass">Password</label>
        <input type="password" id="pass" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label for="age">Age</label>
      <input type="text" id="age" class="form-control" v-model="age">
      </div>
      <button class="btn btn-primary" @click.prevent="onSignUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      email: '',
      password: '',
      age: null
    }
  },
  methods:{
    onSignUp(){
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        age: this.age
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
      this.resetForm()
    },
    resetForm(){
      this.name = this.email = this.password = this.age = ''
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