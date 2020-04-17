<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div>
    <p class="texte">Nous sommes heureux de vous accueillir sur le site de l'aménagement de véhicules utilitaires. Notre site est, pour le moment en construction.</p>
    <p class="texte">A bientôt, Mohamed et Hichame.</p>
    </div>    
     <hr />
    <div class="contact">
     
<div class="mo">
<h4>SERVICE COMMERCIALE</h4>
<img src="../assets/img/icone-mobile.png" style="float: right" /><p>Mohamed Limam</p>
<a href="tel:0625170100">06 25 17 01 00</a>
</div>
<div class="hich"><h4>SERVICE TECHNIQUE</h4>
<img src="../assets/img/icone-mobile.png" style="float: right" /><p>Hichame Erraja</p>
<a href="tel:0650584537">06 50 58 45 37</a></div>
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
hr{
  height: 18px;
  background-color: $color-primary;
  border: none;
}
.texte{
padding: 20px;
width: 300px;
margin: 0 auto;
text-align: left;
  @media only screen and (max-width: $bp-small) {
     width: 370px;
  }
}
.contact {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  color:$color-primary;
  font-weigth: 900;

  @media only screen and (max-width: $bp-small) {
     width: 300px;
    flex-direction: column;
    justify-content: center;
  }
}
.mo, .hich{
width:178px;
text-align: right;

  img{
    width: 21%;
    height: auto;
    padding: 6px 0 0 10px;
  }
  a{
    text-decoration: none;
    color: $color-primary;
  }
    @media only screen and (max-width: $bp-small) {
      width:250px;
      margin: 20px;
      text-align: center;
    }
}
</style>
