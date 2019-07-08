<template>
  <div class="main"><modal></modal> <tooltip></tooltip></div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Tooltip from "../components/Tooltip.vue";

export default {
  name: "MixinsPage",
  components: { modal: Modal, tooltip: Tooltip }
};
</script>
