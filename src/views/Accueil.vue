<template>
  <div class="home">
    <img alt="logo lm-equipement" src="../assets/logo-LM-EQUIPEMENT.png" />
    <Accueil msg="Bienvenue" />
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from "@/components/Accueil.vue";

export default {
  name: "Accueil",
  components: {
    Accueil
  }
};
</script>
