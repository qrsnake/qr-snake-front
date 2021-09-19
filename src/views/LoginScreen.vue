<template>
  <div>
    <div class="image-main">
      <v-img
        lazy-src="../assets/kek pekora.png"
        src="../assets/kek pekora.png"
        max-height="500"
        max-width="500"
      ></v-img>
    </div>
    <div class="email-main">
      <v-text-field
        label="Email"
        placeholder="Email"
        outlined
        align="center"
      ></v-text-field>
    </div>
    <div class="password-main">
      <v-text-field
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show3 ? 'text' : 'password'"
        name="input-10-2"
        label="Senha"
        hint="At least 8 characters"
        class="input-group--focused"
        @click:append="show3 = !show3"
        outlined
        align="center"
      ></v-text-field>
    </div>
    <div class="button-main">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        align="center"
      >
        Entrar
      </v-btn>
      <!--
      {{ count }}
      {{ counter }}
      -->
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.image-main{
  padding: 50px 50px;
  display: flex;
  justify-content: center;
}

.email-main{
  padding: 50px 50px;
  display: flex;
  justify-content: center;
}

.password-main{
  padding: 50px 50px;
  display: flex;
  justify-content: center;
}

.button-main{
  padding: 50px 50px;
  display: flex;
  justify-content: center;
}
</style>
