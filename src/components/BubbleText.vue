<template>
  <div class="bubble-text text">{{ msg }}</div>
</template>

<script>
export default {
  name: "BubbleText",
  props: {
    msg: String
  },
  mounted() {
    this.splitTextIntoSpans('.bubble-text');
  },
  methods: {
    splitTextIntoSpans(target) {
      let elements = document.querySelectorAll(target);
      elements.forEach((element) => {
        element.classList.add('split-text');
        let text = element.innerText;
        element.innerHTML = text
            .split(" ")
            .map(function (word) {
              let char = word.split('').map(char => `<span class="split-char">${char}</span>`).join('');
              return `<div class="split-word">${char}&nbsp;</div>`;
            }).join('');
      });
    }
  }
}
</script>

<style lang="scss" src="./bubble-text.scss"></style>
