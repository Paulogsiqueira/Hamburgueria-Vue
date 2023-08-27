<template>
  <footer id="footer">
    <p>Make Your Burguer &copy; 2023</p>
  </footer>
  
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
<style scoped>

#footer{
  height: 150px;
  background-color:#222;
  border-top:4px solid #111;
  color:#FCBA03;
  display:flex;
  align-items:center;
  justify-content: center;
  bottom: 0px;
  width: 100%;
  position: relative;

}
</style>
