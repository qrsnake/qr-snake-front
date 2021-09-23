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
      {{ count }}
      {{ counter }}
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
  justify-content: center;
}

.component-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
}

.id-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
}

</style>
