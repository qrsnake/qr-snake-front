<template>
  <div class="all-search">
    <div class="main-css">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        Listar Alunos
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        Listar Especies
      </v-btn>

      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="cadastrar"
      >
        Cadastrar Animal
      </v-btn>

    </div>
    
    <div class="id-css">
      <v-text-field
        class="chip-css"
        placeholder="Digite o ID do chip de rastreamento"
        outlined
        filled
        align="center"
      ></v-text-field>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="abrirInfo"
      >
        Pesquisar
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        Ler QRcode
      </v-btn>
    </div>
    <v-divider></v-divider>
    <info-animal ref="infos"></info-animal>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    InfoAnimal: () => import('@/views/InfoAnimal.vue'),
    // CadastrarAnimal: () => import('@/views/CadastrarAnimal.vue'),
  },
  data() {
    return {
      hasClicked: false,
    };
  },
  methods: {  
    cadastrar() {
      this.$router.push('search/registration');
    },
    abrirInfo() {
      this.$refs.infos.show();
    },
  },
}
</script>

<style lang="scss" scoped>
.all-search {
  margin-left: 300px;
  margin-right: 300px;
}

.main-css{
  padding: 1% 3%;
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