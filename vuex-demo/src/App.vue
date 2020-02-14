<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>VueX</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-Counter></app-Counter>
        <hr>
        <app-another-counter></app-another-counter>
      </div>
    </div>    
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
import AnotherResult from './components/AnotherResult.vue'
import AnotherCounter from './components/AnotherCounter.vue'

export default {
  name: 'App',
  components:{
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
