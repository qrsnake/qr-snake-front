<template>
  <div id="app">
    <v-col>
      <vue-qr-reader
        v-if="show"
        v-on:code-scanned="codeScanned"
        v-on:error-captured="errorCaptured"
        :stop-on-scanned="true"
        :draw-on-found="true"
        :responsive="false"
      />
      {{ scanned }}
      <v-divider/>
      <div class="back-btn">
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          @click="goBack"
        >
          Voltar
        </v-btn>
        <v-btn
          @click="changeShow(), abrirInfo()"
          class="ma-2"
          outlined
          color="indigo"
        >
          {{ changeName() }}
        </v-btn>
      </div>
        <info-animal ref="infos"></info-animal>
      <!-- </div> -->
    </v-col>
  </div>
</template>

<script>
import animalResource from '../api/resources/animal';
import VueQrReader from "../components/VueQrReader.vue";
import InfoAnimal from './InfoAnimal.vue';

export default {
  name: "app",
  components: {
    VueQrReader,
    InfoAnimal,
  },
  data() {
    return {
      errorMessage: '',
      scanned: '',
      show: true,
    };
  },
  methods: {
    goBack() {
      this.$router.push('/search');
    },
    codeScanned(code) {
      this.scanned = code;
      this.infos(this.scanned);
      // window.open(code, "QR Scanned");
    },
    errorCaptured(error) {
      switch (error.name) {
        case "NotAllowedError":
          this.errorMessage = "Camera permission denied.";
          break;
        case "NotFoundError":
          this.errorMessage = "There is no connected camera.";
          break;
        case "NotSupportedError":
          this.errorMessage =
            "Seems like this page is served in non-secure context.";
          break;
        case "NotReadableError":
          this.errorMessage =
            "Couldn't access your camera. Is it already in use?";
          break;
        case "OverconstrainedError":
          this.errorMessage = "Constraints don't match any installed camera.";
          break;
        default:
          this.errorMessage = "UNKNOWN ERROR: " + error.message;
      }
      console.error(this.errorMessage);
    },
    changeName() {
      if (this.show == true){
        return 'Ler QRCode';
      } else {
        return 'Ler Outro QRCode';
      }
    },
    changeShow() {
      this.show = !this.show;
      this.scanned = '';
    },
    abrirInfo() {
      this.$refs.infos.show();
    },
    async infos() {
      console.log(this.scanned);
      await animalResource.get({chip: this.scanned});
    }
  },
};
</script>

<style>
.back-btn{
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
}
</style>
