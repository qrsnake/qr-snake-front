<template>
  <div class="all-search">
    <div class="main-css">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        small
      >
        Alunos
      </v-btn>
      
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        small
      >
        Especies
      </v-btn>

      <v-btn
        class="ma-2"
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
    <v-divider></v-divider>
    <info-animal ref="infos"></info-animal>
  </div>
</template>

<script>
import animalResource from '../api/resources/animal'
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
      const animalInfo = await animalResource.get({chip: this.chip})
      this.$refs.infos.show();
    },
  },
}
</script>

<style lang="scss" scoped>
.all-search {
  margin-left: 1% 3%;
  margin-right: 1% 3%;
}

.main-css{
  padding: 1% 1%;
  display: flex;
  justify-content: space-between;
  
}

.component-css{
  padding: 1% 3%;
  display: flex;
  justify-content: space-between;
}

.id-css{
  padding: 1% 3%;
  display: flex;
  justify-content: space-between;
}

.chip-css{
  display: flex;
  justify-content: space-between;
  max-width: 50%;
}

.camp-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>