<template>
  <div class="wrap">
    <mynav />
    <!-- HEADER -->
    <div>
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
          img-src="https://as2.ftcdn.net/jpg/03/72/24/91/500_F_372249177_GftE2ZFQPoPtUVKZNyYMuFV6uievHIjN.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- FIN DE HEADER -->
    <!-- sectionUne -->
    <div class="sectionUne">
      <h2>Ce qui m'amène à toi</h2>
      <div class="sec">
        <img class="img-une" src="../assets/1189.jpg" alt="mon img" />
        <p>
          Afro Dream est une plateforme créer le 30 juin 2020 qui permet aux
          femmes puissent avoir une bonne routine capillaire pour avoir une
          belle croissance de cheveux. Il faut que les femmes noires et métisses
          prennent conscience de la beauté de leurs cheveux pour mieux en
          prendre soin.C’est une manière pour elle de reprendre confiance en
          elle. Je mets en place ce projet pour fournir des soins capillaires
          pour les peaux noires et métissées ainsi que pour les aider à trouver
          les produits adaptés à leurs types de cheveux (crépus, lisses,
          bouclés)
        </p>
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
      <h2>Ce qui m'amène à toi</h2>
      <img class="img-trois" src="../assets/5f49498f89ae5.jpg" alt="mon img" />
      <p>
        Je suis ici pour vous servir. Ma plateforme va vous
        <a href="/brocher">aider</a> à vous consacrer du temps tout en vous
        facilitant la vie. Elle vous permettra d’avoir de nouveau confiance en
        vous. Elle vous offre la possibilité d’avoir une beauté naturelle sans
        artifices.
        <a href="/register">
          Commencez une nouvelle aventure avec nous, grâce à la communauté afro
          dream.
        </a>
        « Une femme puissante est une personne qui respire la confiance et qui
        peut être dure mais juste et gentille. Et sait aussi comment obtenir ce
        qu'elle veut »
      </p>
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
  /* ==================================================== SectionUne ===================================================== */
  .main-sectionUne {
    padding: 20px;
  }
  .sectionUne {
    width: 100%;
    height: 487px;
  }
  .sectionUne h2 {
    padding: 4%;
    font-family: "Galada", cursive;
  }

  .img-une {
    width: 44%;
    height: 30%;
    position: absolute;
    left: 8%;
  }
  .sectionUne p {
    position: absolute;
    left: 52%;
    top: 1090px;
    background-color: gainsboro;
    width: 44%;
    height: 30%;
    font-size: 24px;
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
  /* ==================================================== Fin de SectionTrois ===================================================== */
  .sectionTrois {
    width: 100%;
    height: 515px;
  }

  .sectionTrois h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  .img-trois {
    width: 34%;
    height: 34%;
    position: absolute;
    left: 63%;

    top: 2183px;
  }
  .sectionTrois p {
    font-size: 26px;
    width: 45%;
    left: 13%;
    position: absolute;
    font-family: "Galada", cursive;
  }
  a:hover {
    color: #ffffcc;
    text-decoration: none;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
}
/* =============================================================================================================== */
/* ==================================================== SectionUne ===================================================== */
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .main-sectionUne {
    padding: 20px;
  }
  .sectionUne {
    width: 100%;
    height: 487px;
  }
  /* le titre de sectionune */
  .sectionUne h2 {
    padding: 4%;
    font-family: "Galada", cursive;
  }
  /* la taille de l'image */
  .img-une {
    width: 44%;
    height: 51%;
    position: absolute;
    left: 8%;
  }
  /* le paragrahe  */
  .sectionUne p {
    position: absolute;
    left: 52%;
    top: 1072px;
    background-color: gainsboro;
    width: 44%;
    height: 51%;
    font-size: 22px;
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
  /* le titre de sectionDeux */
  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* les citations: les positionnement   */
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
  /* les citations */
  li {
    padding: 5rem 1rem;
    text-align: center;
    font-size: 23px;
    color: #ffffff;
  }
  /* la couleur pour une citation  */
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur pour une citation  */
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur pour une citation  */
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur pour une citation  */
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur pour une citation  */
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur pour une citation  */
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
  .sectionTrois {
    width: 100%;
    height: 515px;
  }
  /*le titre du sectionTrois */
  .sectionTrois h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* le positionnement de l'image et la taille */
  .img-trois {
    width: 34%;
    height: 51%;
    position: absolute;
    left: 63%;
    top: 2227px;
  }
  /* le paragraphe: la taille, la police et le postionnement du texte */
  .sectionTrois p {
    font-size: 26px;
    width: 45%;
    left: 13%;
    position: absolute;
    font-family: "Galada", cursive;
  }
  /* le lien: la couleur  */
  a:hover {
    color: #ffffcc;
    text-decoration: none;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .main-sectionUne {
    padding: 20px;
  }
  .sectionUne {
    width: 100%;
    flex-direction: row;
    height: 561px;
  }
  /* le titre de la sectionUne */
  .sectionUne h2 {
    padding: 4%;
    font-family: "Galada", cursive;
  }
  /* la taille de l'image */
  .img-une {
    width: 84%;
    height: 42%;
  }
  /*le paragraphe  */
  .sectionUne p {
    margin: 0 60px;
    max-width: 660px;
    background-color: gainsboro;
    font-size: 20px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionUne ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 857px;
    margin: 0;
    padding: 0;
  }
  /* le titre de sectionDeux */
  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* les citations: positionnement */
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .auto-grid {
    --auto-grid-min-size: 16rem;
    width: 94%;
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
    color: #ffffff;
  }
  /* la couleur de la citation */
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur de la citation */
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur de la citation */
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur de la citation */
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur de la citation */
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* la couleur de la citation */
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
  .sectionTrois {
    width: 100%;
    height: 676px;
  }
  /* le titre de sectionTrois */
  .sectionTrois h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* la taille de l'image  */
  .img-trois {
    width: 45%;
    height: 42%;
  }
  /* le pargraphe */
  .sectionTrois p {
    margin: 0 60px;
    width: 80%;
    font-size: 20px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .main-sectionUne {
    padding: 20px;
  }
  /* le titre de sectionUne */
  .sectionUne h2 {
    padding: 4%;
    font-family: "Galada", cursive;
  }
  .sectionUne {
    width: 100%;
    flex-direction: row;
    height: 714px;
  }

  .img-une {
    width: 75%;
    height: 40%;
  }
  .sectionUne p {
    margin: 0 60px;
    max-width: 660px;
    background-color: gainsboro;
    font-size: 20px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionUne ===================================================== */

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
  /* ==================================================== Fin de SectionTrois ===================================================== */
  .sectionTrois {
    width: 100%;
    height: 676px;
  }

  .sectionTrois h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  .img-trois {
    width: 45%;
    height: 42%;
  }
  .sectionTrois p {
    margin: 0 60px;
    width: 80%;
    font-size: 20px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .main-sectionUne {
    padding: 20px;
  }
  /* le titre de la sectionUne */
  .sectionUne h2 {
    padding: 4%;
    font-family: "Galada", cursive;
  }
  .sectionUne {
    width: 100%;
    flex-direction: row;
    height: 610px;
  }
  /* taille de l'image */
  .img-une {
    width: 63%;
    height: 40%;
  }
  /*paragraphe */
  .sectionUne p {
    margin: 0 60px;
    max-width: 660px;
    background-color: gainsboro;
    font-size: 15px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionUne ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== SectionDEUX ===================================================== */

  .sectionDeux {
    width: 100%;
    height: 1708px;
    margin: 0;
    padding: 0;
  }
  /* le titre de sectionDeux */
  .sectionDeux h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* les citation: positionnement  */
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
  /*la couleur une citation */
  .c1 {
    background-color: yellow;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /*la couleur une citation */
  .c2 {
    background-color: #ffff99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /*la couleur une citation */
  .c3 {
    background-color: #ffcc99;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /*la couleur une citation */
  .c4 {
    background-color: #cc9999;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /*la couleur une citation */
  .c5 {
    background-color: #cc3333;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /*la couleur une citation */
  .c6 {
    background-color: #ff99cc;
    border-radius: 11px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionDEUX ===================================================== */

  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
  .sectionTrois {
    width: 100%;
    height: 1055px;
  }
  /* le titre du sectionTrois */
  .sectionTrois h2 {
    font-family: "Galada", cursive;
    padding: 4%;
  }
  /* la taille de l'image */
  .img-trois {
    width: 65%;
    height: 42%;
  }
  /* les paragraphe */
  .sectionTrois p {
    margin: 0 60px;
    width: 65%;
    font-size: 20px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ==================================================== Fin de SectionTrois ===================================================== */
}
</style>
