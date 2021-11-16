<template>
<div>
  <v-card>
    <v-btn
      :v-for="especies in species"
      v-bind:key="especies"
    > 
      {{ especies }}
    </v-btn>
  </v-card>
  <!-- <v-btn
    elevation="10"
    shaped
    class="ma-2"
    outlined
    color="indigo"
    @click="animal"

  >
    Cobrinha
  </v-btn> -->

</div>
</template>

<script>

export default {
  props: {
    species: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      especies: [
        'Jararaca','coral', 'anaconda',
      ]
    };
  },
  // computed: {
  //   todasEspecies() {
  //     return this.especies;
  //   }
  // }
};
</script>
