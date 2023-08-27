<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu burguer</h1>
    <BurguerForm />
  </div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import BurguerForm from "@/components/BurguerForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { Banner, BurguerForm },
});
</script>

<style scoped>
h1 {
  margin: 10px auto 50px auto;
  padding: 0px 10px;
  display: inline-block;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
