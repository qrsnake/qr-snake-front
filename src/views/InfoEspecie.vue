<template>
  <div>
    <div class="camp-css">
      <v-text-field
        label="Nome cientifico da especie"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Nome comum da especie"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Reprodução"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Habitat"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Dentição"
        outlined
        align="center"
        disabled
      ></v-text-field>
    </div>
    <div class="main-css">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        Editar
    </v-btn>

    <v-btn
        class="ma-2"
        outlined
        color="indigo"
      >
        Deletar
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoEspecie",
  data: () => ({
    nomeCientifico: '',
    nomeComum: '',
    reproducao: '',
    habitat: '',
    denticao: '',
    expandInfos: false,
  }),
  methods: {
    show() {
      this.expandInfos = !this.expandInfos;
    },
  },
};
</script>

<style>
.camp-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
