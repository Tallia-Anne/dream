<template>
  <div>
    <mynav />
    <div class="container mt-5">
      <div class="row">
        <h1 class="col-md-12">{{ produit.nom }}</h1>
      </div>
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
    </div>

    <div class="container">
      <div class="row">
        <h2>ARTICLES COMPLÉMENTAIRES</h2>
        <huilesimilaire />
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";
import huilesimilaire from "@/components/huilesimilaire";
export default {
  name: "dthuile",

  components: {
    mynav,
    myfooter,
    huilesimilaire,
  },
  data() {
    return {
      produit: {},
      id: this.$route.params.id,
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/getById/" + this.id)
      .then((res) => {
        console.log(res);
        this.produit = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
h1 {
  font-family: "Playfair Display", serif;
  padding: 4%;
}
.paragraphe1 {
  font-family: "Playfair Display", serif;
  font-size: 23px;
  color: white;
  background-color: gray;
  border-radius: 7px;
  box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
  padding: 10%;
}
.paragraphe2 {
  font-family: "Playfair Display", serif;
  font-size: 38px;
  position: relative;
  margin-left: 35%;
  margin-top: 9%;
}
.paragraphe3 {
  font-family: "Playfair Display", serif;
  font-size: 18px;
  color: black;

  padding: 10%;
}
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
}
.card {
  text-align: center;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 14px 22px 2px rgba(0, 0, 0, 0.75);
  margin-bottom: 100px;
}
</style>
