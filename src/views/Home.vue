<template>
  <div class="wrap">
    <mynav />
    <!--  HEADER -->
    <div class="header">
      <img src="../assets/5f5398cd21c1a.jpg" alt="mon img" />
      <router-link to="/decouvrir">
        <button class="bouton1">découvrir</button>
      </router-link>
    </div>
    <!--  FIN DU  NAVBAR -->

    <!--  SECTION 1 -->
    <div class="sectionUne">
      <h2>Les types de cheveux</h2>

      <div class="main-sectionUne clearfix">
        <div class="crépus">
          <img
            src="../assets/woman-wearing-yellow-and-grey-beaded-accessory-3307758.jpg"
            alt="mon img"
          />
          <div class="overlay">
            <router-link to="/myproduitcrepus">
              <h3>Cheveux crépus</h3>
            </router-link>
          </div>
        </div>
        <div class="frisés">
          <img src="../assets/marielle.jpg" alt="mon img" />
          <div class="overlay">
            <router-link to="/produitf">
              <h3>Cheveux frisés</h3>
            </router-link>
          </div>
        </div>
        <div class="boucle">
          <img src="../assets/bouclé-3.jpg" alt="mon img" />
          <div class="overlay">
            <router-link to="/produitb">
              <h3>Cheveux bouclés</h3>
            </router-link>
          </div>
        </div>
        <div class="lisse">
          <img src="../assets/cheveux lisse.jpg" alt="mon img" />
          <div class="overlay">
            <router-link to="/produitl">
              <h3>Cheveux lisses</h3>
            </router-link>
          </div>
        </div>
      </div>
      <p class="pc">
        Les cheveux sont un symbole de séduction et de beauté pour la Femme, de
        force pour l’Homme. Au travers de notre coiffure, nous exprimons souvent
        notre personnalité. Une coiffure originale exprime une personnalité
        créative et extravertie, des cheveux toujours bien attachés, toujours de
        la même façon le sens de l’ordre, et un certain désintérêt pour les
        choses de la mode. Et quel intense sentiment de liberté que les cheveux
        lâchés, flottant au gré du vent
      </p>
    </div>
    <!--  FIN DE LA SECTION 1 -->
    <!--  SECTION 2 -->
    <div class="ctn1"></div>
    <!--  FIN DE LA SECTION 2 -->

    <div class="container">
      <div class="section-header">
        <h2>Nos Produits</h2>
      </div>

      <div class="row">
        <div class="col" v-for="produit in produits" :key="produit.id">
          <div class="single-publication">
            <figure>
              <a>
                <img
                  v-if="produit.Images[0] !== undefined"
                  :src="require(`@/assets/${produit.Images[0].image}.jpg`)"
                  alt="`${produit.Images[0].image}`"
                  width="100"
                  height="150"
                />
              </a>
            </figure>

            <div class="publication-content">
              <h4>
                <router-link :to="`/dtproduit/${produit.id}`">
                  <a href="#">{{ produit.nom }}</a>
                </router-link>
              </h4>

              <h5 class="price">{{ produit.prix }} €</h5>
            </div>
            <div class="add-to-cart">
              <a
                @click="ajouter(produit.id, produit.nom, produit.prix)"
                class="default-btn"
                >Je craque</a
              >
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <!--  SECTION 4 -->
    <div class="sectionpromotion clearfix">
      <div class="sectionpromotionPremierDiv">
        <h2>Les promotions</h2>
      </div>
      <div class="promotion2 clearfix">
        <a href="#">
          <img class="image1" src="../assets/Promotion2.jpg" alt="mon img" />
        </a>
        <a href="#">
          <img class="image2" src="../assets//74.jpg" alt="mon img" />
        </a>
      </div>
      <p>
        Courts, longs, lisses, crépus… tous les types de cheveux peuvent être
        sublimés grâce à une routine beauté adapté. De beaux cheveux, c’est
        avant tout des cheveux en bonne santé : forts, brillants, et doux. Avoir
        des cheveux en bonne santé vous garanti un entretien plus facile au
        quotidien, avec des cheveux éclatants au naturel et qui se laissent
        coiffer facilement.
      </p>
    </div>
    <!--  FIN DE LA SECTION 4 -->
    <!--  SECTION 5 -->

    <div class="sectionvidéo clearfix">
      <h2>La communauté d'Afro Dream</h2>
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube.com/embed/LLJH45l3V_w"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube.com/embed/bhnvdD8PSdQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!--  Fin de la SECTION 5 -->
    <myfooter />
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
import mynav from "@/components/mynav.vue";
export default {
  name: "Home",
  components: {
    mynav,
    myfooter,
  },
  data() {
    return {
      produits: {},
    };
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/limit/4")
      .then((res) => {
        console.log(res);
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .wrap {
    width: 100%;
  }
  .bouton1 {
    background-color: #fabb1f;;
    padding: 10px 30px;
    text-decoration: none;
    position: absolute;
    left: 187px;
    bottom: 78%;
    border-radius: 20px;
    color: white;
    border: none;
    font-family: "Playfair Display", serif;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 867px;
  }
  .header img {
    width: 100%;
  }
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .sectionUne {
    width: 100%;
    height: 654px;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  h3 {
    color: #fabb1f;
    font-family: "Playfair Display", serif;
    position: absolute;
    top: 36%;
    font-size: 36px;
  }
  /*taile de l'image */
  .crépus {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 2%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .crépus .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .crépus:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .crépus img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .crépus:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .crépus:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  /*taile de l'image */
  .frisés {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .frisés .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .frisés:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .frisés img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .frisés:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .frisés:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .boucle {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .boucle .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .boucle:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);

    transform: scale(1);
  }
  .boucle img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .boucle:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .boucle:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .lisse {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .lisse .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .lisse:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .lisse img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .lisse:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .lisse:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }

  /* le paragraphe */
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    font-size: 29px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  .ctn1 {
    height: 315px;
    width: 100%;
    background-image: url("../assets/fille.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  /*Le titre de la section*/
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: #fabb1f;
    font-size: 46px;
  }
  /* positionnement du produit */
  .single-publication {
    --auto-grid-min-size: 11rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 10px 0 0 0;
    padding: 0;
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 100%;
    /* rectangle*/
    border: none;
    overflow: hidden;
  }
  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  .single-publication figure > a {
    background-color: white;
    display: block;
  }
  /* la positionnement du nom et du prix produit */
  .single-publication .publication-content {
    text-align: center;
    padding: 20px;
    height: 164px;
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }
  /* La police du prix: couleur, la taille, l'epaisseur  */
  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }

  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.88 !important;
    visibility: hidden;
    text-align: center;
    height: 105px;
    transform: scale(0.7);
    transition: 0.4s;
  }
  .single-publication:hover .add-to-cart {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
  /* le positionnement du bouton */
  .single-publication .add-to-cart .default-btn {
    margin-top: 5px;
    padding: 8px 25px;
    font-size: 14px;
  }
  /* le bouton : je craque */
 .default-btn {
    background-image: linear-gradient(
      to right,
      #ff0084 0%,
      #33001b 51%,
      #ff0084 100%
    );
    color: #fff;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  .sectionpromotion {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
  .sectionpromotionPremierDiv h2 {
    text-align: center;
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  .sectionpromotion p {
    width: 100;
    text-align: center;
    display: table;
    font-size: 23px;
  }
  /*le positionnement de l'image*/
  .sectionpromotion img {
    float: left;
    width: 30%;
    height: 23%;
  }
  /*taile de l'image */
  .image1 {
    width: 35%;
    height: 352px;
    margin-left: 17%;
  }
  .image2 {
    float: left;
    width: 25%;
    height: 352px;
    margin-left: 5%;
  }

  /* ====================================================== SECTION 6 ========================================================= */
  .sectionvidéo {
    width: 100%;
    height: 338px;
    background-color: white;
    text-align: center;
  }
  .sectionvidéo h2 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  /* ====================================================== SECTION 6 ========================================================= */
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .wrap {
    width: 100%;
  }
  /*le bouton et le positionnement du bouton*/
  .bouton1 {
      background-image: linear-gradient(to left, yellow 0%, orange 100%);
    padding: 10px 30px;
    text-decoration: none;
    position: absolute;
    left: 187px;
    bottom: -162px;
    border-radius: 20px;
    color: white;
    border: none;
    font-family: "Playfair Display", serif;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 867px;
  }
  .header img {
    width: 100%;
  }
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .sectionUne {
    width: 100%;
    height: 654px;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  h3 {
    color: #fabb1f;
    font-family: "Playfair Display", serif;
    position: absolute;
    top: 36%;
    font-size: 36px;
  }
  /*taile de l'image */
  .crépus {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 2%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .crépus .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .crépus:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .crépus img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .crépus:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .crépus:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  /*taile de l'image */
  .frisés {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .frisés .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .frisés:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .frisés img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .frisés:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .frisés:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .boucle {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }

  .boucle .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .boucle:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);

    transform: scale(1);
  }
  .boucle img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .boucle:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .boucle:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .lisse {
    width: 20%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .lisse .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .lisse:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .lisse img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .lisse:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }

  .lisse:hover h3 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .sectionUne a {
    text-decoration: none;
    color: #fabb1f;;
  }
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    font-size: 29px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  .ctn1 {
    height: 315px;
    width: 100%;
    background-image: url("../assets/fille.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: #fabb1f;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 10rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 10px 0 0 0;
    padding: 0;
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 100%;
    /* rectangle*/
    border: none;
    overflow: hidden;
  }
  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  .single-publication figure > a {
    background-color: white;
    display: block;
  }
  /* la positionnement du nom et du prix produit */
  .single-publication .publication-content {
    text-align: center;
    padding: 20px;
    height: 164px;
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.28;
    visibility: hidden;
    text-align: center;
    height: 105px;
    transform: scale(0.7);
    transition: 0.4s;
  }
  .single-publication:hover .add-to-cart {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
  .single-publication .add-to-cart .default-btn {
    margin-top: 5px;
    padding: 8px 25px;
    font-size: 14px;
  }
  /* le bouton : je craque */
 .default-btn {
    background-image: linear-gradient(
      to right,
      #ff0084 0%,
      #33001b 51%,
      #ff0084 100%
    );
    color: #fff;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  .sectionpromotion {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
  .sectionpromotion p {
    width: 100;
    text-align: center;
    display: table;
    font-size: 23px;
  }
  /*le positionnement de l'image*/
  .sectionpromotion img {
    float: left;
    width: 30%;
    height: 23%;
  }
  /*taile de l'image */
  .image1 {
    width: 35%;
    height: 352px;
    margin-left: 17%;
  }
  .image2 {
    float: left;
    width: 25%;
    height: 352px;
    margin-left: 5%;
  }
  .sectionpromotionPremierDiv h2 {
    text-align: center;
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  /* ====================================================== SECTION 6 ========================================================= */
  .sectionvidéo {
    width: 100%;
    height: 338px;
    background-color: white;
    text-align: center;
  }
  .sectionvidéo h2 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  .video {
    width: 33%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 100%;
  }
  /*le bouton et le positionnement du bouton*/
  .bouton1 {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    padding: 10px 30px;
    text-decoration: none;
    position: absolute;
    left: 129px;
    top: 13%;
    border-radius: 20px;
    color: white;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 547px;
  }
  .header img {
    width: 100%;
  }
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  /*le positonnement du titre h2*/
  .sectionUne {
    width: 100%;
    height: 1337px;
  }
  .sectionUne img {
    width: 100%;
    height: 50%;
  }
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 35px;
  }
  /*l'ensemble de image*/
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    width: 69%;
    margin-left: 113px;
    font-size: 28px;
  }
  .sectionUne a {
    text-decoration: none;
    color: #fabb1f;;
  }
  /*taile de l'image */
  .crépus {
    width: 40%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .crépus p {
    text-align: center;
    left: 100px;
    font-size: 22px;
    position: absolute;
    top: -3px;
  }
  .crépus a {
    text-align: center;
    position: absolute;
    font-size: 26px;
    left: 85px;
    top: 380px;
  }
  .crépus .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .crépus:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .crépus img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .crépus:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
    
  }
  .crépus a,
  .crépus p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .crépus:hover a,
  .crépus:hover p,
  .crépus:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .frisés {
    width: 40%;
    float: left;
    padding: 20px;
    margin-left: 10%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .frisés p {
    text-align: center;
    left: 100px;
    font-size: 22px;
    position: absolute;
    top: -3px;
  }
  .frisés a {
    text-align: center;
    position: absolute;
    font-size: 26px;
    left: 85px;
    top: 380px;
  }
  .frisés .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .frisés:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .frisés img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .frisés:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .frisés a,
  .frisés p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .frisés:hover a,
  .frisés:hover p,
  .frisés:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .boucle {
    width: 40%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .boucle p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 80px;
    top: -3px;
  }
  .boucle a {
    text-align: center;
    position: absolute;
    font-size: 26px;
    left: 85px;
    top: 380px;
  }
  .boucle .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .boucle:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .boucle img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .boucle:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .boucle a,
  .boucle p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .boucle:hover a,
  .boucle:hover p,
  .boucle:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .lisse {
    width: 40%;
    float: left;
    padding: 20px;
    margin-left: 7%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .lisse p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 80px;
    top: -3px;
  }
  .lisse a {
    text-align: center;
    position: absolute;
    font-size: 26px;
    left: 85px;
    top: 380px;
  }
  .lisse .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .lisse:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .lisse img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .lisse:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .lisse a,
  .lisse p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .lisse:hover a,
  .lisse:hover p,
  .lisse:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    font-size: 29px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  .ctn1 {
    height: 315px;
    width: 100%;
    background-image: url("../assets/fille.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: #fabb1f;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 14rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 10px 0 0 0;
    padding: 0;
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 100%;
    /* rectangle*/
    border: none;
    overflow: hidden;
  }
  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  .single-publication figure > a {
    background-color: white;
    display: block;
  }
  /* la positionnement du nom et du prix produit */
  .single-publication .publication-content {
    text-align: center;
    padding: 20px;
    height: 164px;
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.88 !important;
    visibility: hidden;
    text-align: center;
    height: 105px;
    transform: scale(0.7);
    transition: 0.4s;
  }
  .single-publication:hover .add-to-cart {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
  .single-publication .add-to-cart .default-btn {
    margin-top: 5px;
    padding: 8px 25px;
    font-size: 14px;
  }
  /* le bouton : je craque */
 .default-btn {
    background-image: linear-gradient(
      to right,
      #ff0084 0%,
      #33001b 51%,
      #ff0084 100%
    );
    color: #fff;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  .sectionpromotion {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
  /*le positionnement de l'image*/
  .sectionpromotion img {
    float: left;
    width: 38%;
    height: 23%;
  }
  /*taile de l'image */
  .image1 {
    width: 35%;
    height: 352px;
    margin-left: 16%;
  }
  .image2 {
    float: left;
    width: 25%;
    height: 352px;
    margin-left: 15%;
  }
  .sectionpromotion p {
    text-align: center;
    display: table;
    font-size: 20px;
    position: absolute;
    top: 192px;
    left: 404px;
  }
  .sectionpromotionPremierDiv h2 {
    text-align: center;
    font-size: 46px;
    font-family: "Galada", cursive;
  }
  /* ====================================================== SECTION 6 ========================================================= */
  .sectionvidéo {
    width: 100%;
    height: 652px;
    text-align: center;
  }
  .sectionvidéo h2 {
    font-size: 30px;
    font-family: "Galada", cursive;
  }
  .vidéo1 {
    margin-left: 48px;
    width: 351px;
  }
  .video2 {
    margin-left: 46px;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .wrap {
    width: 100%;
  }
  /*le bouton et le positionnement du bouton*/
  .bouton1 {
      background-image: linear-gradient(to left, yellow 0%, orange 100%);
    padding: 10px 30px;
    text-decoration: none;
    position: absolute;
    left: 37px;
    top: 21%;
    border-radius: 20px;
    color: white;
    font-family: "Playfair Display", serif;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 351px;
  }
  .header img {
    width: 100%;
  }
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .sectionUne {
    width: 100%;
    height: 2454px;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  h3 {
    color: #fabb1f;
    font-family: "Playfair Display", serif;
    position: absolute;
    bottom: 135px;
    font-size: 48px;
    left: 13px;
  }
  /*taile de l'image */
  .crépus {
    width: 82%;
    float: left;
    padding: 20px;
    margin-left: 9%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .crépus p {
    text-align: center;
    left: 37px;
    font-size: 22px;
    position: absolute;
    top: -13px;
  }
  .crépus a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .crépus .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .crépus:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .crépus img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .crépus:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .crépus a,
  .crépus p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .crépus:hover a,
  .crépus:hover p,
  .crépus:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .frisés {
    width: 82%;
    float: left;
    padding: 20px;
    margin-left: 9%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .frisés p {
    text-align: center;
    left: 37px;
    font-size: 22px;
    position: absolute;
    top: -13px;
  }
  .frisés a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .frisés .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .frisés:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .frisés img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .frisés:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .frisés a,
  .frisés p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .frisés:hover a,
  .frisés:hover p,
  .frisés:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .boucle {
    width: 82%;
    float: left;
    padding: 20px;
    margin-left: 9%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .boucle p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 35px;
    top: -13px;
  }
  .boucle a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .boucle .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .boucle:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .boucle img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .boucle:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .boucle a,
  .boucle p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .boucle:hover a,
  .boucle:hover p,
  .boucle:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .lisse {
    width: 82%;
    float: left;
    padding: 20px;
    margin-left: 9%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .lisse p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 35px;
    top: -13px;
  }
  .lisse a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .lisse .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 20%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .lisse:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .lisse img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .lisse:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .lisse a,
  .lisse p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .lisse:hover a,
  .lisse:hover p,
  .lisse:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .sectionUne a {
    text-decoration: none;
    color: #fabb1f;;
  }
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    font-size: 29px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  .ctn1 {
    height: 315px;
    width: 100%;
    background-image: url("../assets/fille.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: #fabb1f;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 14rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 10px 0 0 0;
    padding: 0;
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 100%;
    /* rectangle*/
    border: none;
    overflow: hidden;
  }
  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  .single-publication figure > a {
    background-color: white;
    display: block;
  }
  /* la positionnement du nom et du prix produit */
  .single-publication .publication-content {
    text-align: center;
    padding: 20px;
    height: 164px;
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.88 !important;
    visibility: hidden;
    text-align: center;
    height: 105px;
    transform: scale(0.7);
    transition: 0.4s;
  }
  .single-publication:hover .add-to-cart {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
  .single-publication .add-to-cart .default-btn {
    margin-top: 5px;
    padding: 8px 25px;
    font-size: 14px;
  }
  /* le bouton : je craque */
 .default-btn {
    background-image: linear-gradient(
      to right,
      #ff0084 0%,
      #33001b 51%,
      #ff0084 100%
    );
    color: #fff;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  .sectionpromotion {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
  /*le positionnement de l'image*/
  .sectionpromotion img {
    float: left;
    width: 38%;
    height: 23%;
    position: relative;
    margin-left: 28%;
  }
  /*taile de l'image */

  .sectionpromotion p {
    text-align: center;
    display: table;
    font-size: 20px;
  }
  .sectionpromotionPremierDiv h2 {
    text-align: center;
    font-size: 46px;
    font-family: "Galada", cursive;
  }
  /* ====================================================== SECTION 6 ========================================================= */
  .sectionvidéo {
    width: 100%;
    height: 653px;
    background-color: white;
    text-align: center;
  }
  .sectionvidéo h2 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  .video {
    width: 75%;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .wrap {
    width: 100%;
  }
  /*le bouton et le positionnement du bouton*/
  .bouton1 {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    padding: 10px 30px;
    text-decoration: none;
    position: absolute;
   left: 8px;
    top: 15%;
    border-radius: 20px;
    color: white;
    font-size: 16%;
    width: 32%;
    font-family: "Playfair Display", serif;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 237px;
  }
  .header img {
    width: 100%;
  }
  /*le menu*/
  .main-sectionUne {
    padding: 20px;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .sectionUne {
    width: 100%;
    height: 2194px;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
  /*le positonnement du titre h2*/
  .sectionUne h2 {
    text-align: center;
    color: #fabb1f;
    padding: 28px;
    font-family: "Playfair Display", serif;
    font-size: 46px;
  }
  /*l'ensemble de image*/
  .sectionUne img {
    width: 100%;
  }
  h3 {
    color: #fabb1f;
    font-family: "Playfair Display", serif;
    position: absolute;
    top: 36%;
    font-size: 36px;
  }
  /*taile de l'image */
  .crépus {
    width: 92%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .crépus p {
    text-align: center;
    left: 37px;
    font-size: 22px;
    position: absolute;
    top: -13px;
  }
  .crépus a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .crépus .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .crépus:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .crépus img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .crépus:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .crépus a,
  .crépus p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .crépus:hover a,
  .crépus:hover p,
  .crépus:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .frisés {
    width: 92%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .frisés p {
    text-align: center;
    left: 37px;
    font-size: 22px;
    position: absolute;
    top: -13px;
  }
  .frisés a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .frisés .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .frisés:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .frisés img {
    display: block;
    position: relative;
    transition: all 0.35s;
  }
  .frisés:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .frisés a,
  .frisés p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .frisés:hover a,
  .frisés:hover p,
  .frisés:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  /*taile de l'image */
  .boucle {
    width: 92%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .boucle p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 35px;
    top: -13px;
  }
  .boucle a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .boucle .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .boucle:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .boucle img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .boucle:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .boucle a,
  .boucle p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .boucle:hover a,
  .boucle:hover p,
  .boucle:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .lisse {
    width: 92%;
    float: left;
    padding: 20px;
    margin-left: 5%;
    margin-right: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
  }
  .lisse p {
    text-align: center;
    font-size: 22px;
    position: absolute;
    left: 35px;
    top: -13px;
  }
  .lisse a {
    text-align: center;
    position: absolute;
    font-size: 20px;
    left: 53px;
    top: 246px;
  }
  .lisse .overlay {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }
  .lisse:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
  }
  .lisse img {
    display: block;
    position: relative;
   
    transition: all 0.35s;
  }
  .lisse:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
    filter: brightness(0.6);
  }
  .lisse a,
  .lisse p {
    color: #fff;
    padding: 30px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(0, 100%, 0);
  }
  .lisse:hover a,
  .lisse:hover p,
  .lisse:hover h2 {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
  .sectionUne a {
    text-decoration: none;
    color: #fabb1f;;
  }
  .pc {
    text-align: center;
    color: #a17f73;
    font-family: "Galada", cursive;
    font-size: 28px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  .ctn1 {
    height: 315px;
    width: 100%;
    background-image: url("../assets/fille.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: #fabb1f;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 10rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    margin: 10px 0 0 0;
    padding: 0;
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 100%;
    /* rectangle*/
    border: none;
    overflow: hidden;
  }
  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  .single-publication figure > a {
    background-color: white;
    display: block;
  }
  /* la positionnement du nom et du prix produit */
  .single-publication .publication-content {
    text-align: center;
    padding: 20px;
    height: 164px;
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;

    padding-left: 5px;
    font-weight: 300;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.88 !important;
    visibility: hidden;
    text-align: center;
    height: 105px;
    transform: scale(0.7);
    transition: 0.4s;
  }
  .single-publication:hover .add-to-cart {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
  .single-publication .add-to-cart .default-btn {
    margin-top: 5px;
    padding: 8px 25px;
    font-size: 14px;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  .sectionpromotion {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
  /*le positionnement de l'image*/
  .sectionpromotion img {
    float: left;
    width: 38%;
    height: 23%;
    position: relative;
    margin-left: 28%;
  }
  /*taile de l'image */

  .sectionpromotion p {
    text-align: center;
    display: table;
    font-size: 20px;
  }
  .sectionpromotionPremierDiv h2 {
    text-align: center;
    font-size: 46px;
    font-family: "Galada", cursive;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 6 ========================================================= */
  .sectionvidéo {
    width: 100%;
    height: 693px;
    background-color: white;
    text-align: center;
  }
  .sectionvidéo h2 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  .video {
    width: 75%;
  }
}
</style>
