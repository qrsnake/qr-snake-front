<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/search">Procura Animal</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4ecf95;
    }
  }
}
</style>
