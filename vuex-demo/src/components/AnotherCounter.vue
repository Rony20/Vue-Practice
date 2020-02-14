<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement( { val: 80, duration: 1000 } )"> Increment </button> &nbsp;
    <button class="btn btn-primary" @click="asyncDecrement( { val: 40, duration: 1000 } )"> Decrement </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 methods:
 {
   ...mapActions([
     'asyncIncrement',
     'asyncDecrement'
   ])
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
