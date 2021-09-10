<template>
  <div>
    <div>
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
      >
        Cadastrar Animal
      </v-btn>
    </div>
    <div>
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

</style>
