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
          <!-- v-for="especie in especies"
          :key="especie.tipo" -->
      <v-flex
      >
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
                  <info-especie ref="infos"></info-especie>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
  </div>
</template>

<script>
import InfoEspecie from './InfoEspecie.vue';
//import animalResource from '../api/resources/animal';
export default {
  data: () => ({
    show: false,
    especies: [
      { tipo: ' Especie 1 '},
      { tipo: ' Especie 2 '},
      { tipo: ' Especie 3 '},
      { tipo: ' Especie 4 '},
    ]
  }),
  components: {
    InfoEspecie,
  },
  methods: {
    goBack() {
      this.$router.push("/search");
    },
  },
  async get() {
    //const especies = await animalResource.get({}); //precisa de um get para especies
  },
  async abrirInfoEspecie() {
    this.$refs.infos.show();
  },
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
