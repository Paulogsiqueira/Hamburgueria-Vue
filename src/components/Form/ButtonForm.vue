<template>
    <input class="buttonForm" type="submit" :value="texto" @click="enviarMensagem">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "buttonForm",
    props:{
        texto:{
            type: String,
        },
    },
    emits:['clicouBotao'],
  methods:{
    enviarMensagem(){
      this.$emit('clicouBotao');
    }
  }
})
</script>
<style scoped>
.buttonForm{
    width: 45%;
    color:#fcba03;
    font-size: 18px;
    font-weight: bold;
    padding: 0 15px;
    background-color:#000000;
    border:2px solid black;
    height: 35px;
    border-radius: 20px;
    margin:0 auto;
}

.buttonForm:hover{
    scale: 1.15;
    color:#000000;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
}

</style>
