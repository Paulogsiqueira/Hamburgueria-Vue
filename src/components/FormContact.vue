<template>
  <form class="formContato">
    <labelForm texto="E-mail" />
    <inputForm
      ref="inputEmail"
      texto="Digite seu e-mail"
      @valorPreenchido="emailDigitado"
      @blur="validateEmail"
    />
    <p v-show="validEmail" class="form-aviso-campo">
      O e-mail informado é inválido
    </p>
    <labelForm texto="Nome" />
    <inputForm
      ref="inputNome"
      texto="Digite seu nome"
      @valorPreenchido="nomeDigitado"
      v-model="nome"
    />
    <labelForm texto="Sobrenome" />
    <inputForm
      ref="inputSobrenome"
      texto="Digite seu sobrenome"
      @valorPreenchido="sobrenomeDigitado"
    />
    <labelForm texto="Celular" />
    <inputForm
      ref="inputCelular"
      texto="(XX) XXXXX-XXXX"
      @valorPreenchido="celularDigitado"
      @blur="formatarNumero"
    />
    <p v-show="validCelular" class="form-aviso-campo">
      O celular informado é inválido
    </p>
    <labelForm texto="Motivo do contato" />
    <inputForm
      ref="inputMotivo"
      texto="Digite o motivo do contato"
      @valorPreenchido="motivoDigitado"
    />
    <labelForm texto="Mensagem" />
    <text-area-form />
    <p v-show="aviso" class="form-aviso">
      Todos os campos devem ser obrigatoriamente preenchidos
    </p>
    <buttonForm texto="Enviar" @click="pararEvento($event)" />
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import InputForm from "./Form/InputForm.vue";
import LabelForm from "./Form/LabelForm.vue";
import TextAreaForm from "./Form/TextAreaForm.vue";
import ButtonForm from "./Form/ButtonForm.vue";
//@clicouBotao="enviarMensagem"
export default defineComponent({
  name: "FormContato",
  components: { InputForm, LabelForm, TextAreaForm, ButtonForm },
  emits: ["modal", "nome"],
  data() {
    return {
      msg: "show" as String,
      nome: "" as String,
      sobrenome: "" as String,
      email: "" as String,
      motivo: "" as String,
      aviso: false as boolean,
      validEmail: false as boolean,
      celular: "" as String,
      validCelular: false as boolean
    };
  },
  methods: {
    enviarMensagem() {
      this.$emit("modal", this.nome);
      console.log(this.nome);
    },
    nomeDigitado(nome: String) {
      this.$emit("nome", nome);
      this.nome = nome;
    },
    emailDigitado(email: String) {
      this.email = email;
    },
    sobrenomeDigitado(sobrenome: String) {
      this.sobrenome = sobrenome;
    },
    celularDigitado(celular: String) {
      this.celular = celular;
    },
    motivoDigitado(motivo: String) {
      this.motivo = motivo;
    },
    pararEvento(evento: Event) {
      evento.preventDefault();
      if (
        this.nome != "" &&
        this.sobrenome != "" &&
        this.motivo != "" &&
        this.email != "" &&
        this.celular != "" &&
        this.validEmail != true
      ) {
        this.enviarMensagem();
        this.limparCampos();
        this.aviso = false;
        (this.$refs.inputEmail as { clearValue: () => void }).clearValue();
        (this.$refs.inputNome as { clearValue: () => void }).clearValue();
        (this.$refs.inputSobrenome as { clearValue: () => void }).clearValue();
        (this.$refs.inputMotivo as { clearValue: () => void }).clearValue();
        (this.$refs.inputCelular as { clearValue: () => void }).clearValue();
      } else {
        this.aviso = true;
      }
    },
    formatarNumero() {
      const regex = /^[1-9]{2}9[0-9]{8}$/;
      const valido = regex.test(this.celular.toString());
      if(valido){
        this.validCelular = false;
        (this.$refs.inputCelular as { formatValue: () => void }).formatValue();
      }else{
        this.validCelular = true;
      }
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.validEmail = emailRegex.test(this.email.toString());
      this.validEmail = !this.validEmail;
    },
    limparCampos() {
      this.nome = "";
      this.sobrenome = "";
      this.email = "";
      this.motivo = "";
      setTimeout(() => {
        console.log(this.nome);
      }, 1000);
    },
  },
});
</script>
<style scoped>
.formContato {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0);
  width: 40%;
  margin: 60px auto;
  border-radius: 15px;
  padding: 20px 30px 20px 30px;
  background-color: rgba(84, 84, 84, 0.438);
}
.form-aviso {
  font-size: 14px;
  color: rgb(181, 11, 11);
  font-weight: 600;
  margin-bottom: 20px;
}

.form-aviso-campo {
  font-size: 14px;
  color: rgb(181, 11, 11);
  font-weight: 600;
  margin-top: -25px;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .formContato {
    width: 70%;
  }
}
</style>
