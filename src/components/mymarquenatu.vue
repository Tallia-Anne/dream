<template>
  <section class="our-publication">
    <mynav />
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
          img-src="https://s3.thcdn.com/widgets/95-en/16/Hair-Care-05-032518-103816.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.beaute-test.com/img/BTMag/shea-moisture-630x350.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.superbeaute.fr/img/cms/page1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/87586195_3426451910717376_7785677750798385152_o.jpg?_nc_cat=111&_nc_sid=6e5ad9&_nc_ohc=SRGtfLcdEAcAX-GUYxA&_nc_oc=AQkEM5WsS05ykBikSH6bc7qYDSabyAIilEC1djrie6HBRNEKW9T2vfTRyG-rlvkLlL8&_nc_ht=scontent-cdg2-1.xx&oh=57a1807607e8b1e46b30e5ffa2c95f7c&oe=5F8EA45D"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>Shea moisture</h2>
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
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  name: "mymarquenatu",
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
    ajouter: function (id, nom, prix) {
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
    height: 590px;
  }
  .container-img {
    width: 100%;
  }
  .single-publication {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 17px 100px 0px -19px;
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
    border: 1px solid black;
    overflow: hidden;
  }
  /* le titre du produit */
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 55px;
    margin: 0;
    color: palevioletred;
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
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
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
    height: 501px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 17px 100px 0px -19px;
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 55px;
    color: palevioletred;
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
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
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
    height: 401px;
  }
  .container-img {
    width: 100%;
  }

  .single-publication {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 17px 30px 0px 0px;
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 52px;
    margin: 0;
    padding: 7%;
    color: palevioletred;
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
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
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
    height: 291px;
  }
  .container-img {
    width: 100%;
  }
  .single-publication {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 18px 55px 0px 2px;
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
    border: 1px solid black;
    overflow: hidden;
  }
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 35px;
    color: palevioletred;
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
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
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
  .section-header h2 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 24px;
    margin: 0;
    padding: 7%;
    color: palevioletred;
    text-align: center;
  }
  .single-publication {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 17px 100px 0px 0px;
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
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
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
</style>
