<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view />
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default defineComponent({
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src:"/img/logo.png" ,
      app_name:"Make Your Burguer",
    }
  }
})
</script>

<style>
*{
  font-family: helvetica;
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.main-container{
  margin: 50px;
  min-height: 250px;
}
h1{
  text-align: center;
  font-size:42px;
  margin-bottom:30px;
  color:#222;
}

@media screen and (max-width:580px) {
.main-container{
  margin:10px
}
}

</style>
