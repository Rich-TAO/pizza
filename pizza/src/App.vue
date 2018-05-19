<template>
  <div id="app">
    <app-header></app-header>
    <div class="comtainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    'appHeader':Header
  }
}
</script>

<style>
li a:hover{
  background: green;
}
</style>
