<template>
  <input
    class="inputForm"
    type="text"
    :placeholder="texto"
    v-model="valor"
    @input="valorDigitado"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputForm",
  props: {
    texto: {
      type: String,
    },
  },
  data() {
    return {
      valor: "" as String,
    };
  },

  emits: ["valorPreenchido"],
  methods: {
    valorDigitado() {
      this.$emit("valorPreenchido", this.valor);
    },
    clearValue() {
      this.valor = "";
    },
    formatValue() {
      if (this.valor) {
        const regex = /^([0-9]{2})([0-9]{5})([0-9]{4})$/;
        const str = this.valor.replace(/[^0-9]/g, "").slice(0, 11);

        const resultado = str.replace(regex, "($1) $2-$3");

        this.valor = resultado;
      }
    },
  },
});
</script>
<style scoped>
.inputForm {
  width: 100%;
  height: 30px;
  background-color: rgb(247, 252, 224);
  border-radius: 10px;
  border: 1.5px solid black;
  padding-left: 8px;
  margin: 10px 0 30px 0;
  color: black;
}
</style>
