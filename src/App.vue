<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";

  export default {
    components: { 
      'navbar': Navbar 
    }
  }
</script>

<style>
#app {
  margin: 20px;
}
</style>