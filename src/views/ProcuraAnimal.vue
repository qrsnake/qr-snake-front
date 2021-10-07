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
        v-model="menu2"
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
        v-model="menu2"
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
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    sexos: ['Macho', 'Femea', 'Não identificado'],
    reproducoes: ['Viviparidade', 'Oviparidade', 'Não identificado'],
    habitats: ['Terrícula', 'Arborícola', 'Subterrânea', 'Aquática'],
    afirmacao: ['Sim', 'Não', 'N/A'],
    idades: ['Filhote', 'Jovem', 'Adulto'],
    situacoes: ['Viva', 'Óbito', 'Reintroduzida'],
    denticoes: ['Solenóglifa', 'Áglifa', 'Opistóglifa', 'Proteróglifa', 'Não identificado'],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menuChegada: false,
    menuObito: false
  }),
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