<template>
  <section>
    <div class="container">
      <mynavbar />
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <h3 class="display-5 mb-2 text-center">Mes commandes</h3>

          <!--  Au début tableau -->
          <table
            id="shoppingCart"
            class="table table-condensed table-responsive"
          >
            <thead>
              <!--  Au début titre du tableau -->
              <tr class="titre">
                <th style="width: 60%">N° de commande</th>
                <th style="width: 12%">Date</th>
                <th style="width: 10%">Status</th>
              </tr>
              <!--  Fin titre du tableau -->
            </thead>
            <tbody>
              <tr>
                <td class="cellule" data-th="Product">
                  <div class="row">
                    <div
                      class="col-md-9 text-left mt-sm-2"
                      v-for="commande in commande"
                      :key="commande.id"
                    >
                      <h4>{{ commande.nom }}</h4>
                      <p class="font-weight-light">
                        <i class="fas fa-arrow-left mr-2"></i>
                        <a href="#">Voir en détail la commande</a>
                      </p>
                    </div>
                  </div>
                </td>
                <td class="cellule" data-th="date">
                  {{ commande.created_at }}
                </td>
                <td class="cellule" data-th="Quantity">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    value="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <!--  Fin du tableau -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mynavbar from "@/components/mynavbar.vue";
export default {
  name: "commande",
  components: {
    mynavbar,
  },
  data() {
    return {
      commande: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/commande/show")
      .then((res) => {
        console.log(res);
        this.commande = res.data.commande;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* fond d'arrière-plan */
  section {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: absolute;
  }
  /* le titre */
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 49px;
  }
  /* le couleur de titre  */
  .titre {
    background: pink;
    opacity: 0.66;
  }
  /* intérieurs des cellules */
  .cellule {
    background: white;
    opacity: 0.66;
  }
  /* lien */
  a,
  i {
    color: red;
    font-size: 15px;
    text-decoration: none;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* arrière-plan */
  section {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: absolute;
  }
  /*le titre: commande */
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 49px;
  }
  /* couleur du fond des titre du tableau */
  .titre {
    background: pink;
    opacity: 0.66;
  }
  /* la couleur du fond du tableau */
  .cellule {
    background: white;
    opacity: 0.66;
  }
  /* les liens */
  a {
    color: red;
    font-size: 15px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* arrière-plan */
  section {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: absolute;
  }
  /*le titre  */
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 49px;
  }
  /* le couleur de fond des titres */
  .titre {
    background: pink;
    opacity: 0.66;
  }
  /* couleur du fond du tableau */
  .cellule {
    background: white;
    opacity: 0.66;
  }
  /*les liens */
  a {
    color: red;
    font-size: 15px;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* arrière-plan */
  section {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: absolute;
  }
  /*le titre */
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 39px;
  }
  /* le couleur du fond des titres */
  .titre {
    background: pink;
    opacity: 0.66;
  }
  /*la couleur du fond du tableau */
  .cellule {
    background: white;
    opacity: 0.66;
  }
  /* les liens */
  a {
    color: red;
    font-size: 15px;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* arrière-plan */
  section {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: absolute;
  }
  /* le titre */
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 39px;
  }
  /* le nom de commande */
  h4 {
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-size: 18px;
  }
  /* couleur du fond des titres */
  .titre {
    background: pink;
    opacity: 0.66;
  }
  /* la couleurs du fond */
  .cellule {
    background: white;
    opacity: 0.66;
  }
  /* les lien  */
  a,
  .fas {
    color: red;
    font-size: 10px;
  }
}
</style>
