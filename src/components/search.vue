
<template>
  <section class="our-publication">
    <mynav />

    <!-- Header -->
    <div class="header">
      <img class="header" src="../assets/My Post.jpg" alt="myheader" />
    </div>
    <!-- Header -->
    <!-- Section du produit -->
    <div class="container">
      <div class="section-header">
        <h2>Page de recherche</h2>
      </div>
      <div class="cont">
        <form class="form-inline md-form mr-auto mb-4">
          <label>Recherche par titre : </label>
          <input
            class="form-control mr-sm-2 color"
            type="text"
            placeholder="Rechercher"
            v-model="search"
          />
        </form>
      </div>

      <div class="row">
        <div class="col" v-for="produit in filteredproduit" :key="produit.id">
          <div class="single-publication">
            <figure>
              <a>
                <img
                  v-if="produit.Images[0] !== undefined"
                  v-bind:src="
                    require(`@/assets/${produit.Images[0].image}.jpg`)
                  "
                  alt="`${produit.Images[0].image}`"
                  width="100"
                  height="200"
                  v
                />
              </a>
            </figure>

            <div class="publication-content">
              <h3>
                <router-link :to="`/dtproduit/${produit.id}`">
                  <a href="#"> {{ produit.nom }}</a>
                </router-link>
              </h3>

              <h4 class="price">{{ produit.prix }} €</h4>
            </div>
            <div class="add-to-cart">
              <a
                @click="ajouter(produit.id, produit.nom, produit.prix)"
                class="default-btn"
                >Je craque</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter />
  </section>
  <!-- Section du produit -->
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";

export default {
  name: "search",
  components: { mynav, myfooter },

  data() {
    return {
      produits: {},
      search: "",
    };
  },

  computed: {
    filteredproduit() {
      return this.produits.filter((produit) => {
        return produit.nom.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/all")
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

<style scoped >
@media screen and (min-width: 1280px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 796px;
  }
  .container-img {
    width: 100%;
  }
  
  .single-publication {
    --auto-grid-min-size: 15rem;

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
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 55px;
    margin: 0;
    padding: 7%;
    background: url("https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
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
    background: black;
  }
  .single-publication .publication-content h3 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* la couleur de la police du titre du produit*/
  .single-publication .publication-content h3 a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }
  /* L'apparence du prix */
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
    box-shadow: 0 15px 30px 1px black;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
  label {
    font-family: "Playfair Display", serif;
  }
  /* l'apparence du input */
  .cont input {
    width: 400px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  .cont input:focus {
    background: #f9ebfb;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 896px;
  }
  .container-img {
    width: 100%;
  }
  .header img {
    width: 100%;
  }
  .container-img {
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
 
  .single-publication {
    --auto-grid-min-size: 13rem;
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
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    background: url("https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 55px;
    margin: 0;
    padding: 7%;
    text-align: center;
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
    background: black;
  }
  .single-publication .publication-content h3 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h3 a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }

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
    box-shadow: 0 15px 30px 1px black;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
  }
  label {
    font-family: "Playfair Display", serif;
  }
  /* l'apparence du input */
  .cont input {
    width: 400px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  .cont input:focus {
    background: #f9ebfb;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 510px;
  }
  .container-img {
    width: 100%;
  }
 
  .single-publication {
    --auto-grid-min-size: 13rem;
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
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 52px;
    margin: 0;
    padding: 7%;
    text-align: center;
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
    background: black;
  }
  .single-publication .publication-content h3 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h3 a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }

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
    box-shadow: 0 15px 30px 1px black;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  label {
    font-family: "Playfair Display", serif;
  }

  /* l'apparence du input */
  .cont input {
    width: 400px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  .cont input:focus {
    background: #f9ebfb;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 287px;
  }
  .container-img {
    width: 100%;
  }
  .single-publication {
    --auto-grid-min-size: 13rem;
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
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 35px;
    margin: 0;
    padding: 7%;
    text-align: center;
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
    background: black;
  }
  .single-publication .publication-content h3 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h3 a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }

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
    box-shadow: 0 15px 30px 1px black;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  label {
    font-family: "Playfair Display", serif;
  }

  /* l'apparence du input */
  .cont input {
    width: 400px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  .cont input:focus {
    background: #f9ebfb;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 204px;
  }
  .container-img {
    width: 100%;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 34px;
    margin: 0;
    padding: 7%;
    text-align: center;
  }
  .single-publication {
    --auto-grid-min-size: 13rem;
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
    border: 1px solid black;
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
    background: black;
  }
  .single-publication .publication-content h3 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h3 a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }

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
    box-shadow: 0 15px 30px 1px black;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  label {
    font-family: "Playfair Display", serif;
  }

  /* l'apparence du input */
  .cont input {
    width: 400px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  .cont input:focus {
    background: #f9ebfb;
  }
}
</style>