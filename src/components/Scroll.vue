<template>
  <div class="container">
    <h1>Scroll me</h1>
    <div class="box" ref="scrollingEl">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque amet
        harum aut ab veritatis earum porro praesentium ut corporis. Quasi
        provident dolorem officia iure fugiat, eius mollitia sequi quisquam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  methods: {
    handleScroll: function(evt) {
      let el = this.$refs["scrollingEl"];
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 100;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.box {
  border: 1px solid black;
  padding: 8px 20px;
  line-height: 1.3em;
  opacity: 0;
  color: black;
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.1);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.container {
  height: 2000px;
}
</style>
