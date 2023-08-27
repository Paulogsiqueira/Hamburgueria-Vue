<template>
    <textarea class="textAreaForm"></textarea>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TextAreaForm",
    props:{
        texto:{
            type: String,
        },
    }
})
</script>
<style scoped>
.textAreaForm{
    width:100%;
    height: 150px;
    background-color: rgb(247, 252, 224);
    border-radius: 10px;
    border:1.5px solid black;
    padding-left:8px;
    margin: 10px 0 30px 0;
    color:black;
    font-size:16px;
    padding: 10px 15px;
    max-width: 100%;
}
</style>
