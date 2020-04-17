<template>
  <div class="home">
    <img alt="logo lm-equipement" src="@/assets/logo-LM-EQUIPEMENT.svg" />
    <Accueil msg="Bienvenue" />
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from "../components/Accueil.vue";

export default {
  name: "Index",
  components: {
    Accueil
  }
};
</script>
<style lang="scss">
.home{
 padding-top: 50px;
 text-align: center;
 width: 500px;
 margin: 0 auto;
  color:$color-grey-light;
}
</style>