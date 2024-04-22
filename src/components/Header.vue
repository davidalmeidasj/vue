<template>
  <img class="header-icon" alt="Vue logo" :src="require('@/assets/logo.png')">
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.header-icon {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  object-position: center center;
}
</style>