<template>
  <v-expand-transition>
    <div v-show="expandInfos">
      <div class="camp-css">
        <v-text-field
          label="Numero do Chip"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-text-field
          label="Especie"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-text-field
          label="Nome Comum"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-select
          :items="denticoes"
          label="Denticao"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-select
          :items="reproducoes"
          label="Reproducao"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-select
          :items="reproducoes"
          label="Alimentacao"
          outlined
          align="center"
          multiple
          disabled
        ></v-select>

        <v-select
          :items="habitats"
          label="Habitat"
          outlined
          align="center"
          multiple
          disabled
        ></v-select>

        <v-menu
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
          disabled
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Data de Chegada"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menuChegada = false"
          ></v-date-picker>
        </v-menu>

        <v-text-field
          label="Local de origem"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-text-field
          label="Municipio"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-select
          :items="afirmacao"
          label="Term./Doacao"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-text-field
          label="Massa (g) de entrada"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-text-field
          label="Total - Entrada"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-text-field
          label="Cauda - Entrada"
          outlined
          align="center"
          disabled
        ></v-text-field>

        <v-select
          :items="idades"
          label="Idade"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-select
          :items="sexos"
          label="Sexo"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-select
          :items="situacoes"
          label="Situacao"
          outlined
          align="center"
          disabled
        ></v-select>

        <v-menu
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
          disabled
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Data de Obito"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menuObito = false"
          ></v-date-picker>
        </v-menu>
      </div>
    </div>
  </v-expand-transition>
</template>

<script>
export default {
  name: "InfoAnimal",
  data: () => ({
    sexos: ["Macho", "Femea", "Não identificado"],
    reproducoes: ["Viviparidade", "Oviparidade", "Não identificado"],
    habitats: ["Terrícula", "Arborícola", "Subterrânea", "Aquática"],
    afirmacao: ["Sim", "Não", "N/A"],
    idades: ["Filhote", "Jovem", "Adulto"],
    situacoes: ["Viva", "Óbito", "Reintroduzida"],
    denticoes: [
      "Solenóglifa",
      "Áglifa",
      "Opistóglifa",
      "Proteróglifa",
      "Não identificado",
    ],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menuChegada: false,
    menuObito: false,
    expandInfos: false,
  }),
  // data() {
  //   return {
  //     expandInfos: false,
  //   };
  // },
  methods: {
    show() {
      this.expandInfos = !this.expandInfos;
    },
  },
};
</script>
