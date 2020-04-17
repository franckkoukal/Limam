<template>
  <div id="app">
   <!--  <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/apropos">A propos</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $color-grey-light;

    &.router-link-exact-active {
      color: $color-primary-dark
    }
  }
}
</style>
