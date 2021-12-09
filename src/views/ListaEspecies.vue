<template>
  <div>
    <div class="back-button">
      <v-btn 
        class="ma-2" 
        outlined 
        color="indigo" 
        @click="goBack"
      >
        Voltar
      </v-btn>
    </div>
    <v-card 
      class="mx-auto" 
    >
      <v-card-title
        @click="show =! show"
      > 
        Especie 
        <v-icon
          class="icon-button"
        >{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-card-title>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
              INFOS DAS ESPECIES
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
//import animalResource from '../api/resources/animal';
export default {
  data: () => ({
    show: false,
    nomeCientifico:'', 
    nomeComum: '',
    reproducao: '',
    tipoDeAlimentação: '',
    habitat: '',
    denticao: '', 
  }),
  methods: {
    goBack() {
      this.$router.push("/search");
    },
  },
  async get() {
    //const especies = await animalResource.get({}); //precisa de um get para especies
  }
};
</script>

<style scoped>
.back-button {
  display: flex;
  justify-content: space-around;
}
.icon-button {
  display: flex;
  justify-content: end;
}
</style>
