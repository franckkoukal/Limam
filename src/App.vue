<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/apropos">A propos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #929396;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #929396;

    &.router-link-exact-active {
      color: #009681;
    }
  }
}
</style>
