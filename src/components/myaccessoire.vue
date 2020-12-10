<template>
  <section class="our-publication">
    <mynav />
    <div class="header">
      <img
        class="container-img"
        src="../assets/Page asseccoire.jpg"
        alt="mon image"
      />
    </div>
    <div class="container">
      <div class="section-header">
        <h2>ACCESSOIRES</h2>
      </div>
      <div class="section-paragraphe">
        <p>Les accessoires seront vos meilleurs amis</p>
      </div>

      <div class="row">
        <div class="col" v-for="produit in produits" :key="produit.id">
          <div class="single-publication">
            <figure>
              <a>
                <img
                  v-if="produit.Images[0] !== undefined"
                  :src="require(`@/assets/${produit.Images[0].image}.jpg`)"
                  alt="publication Image"
                  width="100"
                  height="200"
                />
              </a>
            </figure>

            <div class="publication-content">
              <h3>
                <router-link :to="`/dtproduit/${produit.id}`">
                  <a href>{{ produit.nom }}</a>
                </router-link>
              </h3>

              <h4 class="price">{{ produit.prix }} €</h4>
            </div>
            <div class="add-to-cart">
              <a
                @click="ajouter(produit.id, produit.nom, produit.prix, produit.Images[0].image)"
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
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  name: "myaccessoire",
  props: ["produits"],
  data() {
    return {
      Panier: [],
    };
  },

  components: {
    mynav,
    myfooter,
  },
  methods: {
    // de créer un panier
    ajouter: function (id, nom, prix, image) {
      alert(` le produit ${nom}`);
      this.Panier = this.Panier || [];
      localStorage.removeItem("panier");
      // le panier n'existe pas
      if (this.Panier.length === 0) {
        let quantite = 1;
        this.Panier.push({
          produitId: id,
          nom: nom,
          quantite: quantite,
          prix_unitaire: prix,
          soustotal: quantite * prix,
          image: image,
        });
      } else {
        // le panier existe déjà
        // le produit dèjà ajouter dans le panier
        let alreadyProduit = false;

        this.Panier.forEach((item) => {
          if (item.produitId === id) {
            item.quantite++;
            item.soustotal = item.quantite * prix;
            // le produit existe déjà
            alreadyProduit = true;
          }
        });
        // ajouter des produits differents
        if (alreadyProduit === false) {
          let quantite = 1;
          this.Panier.push({
            produitId: id,
            nom: nom,
            quantite: quantite,
            prix_unitaire: prix,
            soustotal: quantite * prix,
            image: image
          });
        }
      }
      localStorage.setItem("panier", JSON.stringify(this.Panier));
    },
    // permet voir si le panier fonctionne
    getLocalStorage() {
      let getLocalSt = localStorage.getItem("panier");
      if (getLocalSt != null || getLocalSt !== undefined) {
        this.Panier = JSON.parse(getLocalSt);
        console.log(this.Panier);
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 518px;
  }
  .container-img {
    width: 100%;
  }
  /* Le titre  */
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 55px;
    margin: 0;
    padding: 7%;
    text-align: center;
  }
  /* le paragraphe : la taille et  la police */
  .section-paragraphe {
    font-size: 35px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  /* la dispositionnement tes produits */
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

  .single-publication figure {
    position: relative;
    margin: 0;
    text-align: center;
  }
  /* les lien (nom ) */
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
  /*la police du prix: couleur, taille, épaisseur de la police  */
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
  /* le positionnement de la police et la taille  */
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
	box-shadow: 2px 2px 5px black;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 516px;
  }
  .header img {
    width: 100%;
  }
  /* l'image du header */
  .container-img {
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 516px;
  }
  /* le titre du produit */
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 55px;
    margin: 0;
    padding: 7%;
    text-align: center;
  }
  .section-paragraphe {
    font-size: 35px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  /* dispositionnement du produit */
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
  /* la taille de police */
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
  /* la police du prix: couleur, taille */
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
	box-shadow: 2px 2px 5px black;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 723px;
  }
  .container-img {
    width: 100%;
    height: 96%;
  }
  .section-paragraphe {
    font-size: 20px;
    font-family: "Playfair Display", serif;
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
  /*la police du prix */
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
	box-shadow: 2px 2px 5px black;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 315px;
  }
  .container-img {
    width: 100%;
  }
  .section-paragraphe {
    font-size: 28px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  /* le dispositionnement du produit */
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
  /* le titre du produit */
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
  /* la police du prix */
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
	box-shadow: 2px 2px 5px black;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .container {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 201px;
  }
  .container-img {
    width: 100%;
  }
  /* le titre du produit */
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 34px;
    margin: 0;
    padding: 7%;
    text-align: center;
  }
  .section-paragraphe {
    font-size: 14px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  /* dispositionnement des produit */
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
  /* la police du prix */
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
	box-shadow: 2px 2px 5px black;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
</style>
