<template>
  <div class="main-container">
    <h1>Gerenciar pedidos</h1>
    <Dashboard/>
  </div>
</template>
<script lang="ts">
import Dashboard from '@/components/Dashboard.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "PedidosBurguer",
    components: { Dashboard }
})
</script>

<style scoped>
.main-container{
  min-height: 60vh;
}

</style>
