<template>
  <div class="wrap">
    <mynav />
    <!-- HEADER -->
    <div class="slide">
      
      <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          img-src="https://image.freepik.com/photos-gratuite/bouchent-portrait-studio-mode-elegante-belle-femme-lunettes-soleil-elegantes-levres-rouges-fond-bleu_273443-7.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://image.freepik.com/photos-gratuite/fille-se-trouve-dans-herbe-fleurie_275983-41.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://image.freepik.com/photos-gratuite/portrait-luxe-belle-jeune-femme-du-maquillage-naturel-est-titulaire-grande-feuille-verte-vert-flou_120960-41.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://image.freepik.com/photos-gratuite/portrait-femme-afro-americaine-souriante_171337-8586.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- FIN DE HEADER -->
    <!-- sectionUne -->
    <div class="sectionUne">
     <h1 class="title">Ce qui m'amène à toi</h1>
     <div class="container">
       
  <div  class="image">
    <img class="img-une" src="../assets/1189.jpg" alt="mon img" />
  </div>
  <div class="info">
   
    
    <p class="text"> Afro Dream est une plateforme créer le 30 juin 2020 qui permet aux
          femmes puissent avoir une bonne routine capillaire pour avoir une
          belle croissance de cheveux. Il faut que les femmes noires et métisses
          prennent conscience de la beauté de leurs cheveux pour mieux en
          prendre soin.C’est une manière pour elle de reprendre confiance en
          elle. Je mets en place ce projet pour fournir des soins capillaires
          pour les peaux noires et métissées ainsi que pour les aider à trouver
          les produits adaptés à leurs types de cheveux (crépus, lisses,
          bouclés)</p>
    
  </div>
  
</div>
 </div>
    
    <!-- fin de sectionUne -->
    <!-- sectionDeux -->
    <div class="sectionDeux">
      <h2>Les citations qui me definissent ma plateforme</h2>
      <div class="box">
        <ul class="auto-grid">
          <li class="c1">Le bonheur est le meilleurs des cosmetique</li>
          <li class="c2">Sublimez vos cheveux</li>
          <li class="c3">
            Les routes les plus difficiles mènent aux plus belles destinations
          </li>
          <li class="c4">Prendre conscience de sa beauté naturel</li>
          <li class="c5">
            La confiance en soi est le premier secret du succès
          </li>
          <li class="c6">
            Sois juste, montre toi telle que tu es:imparfaite, drole, forte et
            unique
          </li>
        </ul>
      </div>
    </div>
    <div class="sectionTrois">
      <h2 class="title-trois">Ce qui m'amène à toi</h2>
     <div class="container-trois">
       
  <div  class="image">
    
    <img class="img" src="../assets/5f49498f89ae5.jpg" alt="mon img" />
  </div>
  <div class="info-trois">
   
   
   <p class="text-trois">
        Je suis ici pour vous servir. Ma plateforme va vous
        aider à vous consacrer du temps tout en vous
        facilitant la vie. Elle vous permettra d’avoir de nouveau confiance en
        vous. Elle vous offre la possibilité d’avoir une beauté naturelle sans
        artifices.
          Commencez une nouvelle aventure avec nous, grâce à la communauté afro
          dream.
        « Une femme puissante est une personne qui respire la confiance et qui
        peut être dure mais juste et gentille. Et sait aussi comment obtenir ce
        qu'elle veut »
      </p>
    <a href="/register" class="button">
      s'inscrit
    </a>
  </div>
  
