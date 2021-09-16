<template>
  <div>
    <div class="ImageMain">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="300"
        max-width="250"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
    </div>
    <div class="EmailMain">
      <v-text-field
        label="Email"
        placeholder="Email"
        outlined
        align="center"
      ></v-text-field>
    </div>
    <div class="PasswordMain">
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
    <div class="ButtonMain">
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
.ImageMain{
  padding: 50px 50px;
  align-items: center;
  justify-items: center;
}

.EmailMain{
  padding: 50px 50px;
  align-items: center;
  justify-items: center;
}

.PasswordMain{
  padding: 50px 50px;
  align-items: center;
  justify-items: center;
}

.ButtonMain{
  padding: 50px 50px;
  align-items: center;
  justify-items: center;
}
</style>
