<template>
  <div>
    <p :class=classe>{{msg}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageOrder",
  props: {
    msg: String,
    classe: String
  },

});
</script>
<style scoped>
.message-container {
  color: #004085;
  background-color: #cce5ff;
  border: 2px solid #b8daff;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 0px auto 40px auto;
}

.message-container-erro {
  color: #850000;
  background-color: #ffcccc;
  border: 2px solid #ffb8b8;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 0px auto 40px auto;
}
</style>