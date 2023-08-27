<template>
    <label class="labelForm">{{ texto }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LabelForm",
    props:{
        texto:{
            type: String,
        },
    }
})
</script>
<style scoped>
.labelForm{
    color:#000000;
    font-size: 18px;
    font-weight: bold;
    padding: 0 15px;
}

</style>