</div>
</div>
    <myfooter />
  </div>
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  name: "decouvrir",
  components: {
    mynav,
    myfooter,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* =============================================================================================================== */
  /* ==================================================== SectionUne: Ce qui m'amène à toi  ===================================================== */
 .container{
   display: flex;
   align-items: center;
   max-width: 70rem;
   padding: 4rem;
   background-color:#FCFCFC;
   box-shadow: 2px 2px 5px black;
   border-radius: 15px;
   margin-left: 8%;
   
}
.image{
   max-width: 23rem;
   min-width: 23rem;
   height: 18rem;
   position: relative;
   transform: translateX(-8rem);
}

.image img{
  width:100%;
  height: 100%;
  object-fit: cover;
  display:block;
  border-radius: 10px;
}

.image::before{
  content: '';
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  box-shadow: 2px 2px 5px black;
  border-radius: 10px;
}

.title{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
.text{
  margin-bottom: 3rem;
  font-size: 22px;
  color: black;
   font-family: "Galada", cursive;
   
}
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionUne ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX: Les citations ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 648px;
    margin: 0;
    padding: 0;
  }
  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 19rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 20px 0 0 0;
    padding: 0;
    grid-gap: 1rem;
    list-style: none;
    text-align: center;
    width: 100%;
  }
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    color: #ffffff;
  }
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== SectionTrois: Rejoindre la plateforme ===================================================== */
 .sectionTrois {
    width: 100%;
        height: 578px;
  }
 .container-trois{
   display: flex;
   align-items: center;
   max-width: 70rem;
   padding: 4rem;
   background-color:#FCFCFC;
   box-shadow: 2px 2px 5px black;
   border-radius: 15px;
   margin-left: 8%;
   
}
.image-trois{
   max-width: 23rem;
   min-width: 23rem;
   height: 18rem;
   position: relative;
   transform: translateX(-8rem);
}

.image-trois img{
  width:100%;
  height: 100%;
  object-fit: cover;
  display:block;
  border-radius: 10px;
}

.image-trois::before{
  content: '';
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  box-shadow: 2px 2px 5px black;
  border-radius: 10px;
}

.title-trois{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
/* le paragraphe du bloc */
.text-trois{
  margin-bottom: 3rem;
  font-size: 20px;
  color: black;
   font-family: "Galada", cursive;
}
  .button{
   display: inline-block;
   padding: 15px 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   font-size: 20px;
   color: #fff;
  background-image: linear-gradient(to left, yellow 0%, orange 100%);
  box-shadow: 2px 2px 5px black;
   border-radius: 10px;
   border: 1px solid yellow;
   text-decoration: none;
}
.button:hover{
  background-color: #FCFCFC;
  color: yellow;
  border: 1 px solid yellow;
}
}
 @media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
 .container{
   display: flex;
   align-items: center;
   max-width: 70rem;
   padding: 4rem;
   background-color:#FCFCFC;
   box-shadow: 2px 2px 5px black;
   border-radius: 15px;
   margin-left: 8%;
}
.image{
   max-width: 23rem;
   min-width: 23rem;
   height: 18rem;
   position: relative;
   transform: translateX(-8rem);
}

.image img{
  width:100%;
  height: 100%;
  object-fit: cover;
  display:block;
  border-radius: 10px;
}

.image::before{
  content: '';
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  box-shadow: 2px 2px 5px black;
  border-radius: 10px;
}

.title{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
.text{
  margin-bottom: 3rem;
  font-size: 22px;
  color: black;
  font-family: "Galada", cursive;
   
}
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionUne ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 648px;
    margin: 0;
    padding: 0;
  }
  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 19rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 20px 0 0 0;
    padding: 0;
    grid-gap: 1rem;
    list-style: none;
    text-align: center;
    width: 100%;
  }
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    color: #ffffff;
  }
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
 .sectionTrois {
    width: 100%;
        height: 578px;
  }
 .container-trois{
   display: flex;
   align-items: center;
   max-width: 70rem;
   padding: 4rem;
   background-color:#FCFCFC;
   box-shadow: 2px 2px 5px black;
   border-radius: 15px;
   margin-left: 8%;
   
}
.image-trois{
   max-width: 23rem;
   min-width: 23rem;
   height: 18rem;
   position: relative;
   transform: translateX(-8rem);
}

.image-trois img{
  width:100%;
  height: 100%;
  object-fit: cover;
  display:block;
  border-radius: 10px;
}

.image-trois::before{
  content: '';
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  box-shadow: 2px 2px 5px black;
  border-radius: 10px;
}

