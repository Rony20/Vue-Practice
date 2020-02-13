<template>
  <div>
    <button class="btn btn-primary" @click="increment"> Increment </button> &nbsp;
    <button class="btn btn-primary" @click="decrement"> Decrement </button>
  </div>
</template>

<script>
export default {
 methods:
 {
   increment()
   {
     this.$store.state.counter++
   },
   decrement()
   {
     this.$store.state.counter--
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
