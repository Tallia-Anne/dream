<template>
  <div>
    <mynav />
    <div class="container mt-5">
      <!-- titre du produit -->
      <div class="row">
        <h1 class="col-md-12">{{ produit.nom }}</h1>
      </div>
      <!--  fin titre du produit -->
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            v-if="produit.Images"
            :src="require(`@/assets/${produit.Images[0].image}.jpg`)"
            class="card-img-top"
            alt="`${produit.Images[0].image}`"
          />
        </div>
        <div class="col-md-6">
          <div class="paragraphe1 row">
            Description:
            <br />
            {{ produit.description }}
          </div>
          <div class="paragraphe2 row">
            <p>prix: {{ produit.prix }} €</p>
          </div>
          <div class="row mt-4">
            <div>
              <button class="panier">
                <i class="fa fa-shopping-basket"></i> Panier
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="paragraphe3 row">
            <p>
              Composition:
              <br />
              {{ produit.composition }}
            </p>
          </div>
        </div>
      </div>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              ><i class="fa fa-plus-circle"> Application</i></b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{ produit.application }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info"
              ><i class="fa fa-plus-circle"> Typeproduit</i></b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ produit.typeproduit }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info">
              <i class="fa fa-plus-circle"> Contenance</i>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ produit.contenance }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <myfooter />
  </div>
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";

export default {
  name: "dtproduit",

  components: {
    mynav,
    myfooter,
  },
  data() {
    return {
      produit: {},
      id: this.$route.params.id,
      tabIndex: 0,
    };
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/getById/" + this.id)
      .then((res) => {
        console.log(res);
        this.produit = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      });
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* le titre du produit */
  h1 {
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  /* description du produit */
  .paragraphe1 {
    font-family: "Playfair Display", serif;
    font-size: 23px;
    color: white;
    background-color: gray;
    border-radius: 7px;
    box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
    padding: 10%;
  }
  /* le prix */
  .paragraphe2 {
    font-family: "Playfair Display", serif;
    font-size: 38px;
    position: relative;
    margin-left: 35%;
    margin-top: 9%;
  }
  /* les compositions du produit */
  .paragraphe3 {
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: black;

    padding: 10%;
  }
  /* le panier: couleur, la taille et la placement du produit */
  .panier {
    background: black;
    color: #fff;
    width: 255px;
    font-size: 27px;
    height: 50px;
    border: none;
    border-radius: 7px;
    left: 29%;
    position: absolute;
    box-shadow: 0 9px 25px -5px gray;
  }
  .panier:hover {
    border: 1px solid rgba(255, 146, 202, 0.75) 0%;
  }
  .card {
    border: none;
  }
  .btn:hover {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* le nom du produit */
  h1 {
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  /* la description du produit */
  .paragraphe1 {
    font-family: "Playfair Display", serif;
    font-size: 23px;
    color: white;
    background-color: gray;
    border-radius: 7px;
    box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
    padding: 10%;
  }
  /* prix */
  .paragraphe2 {
    font-family: "Playfair Display", serif;
    font-size: 38px;
    position: relative;
    margin-left: 35%;
    margin-top: 9%;
  }
  /* la composition du produit */
  .paragraphe3 {
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: black;
    padding: 10%;
  }
  /* panier: la couleur, la taille et le positionnement de la panier */
  .panier {
    background: black;
    color: #fff;
    width: 255px;
    font-size: 27px;
    height: 50px;
    border: none;
    border-radius: 7px;
    left: 29%;
    position: absolute;
    box-shadow: 0 9px 25px -5px gray;
  }
  .panier:hover {
    border: 1px solid rgba(255, 146, 202, 0.75) 0%;
  }
  .card {
    border: none;
  }
  .btn {
    background: black;
  }
  .btn:hover {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* titre du produit */
  h1 {
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  /* description du produit */
  .paragraphe1 {
    font-family: "Playfair Display", serif;
    font-size: 23px;
    color: white;
    background-color: gray;
    border-radius: 7px;
    box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
    padding: 10%;
  }
  /* le prix */
  .paragraphe2 {
    font-family: "Playfair Display", serif;
    font-size: 38px;
    position: relative;
    margin-left: 25%;
    margin-top: 9%;
  }
  /* la composition du produit */
  .paragraphe3 {
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: black;
    padding: 10%;
  }
  /* le panier: la taille , la couleur et l'emplacement */
  .panier {
    background: black;
    color: #fff;
    width: 255px;
    font-size: 27px;
    height: 50px;
    border: none;
    border-radius: 7px;
    left: 19%;
    position: absolute;
  }
  .btn {
    background: black;
  }
  .btn:hover {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* titre du produit*/
  h1 {
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  /* la description du produit */
  .paragraphe1 {
    font-family: "Playfair Display", serif;
    font-size: 23px;
    color: white;
    background-color: gray;
    border-radius: 7px;
    box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
    padding: 10%;
  }
  /*le prix */
  .paragraphe2 {
    font-family: "Playfair Display", serif;
    font-size: 38px;
    position: relative;
    margin-left: 25%;
    margin-top: 9%;
  }
  /* composition du produit */
  .paragraphe3 {
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: black;
    padding: 10%;
  }
  /* la panier: la taille, la couleur et l'emplacement */
  .panier {
    background: black;
    color: #fff;
    width: 255px;
    font-size: 27px;
    height: 50px;
    border: none;
    border-radius: 7px;
    left: 19% !important;
    position: absolute;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* le titre du produit */
  h1 {
    font-family: "Playfair Display", serif;
    padding: 4%;
  }
  /* description du produit */
  .paragraphe1 {
    font-family: "Playfair Display", serif;
    font-size: 23px;
    color: white;
    background-color: gray;
    border-radius: 7px;
    box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
    padding: 10%;
  }
  /* le prix */
  .paragraphe2 {
    font-family: "Playfair Display", serif;
    font-size: 38px;
    position: relative;
    margin-left: 15%;
    margin-top: 9%;
  }
  /* la composition du produit */
  .paragraphe3 {
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: black;
    padding: 10%;
  }
  /* le panier: la couleur, la taille et l'emplacement */
  .panier {
    background: black;
    color: #fff;
    width: 155px;
    font-size: 27px;
    height: 50px;
    position: relative;
    margin-left: 52%;
    border: none;
    border-radius: 7px;
  }
}
</style>
