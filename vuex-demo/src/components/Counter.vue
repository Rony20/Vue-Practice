<template>
  <div>
    <button class="btn btn-primary" @click="increment"> Increment </button> &nbsp;
    <button class="btn btn-primary" @click="decrement"> Decrement </button>
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
