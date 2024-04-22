<template>
  <div class="scroller" data-duration="fast" ref="scroller">
    <div class="scroller__inner-wrapper" ref="wrapper">
      <ul class="img-list scroller__inner">
        <li>
          <img :src="require('@/assets/company-logo-4.png')" alt="Company Logo 4" />
        </li>
        <li>
          <img :src="require('@/assets/company-logo-5.png')" alt="Company Logo 5" />
        </li>
        <li>
          <img :src="require('@/assets/company-logo-6.png')" alt="Company Logo 6" />
        </li>
        <li>
          <img :src="require('@/assets/css-3.svg')" alt="Company Logo 8" />
        </li>
        <li>
          <img :src="require('@/assets/sass-1.svg')" alt="Company Logo 9" />
        </li>
        <li>
          <img :src="require('@/assets/vercel.svg')" alt="Company Logo 10" />
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FooterComponent',

  mounted() {
    this.addAnimation();
  },

  methods: {
    addAnimation() {
      const scroller = this.$refs.scroller;
      if (!scroller) return;

      scroller.setAttribute("data-animated", true);

      const scrollerInner = this.$refs.wrapper.querySelector('.scroller__inner');
      const duplicatedItem = scrollerInner.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.parentNode.appendChild(duplicatedItem);
    }
  }
}
</script>


<style lang="scss" src="./footer.scss"></style>