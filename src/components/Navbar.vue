<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link> 
    <router-link to="/sobre">Sobre</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
    <router-link to="/contato">Contato</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props:{
    logo:{
        type: String
    },
    alt:{
        type: String
    }
  }
});
</script>
<style scoped>
#nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#nav #logo-url{
    margin: auto;
    margin-left: 0;
}
#logo{
    width: 40px;
    height: 40px;
}
#logo:hover{
scale: 1.5;
}

#nav a{
    color:#FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}
#nav a:hover{
    color:#FFF;
}
</style>
