<template>
  <div>
    <div class="main-css">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="increment"
      >
        Listar Alunos
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="increment"
      >
        Listar Especies
      </v-btn>

      <v-btn
        class="ma-2"
        outlined
        color="indigo"
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
      >
        Ler QRcode
      </v-btn>
    </div>

    <v-divider></v-divider>

    <div class="camp-css">
      <v-text-field
        label="Numero do Chip"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Especie"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Nome Comum"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Denticao"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Reproducao"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Alimentacao"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Habitat"
        outlined
        align="center"
      ></v-text-field>     

      <v-text-field
        label="Data chegada"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Local de origem"
        outlined
        align="center"
      ></v-text-field>     

      <v-text-field
        label="Municipio"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Term./Doacao"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Massa (g) de entrada"
        outlined
        align="center"
      ></v-text-field>    

      <v-text-field
        label="Total - Entrada"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Causa - Entrada"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Idade"
        outlined
        align="center"
      ></v-text-field>     

      <v-text-field
        label="Sexo"
        outlined
        align="center"
      ></v-text-field>    

      <v-text-field
        label="Situacao"
        outlined
        align="center"
      ></v-text-field>

      <v-text-field
        label="Data de Obito"
        outlined
        align="center"
      ></v-text-field>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    test: 'batata&potato',
    status: true,
    count: 0,
  }),
  computed: {
    counter() {
      return `o valor é ${this.count}`;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    }
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