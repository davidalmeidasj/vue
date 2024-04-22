<template>
  <div ref="tilt" class="card">
    <div class="card-top">
      <div class="card-top__profile-img">
        <img :src="profileImgUrl" alt="" />
      </div>
      <div class="card-top__profile-content">
        <span class="profile-name">
          <BubbleText :msg="profileName" />
        </span>
        <h4 class="profile-occupation">
          {{ profileOccupation }}
        </h4>
        <div class="profile-info">
          <div class="profile-address">
            <font-awesome-icon icon="location-dot" />
            <span>
              {{ profileAddress }}
            </span>
          </div>
          <div class="profile-number">
            <font-awesome-icon icon="phone" />
            <span>
              {{ profileNumber }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-bottom">
      <div class="divider"></div>
      <p class="profile-email">{{ profileEmail }}</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VanillaTilt from 'vanilla-tilt';
import BubbleText from "./BubbleText";

export default {
  name: "UserCardTilt",
  components: {
    BubbleText,
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    profileImgUrl: String,
    profileName: String,
    profileAddress: String,
    profileOccupation: String,
    profileNumber: String,
    profileEmail: String
  },
  mounted() {
    VanillaTilt.init(this.$refs.tilt, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
  },
  beforeUnmount() {
    if (this.$refs.tilt.vanillaTilt) {
      this.$refs.tilt.vanillaTilt.destroy();
    }
  }
}
</script>

<style lang="scss" src="./card.scss"></style>
