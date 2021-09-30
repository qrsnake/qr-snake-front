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

      <v-text-field
        label="Denticao"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Reproducao"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Alimentacao"
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
        label="Data chegada"
        outlined
        align="center"
        disabled
      ></v-text-field>

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

      <v-text-field
        label="Term./Doacao"
        outlined
        align="center"
        disabled
      ></v-text-field>

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
        label="Causa - Entrada"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <v-text-field
        label="Idade"
        outlined
        align="center"
        disabled
      ></v-text-field>     

      <v-select
        :items="sexos"
        label="Sexo"
        outlined
        align="center"
      ></v-select>    

      <v-text-field
        label="Situacao"
        outlined
        align="center"
        disabled
      ></v-text-field>

      <!--
      <v-text-field
        label="Data de Obito"
        outlined
        align="center"
        disabled
      ></v-text-field>
      -->

      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    sexos: ['Macho', 'Femea', 'Nao identificado'],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    status: true,
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