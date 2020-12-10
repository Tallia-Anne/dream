<template>
  <section>
    <mynav />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <h3 class="display-5 mb-2 text-center"> Votre Panier</h3>

          <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a class="bouton1" href="/">
              <i class="fas fa-arrow-left mr-2"></i> Continue Shopping
            </a>
          </div>
          <!--  Au début tableau -->
          <table
            id="shoppingCart"
            class="table table-condensed table-responsive"
          >
            <thead>
              <!--  Au début titre du tableau -->
              <tr  >
                <th style="width: 30%">Article</th>
                <th style="width: 12%">Prix</th>
                <th style="width: 10%">Quantité</th>
                <th style="width: 10%">soustotal</th>
                <th style="width: 16%"></th>
                
              </tr>
              <!--  Fin titre du tableau -->
            </thead>
            <tbody>
              <tr v-for="(item, index) in panier" :key="index" >
                <td data-th="Product">
                  <div class="row">
                    <div class="col-md-3 text-left">

                      <img
                        :src="require(`@/assets/${item.image}.jpg`)"
                        alt= "Product photo"
                        class="img-fluid d-none d-md-block rounded mb-2 shadow"
                      />
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">

                      <h4>{{ item.nom }}</h4>
                    </div>
                  </div>
                </td>
                <td data-th="Price"><h4>{{ item.prix_unitaire }} €</h4></td>
                <td data-th="Quantity">
                  <input type="button" class="btn btn-dark" @click="updateqtn(index)" value="-" />
            {{ item.quantite }}
            <input type="button" class="btn btn-dark" @click="update(index)" value="+" />
                </td>
                 <td><h4>{{ (item.quantite * item.prix_unitaire).toFixed(2) }} €</h4></td>
                <td class="actions" data-th>
                  <div class="text-right">
                    <button class="btn btn-danger btn-block" @click="supprimer(index)">
              <i class="fa fa-trash"></i>
            </button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
          <!--  Fin du tableau -->
          <div class="float-right text-right">
            <h3>Total:</h3>
            <h3>{{ total }}</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4 d-flex align-items-center">
        <!-- Bouton acheter-->
        <div class="col-sm-6 order-md-2 text-right">
          <button class="btn btn-primary mb-4 btn-lg pl-5 pr-5"  @click="valide"
            >Commander</button>
        </div>
        <!-- Bouton acheter-->
        <!-- Bouton continuer-->
        <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
          <a class="bouton1" href="/">
            <i class="fas fa-arrow-left mr-2"></i> Continue Shopping
          </a>
        </div>
        <!-- Bouton continuer-->
      </div>
    </div>
    <myfooter />
  </section>
</template>

<script>
 import VueJwtDecode from "vue-jwt-decode"; 
import myfooter from "@/components/myfooter.vue";
import mynav from "@/components/mynav.vue";
export default {
  name: "Mypanier",
  components: {
    mynav,
    myfooter,
  },
   props: ["panier"],
  data() {
    return {};
  },
  computed: {
    total: function () {
      let total = 0;
      for (let el of this.panier) {
        total += el.prix_unitaire * el.quantite;
      }
      return total.toFixed(2);
    },
  },
   methods: {
    update: function (index) {
      this.panier[index].quantite++;
      this.panier[index].soustotal = this.panier[index].quantite * this.panier[index].prix_unitaire;
      console.log(this.panier);
      localStorage.removeItem("panier");
      localStorage.setItem("panier", JSON.stringify(this.panier));
    },
    updateqtn: function (index) {
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite--;
        console.log(this.panier);
        localStorage.removeItem("panier");
        localStorage.setItem("panier", JSON.stringify(this.panier));
      } else {
        this.supprimer(index);
      }
    },
    supprimer: function (index) {
      this.panier.splice(index, 1);
      localStorage.removeItem("panier");
      if (this.panier.length > 0) {
        localStorage.setItem("panier", JSON.stringify(this.panier));
      }
    },
    valide: function () {
        if (localStorage.getItem("token")) {
        var client = VueJwtDecode.decode(localStorage.getItem("token")); 

      var produitId = [];
      var quantiteprix = { prix: "", qtn: "" };
      var prix = [];
      var quantite = [];
      this.panier.forEach((item) => {
        produitId.push(item.produitId);
        quantiteprix.prix = item.prix_unitaire;
        quantiteprix.qtn = item.quantite;
        prix.push(item.prix_unitaire);
        quantite.push(item.quantite);
      });
      this.axios
        .post("http://localhost:3000/commande/new", {
          clientId: client.id,
          panier: this.panier,
          produitId: produitId,
          quantite: quantite,
          prix: prix,
          quantiteprix: quantiteprix,
        })
        .then((res) => {
          console.log(res.data);
             this.$router.push({
              name: "paiement",
              params: { total: this.total },
            }); 
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
        } else {
        this.$router.push({ name: "login" });
      } 
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
/* le titre */
h3 {
  font-family: "Playfair Display", serif;
  font-size: 49px;
}
/* le bouton */
.btn-primary {
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  border: none;
}
/* le lien */
a {
  color: yellow;
  font-size: 25px;
}
h4 {
  font-size: 22px;
}
/* l'apparence du tableau */
table {
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.btn-danger, .btn-primary {
  box-shadow: 2px 2px 5px black;
}
.btn-danger:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}
.btn-primary:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
a:hover {
    color: yellow;
    text-decoration: none;
}
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
/* le titre */
h3 {
  font-family: "Playfair Display", serif;
  font-size: 49px;
}
/* le bouton */
.btn-primary {
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  border: none;
}
/* le lien */
a {
  color: yellow;
  font-size: 25px;
}
h4 {
  font-size: 22px;
}
/* l'apparence du tableau */
table {
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.btn-danger, .btn-primary {
  box-shadow: 2px 2px 5px black;
}
.btn-danger:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}
.btn-primary:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
a:hover {
    color: yellow;
    text-decoration: none;
}
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
/* le titre */
h3 {
  font-family: "Playfair Display", serif;
  font-size: 49px;
}
/* le bouton */
.btn-primary {
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  border: none;
}
/* le lien */
a {
  color: yellow;
  font-size: 25px;
}
h4 {
  font-size: 14px;
}
/* l'apparence du tableau */
table {
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.btn-danger, .btn-primary {
  box-shadow: 2px 2px 5px black;
}
.btn-danger:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}
.btn-primary:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
a:hover {
    color: yellow;
    text-decoration: none;
}
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
/* le titre */
h3 {
  font-family: "Playfair Display", serif;
  font-size: 39px;
}
/* le bouton */
.btn-primary {
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  border: none;
}
/* le lien */
a {
  color: yellow;
  font-size: 25px;
}
h4 {
 font-size: 11px;

}
/* l'apparence du tableau */
table {
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.btn-danger, .btn-primary {
  box-shadow: 2px 2px 5px black;
}
.btn-danger:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}
.btn-primary:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
a:hover {
    color: yellow;
    text-decoration: none;
}
}
@media screen and (min-width: 320px) and (max-width: 479px) {
/* le titre */
h3 {
  font-family: "Playfair Display", serif;
  font-size: 29px;
}
/* le bouton */
.btn-primary {
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  border: none;
}
/* le lien */
a {
  color: yellow;
  font-size: 25px;
}
h4 {
  font-size: 10px;
}
/* l'apparence du tableau */
table {
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.btn-danger, .btn-primary {
  box-shadow: 2px 2px 5px black;
}
.btn-danger:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}
.btn-primary:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
a:hover {
    color: yellow;
    text-decoration: none;
}
}
</style>
