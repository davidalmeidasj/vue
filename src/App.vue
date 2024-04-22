<template>
  <HeaderComponent />
  <Home msg="Vue components"/>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/Header.vue';
import Home from './components/Home.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    Home,
    FooterComponent
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #2c3e50;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Poppins", sans-serif;
}
</style>