.title-trois{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
.text-trois{
  margin-bottom: 3rem;
  font-size: 20px;
  color: black;
   font-family: "Galada", cursive;
}
  .button{
   display: inline-block;
   padding: 15px 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   font-size: 20px;
   color: #fff;
  background-image: linear-gradient(to left, yellow 0%, orange 100%);
  box-shadow: 2px 2px 5px black;
   border-radius: 10px;
   border: 1px solid yellow;
   text-decoration: none;
}
.button:hover{
  background-color: #FCFCFC;
  color: yellow;
  border: 1 px solid yellow;
}
 }

@media screen and (min-width: 768px) and (max-width: 1024px) {
   .sectionUne {
    width: 100%;
   height: 847px;
  }
   .container{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
   }
   .title{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image{
   min-width: 80%;
    transform: translate(0, -3rem);

 }
 .image img {
   width: 100%;
 }
  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 847px;
    margin: 0;
    padding: 0;
  }

  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
    margin-left: 10%;
  }
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    width: 91%;
    color: #ffffff;
  }
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */
.sectionTrois {
    width: 100%;
   height: 987px;
  }
   .container-trois{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
    margin-left: 6%;
   }
   .title-trois{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image-trois{
   min-width: 80%;
    transform: translate(0, -3rem);

 }
 .image-trois img {
   width: 100%;
 }
  .button{
   display: inline-block;
   padding: 15px 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   font-size: 20px;
   color: #fff;
  background-image: linear-gradient(to left, yellow 0%, orange 100%);
  box-shadow: 2px 2px 5px black;
   border-radius: 10px;
   border: 1px solid yellow;
   text-decoration: none;
}
.button:hover{
  background-color: #FCFCFC;
  color: yellow;
  border: 1 px solid yellow;
}
 }
 @media screen and (min-width: 480px) and (max-width: 767.9px) {
   .sectionUne {
    width: 100%;
   height: 847px;
  }
   .container{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
   }
   .title{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image{
   min-width: 80%;
    transform: translate(0, -3rem);

 }
 .image img {
   width: 100%;
 }
  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 1448px;
    margin: 0;
    padding: 0;
  }

  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 16rem;

    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
  }
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    width: 91%;
    color: #ffffff;
  }
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */
.sectionTrois {
    width: 100%;
   height: 885px;
  }
   .container-trois{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
    margin-left: 6%;
   }
   .title-trois{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image-trois{
   min-width: 80%;
    transform: translate(0, -3rem);

 }
 .image-trois img {
   width: 100%;
 }
  .button{
   display: inline-block;
   padding: 15px 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   font-size: 20px;
   color: #fff;
  background-image: linear-gradient(to left, yellow 0%, orange 100%);
  box-shadow: 2px 2px 5px black;
   border-radius: 10px;
   border: 1px solid yellow;
   text-decoration: none;
}
.button:hover{
  background-color: white;
  color: yellow;
  transition-delay: 100ms;
}
 }
 @media screen and (min-width: 320px) and (max-width: 479px) {
   .sectionUne {
    width: 100%;
   height: 1165px;
  }
   .container{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
   }
   .title{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image{
   min-width: 80%;
    transform: translate(0, -3rem);

 }
 .image img {
   width: 100%;
 }
  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
   height: 1569px;
    margin: 0;
    padding: 0;
  }

  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
  }
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    width: 91%;
    color: #ffffff;
  }
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */
.sectionTrois {
    width: 100%;
   height: 1070px;
  }
   .container-trois{
    padding: 71px;
    flex-direction: column;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 5px black;
    border-radius: 15px;
    width: 88%;
    margin-left: 6%;
   }
   .title-trois{
  padding: 4%;
    font-family: "Galada", cursive;
    text-align: center;
   color: black;
}
   .image-trois{
   min-width: 80%;
    transform: translate(0, -3rem);
 }
 .image-trois img {
   width: 100%;
 }
  .button{
   display: inline-block;
   padding: 15px 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   font-size: 20px;
   color: #fff;
  background-image: linear-gradient(to left, yellow 0%, orange 100%);
  box-shadow: 2px 2px 5px black;
   border-radius: 10px;
   border: 1px solid yellow;
   text-decoration: none;
}
.button:hover{
  background-color: transparent;
  color: yellow;
  transition-delay: 100ms;
}
 }

</style>
