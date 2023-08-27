<template>
  <div class="contato">
    <h2>Contato</h2>
    <FormularioContato @modal="mostrarModal" @nome="guardarNome"/>
    <img class="contato-img" src="/img/hamb-img.png" />
    <div v-show="modal" class="contato-modal-show">
      <h3>Obrigado pela mensagem!</h3>
      <p>{{ nome }}, assim que possível analisaremos sua mensagem. Caso julguemos necessário entraremos em contato através do e-mail informado!</p>
      <div class="contato-modal-button">
        <button class="contato-modal-button-icone" @click="fecharModal">Fechar</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioContato from "@/components/FormContact.vue";

export default defineComponent({
  name: "Contato",
  components: { FormularioContato },
  data(){
    return{
      modal: false as boolean,
      nome: '' as String,
    }
  },
  methods:{
    guardarNome(nome:String){
      this.nome = nome;
    },
    mostrarModal(){
      this.modal = true;
      
    },
    fecharModal(){
      this.modal = false;
    }
  }
});
</script>
<style scoped>
.contato {
  background-image: url("/public/img/fundo-cinza-claro.png");
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.contato h2 {
  text-align: center;
  font-size: 52px;
  color: #fcba03;
  font-family: "Dancing Script", cursive;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  padding-top: 40px;
}

.contato-img {
  border-radius: 60%;
  position: absolute;
  top: 300px;
  width: 28%;
}

.contato-modal-show{
  width: 50%;
  height: 35%;
  border:3px solid black;
  position:absolute;
  left:25%;
  top:30%;
  background-color:#fbfbfb;
  border-radius: 20px;
  color:black;
  padding: 20px;
  display: inline;
  display: flex;
  flex-direction: column;
}

.contato-modal-show h3{
  margin-bottom: 10px;
  font-size:28px;
}
.contato-modal-show p{
  font-weight: 500;
  margin-top:20px;
  font-size:18px

}

.contato-modal-button{
  display: flex;
  margin-top:60px;
  width: 100%;
  padding-left:30%;
}

.contato-modal-button-icone{
  width: 55%;
    color:#000000;
    font-size: 18px;
    font-weight: bold;
    background-color:#fcba03;
    border:2px solid black;
    height: 35px;
    border-radius: 20px;
    
    
}  

@media screen and (max-width: 768px){
.contato-img{
  display: none;
}
}

</style>
