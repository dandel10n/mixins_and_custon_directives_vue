<template>
  <div class="modal-demo">
    <h2>Modal</h2>
    <button 
      @click="toggleShow">
      <span
        v-if="isShowing">Hide child
      </span>
      <span
        v-else>Show child
      </span>
    </button>
    <BaseChild 
      v-if="isShowing" class="modal">
      <button 
        @click="toggleShow">Close
      </button>
    </BaseChild>
  </div>
</template>

<script>
import BaseChild from "./BaseChild.vue";

export default {
  name: "Modal",
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
