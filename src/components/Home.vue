<template>
  <div class="container">
    <Card
        :profile-img-url="Avatar"
        profile-name="David Almeida"
        profile-address="Foz do Iguaçu - Centro - Brazil"
        profile-occupation="Dev Front-end"
        profile-number="(21) 9 99115-8960"
        profile-email="davidasj21@gmail.com"
    />
  </div>
</template>

<script>
import Card from "./Card";
import Avatar from '../assets/avatar.png';
export default {
  name: 'HomeComponent',
  components: {
    Card
  },
  data() {
    return {
      Avatar
    };
  },
}
</script>

<style lang="scss" src="./home.scss"></style>
