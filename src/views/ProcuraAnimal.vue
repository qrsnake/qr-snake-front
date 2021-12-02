<template>
  <div>
    <div class="image-main">
      <v-img
        src="@/assets/icon.png"
        max-height="150"
        max-width="150"
      ></v-img>
    </div>
    <div class="main-css">
      <v-btn
        class="ma-2  "
        outlined
        color="indigo"
        small
      >
        Alunos
      </v-btn>
      
      <v-btn
        class="ma-2  "
        outlined
        color="indigo"
        small
      >
        Especies
      </v-btn>

      <v-btn
        class="ma-2  "
        outlined
        color="indigo"
        @click="cadastrar"
        small
      >
        Cadastro<br>Animal
      </v-btn>

    </div>
    
    <div class="id-css">
      <v-text-field
        class="chip-css"
        placeholder="Digite o ID do chip de rastreamento"
        outlined
        filled
        align="center"
        v-bind="chip"
        @keypress.enter="abrirInfo"
      ></v-text-field>
      <div class="info-btn"> 
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          @click="abrirInfo"
        >
          <!--Pesquisar-->
          <v-icon
          middle
          >
          mdi-magnify
          </v-icon>
        </v-btn>
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          @click="$router.push('qrcode')"
        >
          <!--Ler QRcode-->
          <v-icon
          middle
          >
          mdi-qrcode-scan
          </v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <info-animal ref="infos"></info-animal>
  </div>
</template>

<script>
//import animalResource from '../api/resources/animal'
export default {
  name: 'Home',
  components: {
    InfoAnimal: () => import('@/views/InfoAnimal.vue'),
    // CadastrarAnimal: () => import('@/views/CadastrarAnimal.vue'),
  },
  data() {
    return {
      chip: "",
      hasClicked: false,
    };
  },
  methods: {  
    cadastrar() {
      this.$router.push('search/registration');
    },
    async abrirInfo() {
      //const animalInfo = await animalResource.get({chip: this.chip})
      this.$refs.infos.show();
    },
  },
}
</script>

<style lang="scss" scoped>
.image-main{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
}

.main-css{
  padding: 1% 1%;
  display: flex;
  justify-content: center;
  
}

.id-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
}

.chip-css{
  display: flex;
  justify-content: space-between;
  max-width: 20%;
}



@media screen and (max-width: 700px){
  .id-css{ 
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .chip-css{
    max-width: 100%;
  }
  .info-btn{
    max-width: 100%;
  }
}
</style>