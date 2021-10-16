<template>
  <div>
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
        @click="doRegsiter"
      >
        Cadastrar Animal
      </v-btn>

    </div>
    
    <div class="id-css">
      <v-text-field
        class="chip-css"
        label="Digite o ID de chip de rastreamento"
        placeholder="ID"
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
    <div> 
      <info-animal></info-animal>
      <router-view />
    </div>
    <cadastrar-animal></cadastrar-animal>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    InfoAnimal: () => import('@/views/InfoAnimal.vue'),
  },
  methods: {  
    doRegister() {
      this.$router.push('/');
    },
    abrirInfo() {
      this.$emit('');
    },
  },
}
</script>

<style lang="scss" scoped>

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