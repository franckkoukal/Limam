<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div>
    <p class="texte">Nous sommes heureux de vous accueillir sur le site de l'aménagement de véhicules utilitaires. Notre site est, pour le moment en construction.</p>
    <p class="texte">A bientôt, Mohamed et Hichame.</p>
    </div>
    <div class="contact">
      <hr>
<div class="mo"><h4>SERVICE COMMERCIALE</h4>
<img src="../assets/img/icone-mobile.png" style="float: left" /><p>Mohamed Limam</p>
<p>06 25 17 01 00</p>
</div>
<div class="hich"><h4>SERVICE TECHNIQUE</h4>
<img src="../assets/img/icone-mobile.png" style="float: left" /><p>Hichame Erraja</p>
<p>06 50 58 45 37</p></div>
      </div>
  </div>

</template>

<script>
export default {
  name: "Accueil",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.texte{
padding: 20px;
width: 300px;
margin: 0 auto;
text-align: left;
}
.contact {
  width: 500px;
  margin: 0 auto;
}
.mo{
  float:left;
  width:200px;
}
.hich{
width:200px;
float:right;
}
</style>
