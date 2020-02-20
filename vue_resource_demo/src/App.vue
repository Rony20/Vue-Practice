<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 xol-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input 
              type="text" 
              class="form-control" 
              v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input 
                type="text" 
                class="form-control" 
                v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <br><br>
        <input type="text" class="form-control" v-model="node">
        <br>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users" :key="u.username">{{ u.username }}-{{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        user:{
          username: '',
          email: ''
        },
        users: [],
        resoource: {},
        node: 'data'
    }
  },
  methods:{
    submit(){
      // this.$http.post('data.json',  this.user).then( response => {
      //   console.log(response)
      //   }, error => {
      //     console.log(error)
      //   })
      // this.resource.save({}, this.user)
      this.resource.saveAlt( this.user )
    },
    fetchData(){
      // this.$http.get('alternative.json')
      //     .then( response => {
      //       return response.json()
      //     })
      //     .then( json_data => {
      //       for(let key in json_data){
      //         this.users.push( json_data[key] )
      //       }
      //     })
      this.resource.getData( {node: this.node} )
        .then( response => {
            return response.json()
          })
          .then( json_data => {
            for(let key in json_data){
              this.users.push( json_data[key] )
            }
          })
    }
  },
  created(){
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
}
</script>

<style>

</style>
