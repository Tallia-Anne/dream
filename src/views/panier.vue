<template>
  <section>
    <mynav />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <h3 class="display-5 mb-2 text-center">Panier</h3>

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
              <tr>
                <th style="width: 60%">Article</th>
                <th style="width: 12%">Prix</th>
                <th style="width: 10%">Quantité</th>
                <th style="width: 16%"></th>
              </tr>
              <!--  Fin titre du tableau -->
            </thead>
            <tbody>
              <tr>
                <td data-th="Product">
                  <div class="row">
                    <div class="col-md-3 text-left">
                      <img
                        src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                        alt
                        class="img-fluid d-none d-md-block rounded mb-2 shadow"
                      />
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                      <h4>Product Name</h4>
                      <p class="font-weight-light">Brand &amp; Name</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$49.00</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    value="1"
                  />
                </td>
                <td class="actions" data-th>
                  <div class="text-right">
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-sync"></i>
                    </button>
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-th="Product">
                  <div class="row">
                    <div class="col-md-3 text-left">
                      <img
                        src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                        alt
                        class="img-fluid d-none d-md-block rounded mb-2 shadow"
                      />
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                      <h4>Product Name</h4>
                      <p class="font-weight-light">Brand &amp; Name</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$49.00</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    value="1"
                  />
                </td>
                <td class="actions" data-th>
                  <div class="text-right">
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-sync"></i>
                    </button>
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-th="Product">
                  <div class="row">
                    <div class="col-md-3 text-left">
                      <img
                        src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                        alt
                        class="img-fluid d-none d-md-block rounded mb-2 shadow"
                      />
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                      <h4>Les produits</h4>
                      <p class="font-weight-light">Brand &amp; Name</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$49.00</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    value="1"
                  />
                </td>
                <td class="actions" data-th>
                  <div class="text-right">
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-sync"></i>
                    </button>
                    <button
                      class="btn btn-white border-secondary bg-white btn-md mb-2"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!--  Fin du tableau -->
          <div class="float-right text-right">
            <h4>Total:</h4>
            <h1>00</h1>
          </div>
        </div>
      </div>
      
      <div class="row mt-4 d-flex align-items-center">
        <!-- Bouton acheter-->
        <div class="col-sm-6 order-md-2 text-right">
          <a href="/paiement" class="btn btn-primary mb-4 btn-lg pl-5 pr-5"
            >Commander</a
          >
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
import myfooter from "@/components/myfooter.vue";
import mynav from "@/components/mynav.vue";
export default {
  name: "panier",
  components: {
    mynav,
    myfooter,
  },
};
</script>

<style scoped>
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
</style>
