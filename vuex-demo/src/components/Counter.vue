<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)"> Increment </button> &nbsp;
    <button class="btn btn-primary" @click="decrement(50)"> Decrement </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 methods:
 {
   ...mapActions([
     'increment',
     'decrement'
   ])
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
// What mapActions does behind the scene is it will create methods in methods property of component 
// Like in our example
// methods:
//  {
//    ...mapActions([
//      'increment',
//      'decrement'
//    ])
//  }
//  'increment' is treated like
//  this.$store.dispach('increment') -> this will point to action named 'increment' in store.js file
// We can also pass argument to this actions/mutations like this.$store.dispatch('increment', val)