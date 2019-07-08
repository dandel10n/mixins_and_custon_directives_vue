<template>
  <div class="tooltip-demo">
    <h2 
      @click="toggleShow">
      <span
        v-if="isShowing">Click Me Again
      </span>
      <span
        v-else>Click Me
      </span>
    </h2>
    <BaseChild 
      v-if="isShowing"
      class="tooltip">
      <span class="hint">I'm a tooltip this time</span>
    </BaseChild>
  </div>
</template>

<script>
import BaseChild from "./BaseChild.vue";

export default {
  name: "Tooltip",
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: { BaseChild }
};
</script>

<style></style>
