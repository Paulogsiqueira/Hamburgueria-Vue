<template>
  <div>
    <Message :msg="msg" :classe="tipoMsg" v-show="msg" />
    <form id="burguer-form" @submit="createBurguer">
      <div class="input-container">
        <label for="nome">Nome do Cliente</label>
        <input
          type="text"
          id="nome"
          name="name"
          v-model="nome"
          placeholder="Digite o seu nome"
        />
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
            {{ pao.tipo }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burguer:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="" selected>Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
            {{ carne.tipo }}
          </option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais"
          >Selecione os opcionais:</label
        >
        <div
          class="checkbox-container"
          v-for="opcional in opcionaisdata"
          :key="opcional.id"
        >
          <input
            :value="opcional.tipo"
            type="checkbox"
            name="opcionais"
            v-model="opcionais"
          />
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input type="submit" class="submit-btn" value="Criar meu Burguer" />
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Message from "./Message.vue";
import IProduto from "../interface/IProduto";

export default defineComponent({
  name: "BurguerForm",
  components: {
    Message,
  },
  data() {
    return {
      paes: [] as IProduto[],
      carnes: [] as IProduto[],
      opcionaisdata: [] as IProduto[],
      nome: "" as String,
      pao: {} as IProduto | "",
      carne: {} as IProduto | "",
      opcionais: [] as IProduto[],
      msg: "" as String | undefined,
      tipo: "",
      tipoMsg:"" as String
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;

      this.nome = "";
      this.carne = "";
      this.pao = "";
    },
    validaFormulario() {
      console.log(this.carne);
      if (
        this.nome != "" &&
        this.pao.toString() != "" &&
        this.carne.toString() != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    async createBurguer(e: Event) {
      e.preventDefault();

      if (this.validaFormulario()) {
        const data = {
          nome: this.nome,
          carne: this.carne,
          pao: this.pao,
          opcionais: Array.from(this.opcionais),
          status: "Solicitado",
        };

        const dataJson = JSON.stringify(data);

        const req = await fetch("http://localhost:3000/burguers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJson,
        });

        const res = await req.json();
        this.nome = "";
        this.carne = "";
        this.pao = "";
        this.opcionais = [];

        this.msg = `Pedido Nº ${res.id} realizado com sucesso!`;
        this.tipoMsg = 'message-container'

        setTimeout(() => {
          this.msg = "";
        }, 3000);
      } else {
        this.msg = "Favor preencher todos os campos";
        this.tipoMsg = 'message-container-erro'

        setTimeout(() => {
          this.msg = "";
        }, 3000);
      }
    },
  },
  mounted() {
    this.getIngredients();
  },
});
</script>
<style scoped>
#burguer-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 20px auto;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 15px;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}

#carne, #pao, #nome{
  border-radius: 10px;
}
</style>
