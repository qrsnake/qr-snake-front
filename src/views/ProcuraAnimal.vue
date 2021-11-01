<template>
  <div class="all-search">
    <div class="main-css">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        <!--Lista Aluno-->
        <v-icon
        middle
        >
        mdi-account-group
        </v-icon>
      </v-btn>
      
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        <!--Lista Especie-->
        <v-icon
        middle
        >
        mdi-account-multiple
        </v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="cadastrar"
      >
        <!--Cadastro Animal-->
        <v-icon
        middle
        >
        mdi-account-plus
        </v-icon>
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