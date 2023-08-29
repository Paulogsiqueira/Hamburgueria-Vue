<template>
  <div class="bodySobre">
    <div class="body-title">Make Your Burguer</div>
    <section class="body-history">
      <div class="body-history-text">
        <h3>História</h3>
        <p>
          Na década de 1990, o mecânico Carlos teve uma inspiração após ver um
          artigo sobre lanches tradicionais. Decidido a unir sua paixão pela
          mecânica com sua vontade de criar algo, ele transformou sua garagem em
          uma lanchonete chamada "Garagem Gourmet".
        </p>
        <p>
          Combinando habilidades culinárias recém-adquiridas com peças de carros
          e decoração temática, Carlos abriu as portas da lanchonete em 1992. A
          lanchonete se tornou um sucesso, atraindo entusiastas de carros e
          amantes de boa comida.
        </p>
        <p>
          A "Garagem Gourmet" rapidamente se destacou não apenas pela comida
          excepcional, mas também pela atmosfera única. Carlos equilibrou a
          administração da lanchonete com o trabalho mecânico, tornando-se um
          ícone local. Ao longo dos anos, a lanchonete se transformou em um
          marco da cidade, representando como um simples sonho pode evoluir para
          um sucesso inspirador.
        </p>
      </div>
      <div class="body-history-img">
        <img
          class="body-history-img-content"
          src="/img/Antiga.png"
          alt="fachada da empresa antigamente"
        />
      </div>
    </section>
    <section class="body-inovation">
      <h3>Transformação e Inovação</h3>
      <div class="body-inovation-text">
        <p>
          Em 2010, a pequena lanchonete que começou na garagem de Carlos deu um
          passo ousado ao se transformar na icônica hamburgueria "Make Your
          Burguer". Movido por sua paixão por criar experiências únicas, Carlos
          expandiu seu espaço e cardápio.
        </p>
        <p>
          Com um toque pessoal, ele permitiu que os clientes personalizassem
          seus próprios hambúrgueres, refletindo o espírito acolhedor e criativo
          da lanchonete original. A Make Your Burguer rapidamente se tornou um
          ponto de encontro para a comunidade, combinando a história humilde de
          suas origens com uma visão moderna e saborosa.
        </p>
        <p>
          Hoje, ela continua a ser uma lembrança de como um simples começo pode
          florescer em algo verdadeiramente especial.
        </p>
      </div>
    </section>
    <section class="body-img">
      <div class="body-img-principal">
        <img class="body-img-principal-img" :src="source.toString()" :alt="descr.toString()" />
      </div>
      <div class="body-img-itens">
        <img
          class="body-img-itens-img"
          v-for="img in imagens"
          :key="img.address"
          @click="alterarImagem(img.address, img.alt)"
          :src="img.address"
          :alt="img.alt"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IImagem from "../interface/IImagem";

export default defineComponent({
  name: "Sobre",
  data() {
    return {
      source: "/img/moderna-mesas.jpg" as String,
      descr: "Mesas na entrada da hamburgueria" as String,
      imagens: [
        {
          address: "/img/moderna-mesas.jpg",
          alt: "Mesas na entrada da hamburgueria",
        },
        {
          address: "/img/moderna-bancada.jpg",
          alt: "Bancada entrada da hamburgueria",
        },
        {
          address: "/img/moderna-mesas-fundo.jpg",
          alt: "Mesas no fundo da hamburgueria",
        },
        { address: "/img/banheiros.jpg", alt: "Banheiros da hamburgueria" },
      ] as IImagem[],
    };
  },
  methods: {
    alterarImagem(adress: String, descript: String): void {
      this.source = adress;
      this.descr = descript;
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

.body-title {
  font-family: "Dancing Script", cursive;
  font-size: 55px;
  color: #fcba03;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  display: flex;
  padding: 40px;
  margin-bottom: 60px;
  justify-content: center;
}

.body-title:hover {
  scale: 1.5;
}
.bodySobre {
  min-height: 100%;
  background-color:rgb(237, 237, 235);
  background-size: 4500px;
}
.body-history {
  display: flex;
}
.body-history-img {
  min-width: 50%;
  display: flex;
  align-items: center;
}
.body-history-text {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.body-history-text h3 {
  font-size: 42px;
  color: #fcba03;
  font-family: "Dancing Script", cursive;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.body-history-text p {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 20px;
}

.body-history-img-content {
  width: 70%;
  margin: 10% 15%;
  border-radius: 15%;
}

.body-inovation {
  padding: 40px 7%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.body-inovation h3 {
  margin-bottom: 40px;
  font-size: 42px;
  color: #fcba03;
  font-family: "Dancing Script", cursive;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.body-inovation p {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 20px;
}

.body-img-principal {
  text-align: center;
}
.body-img-principal-img {
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
}

.body-img-itens-img {
  width: 20%;
  padding: 10px;
  border-radius: 20px;
}

.body-img-itens-img:hover {
  scale: 1.2;
  cursor: pointer;
}
.body-img-itens {
  margin-top: 20px;
  text-align: center;
  padding-bottom: 50px;
}


@media screen and (max-width: 1023px){
.body-history-img{
    display: none;
}
}
</style>