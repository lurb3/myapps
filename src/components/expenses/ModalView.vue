<template>
  <div class="modal">
    <div class="modal-content">
      <h3>custom header</h3>
    </div>
  </div>
</template>

<script scoped lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalView",
  data() {
    return {};
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
