<template>
  <div id="burger-table" v-if="pedidos">
    <Message :msg="msg" :classe="tipoMsg" v-show="msg" />
    <div>
      <div id="burger-table-heading">
        <div class="order-id">Nº</div>
        <div>Cliente</div>
        <div class="order-info">Pão</div>
        <div class="order-info">Carne</div>
        <div class="order-info-small">Pão/Carne</div>
        <div class="order-info-small">Opcionais</div>
        <div>Ações</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="pedido in pedidos" :key="pedido.id">
        <div class="order-number">{{ pedido.id }}</div>
        <div>{{ pedido.nome }}</div>
        <div class="order-info">{{ pedido.pao }}</div>
        <div class="order-info">{{ pedido.carne }}</div>
        <div class="order-info-small">
          <ul>
            <li>{{ pedido.pao }}</li>
            <li>{{ pedido.carne }}</li>
          </ul>
        </div>
        <div>
          <ul v-for="(opcional, index) in pedido.opcionais" :key="index">
            <li>{{ opcional }}</li>
          </ul>
        </div>
        <div>
          <select
            name="status"
            class="status"
            @change="updatePedido($event, pedido.id)"
          >
            <option
              :value="s.tipo"
              v-for="s in status"
              :key="s.id"
              :selected="pedido.status == s.tipo"
            >
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deletePedido(pedido.id)">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IPedido from "@/interface/IPedido";
import IProduto from "@/interface/IProduto";
import Message from "./Message.vue";

export default defineComponent({
  name: "Dashboard",
  components: { Message },
  data() {
    return {
      pedidos: [] as IPedido[],
      pedido: {} as IPedido,
      status: [] as IProduto[],
      msg: "" as String,
      tipoMsg:"message-container" as String
    };
  },

  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/burguers");
      const data = await req.json();

      this.pedidos = data;

      console.log(this.pedidos);

      this.getStatus();
    },
    async deletePedido(num: number) {
      const req = await fetch(`http://localhost:3000/burguers/${num}`, {
        method: "DELETE",
      });
      const res = await req.json();

      this.msg = `Pedido removido com sucesso!`;

      setTimeout(() => {
        this.msg = "";
      }, 3000);

      this.getPedidos();
    },
    async updatePedido(evento: Event, num: number) {
      const option: any = evento.target;
      const valor: String = option.value;

      const dataJson = JSON.stringify({
        status: valor,
      });
      console.log(valor);

      const req = await fetch(`http://localhost:3000/burguers/${num}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      })
        
      const res = await req.json();

      this.msg = `Pedido Nº ${res.id} foi atualizado para ${res.status}!`;

      setTimeout(() => {
        this.msg = "";
      }, 3000);

      
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");
      const data = await req.json();

      this.status = data;
    },
  },
  mounted() {
    this.getPedidos();
  },
});
</script>
<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
.order-info-small{
  display: none;
}

@media screen and (max-width:580px) {
  .order-info{
    display: none;
  }
  .order-info-small{
  display: inline;
  margin-right: 30px;
}

}
</style>