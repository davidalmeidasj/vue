<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="My components"/>
</template>

<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
