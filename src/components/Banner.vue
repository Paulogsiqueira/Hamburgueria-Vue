<template>
  <div id="main-banner">
    <h1>Make Your Burguer</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",

});
</script>
<style scoped>
#main-banner {
  background-image: url("/public/img/burguer3.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner h1 {
  position: relative;
  top:0px;
  font-size: 60px;
  background-color: transparent;
  padding: 20px 40px;
  font-family: "Dancing Script", cursive;
  font-size: 55px;
  color: #fcba03;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

@media screen and (max-width:1023px) {
  #main-banner h1 {
    font-size:30px
  }
  #main-banner {
    height: 300px;
  }
  
}

@media screen and (max-width:767px) {
  #main-banner h1 {
    font-size:24px
  }
  #main-banner {
    height: 150px;
  }
  
}
</style>
