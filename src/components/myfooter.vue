<template>
  <!-- Footer -->
  <footer
    class="page-footer font-small unique-color-dark"
    style="background-color: black"
  >
    <div style="background-color: black">
      <div class="container">
        <!-- Grid row-->
        <div class="row py-4 d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0">
              Connectez-vous avec nous sur les réseaux sociaux!
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-6 col-lg-7 text-center text-md-right">
            <!-- Facebook -->
            <a class="fb-ic">
              <i class="fab fa-facebook-f white-text mr-4"></i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fab fa-twitter white-text mr-4"></i>
            </a>

            <!--Instagram-->
            <a class="ins-ic">
              <i class="fab fa-instagram white-text"></i>
            </a>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </div>
    </div>

    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold">Afro Dream</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            Je suis ici pour vous servir. Ma plateforme va vous aider à vous
            consacrer du temps tout en vous facilitant la vie.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Produits</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            <a href="/produit">Nos produits</a>
          </p>
          <p>
            <a href="/myproduitcrepus">Cheveux crépus</a>
          </p>
          <p>
            <a href="/produitf">Cheveux frisés</a>
          </p>
          <p>
            <a href="/produitb">Cheveux bouclés</a>
          </p>
          <p>
            <a href="produitl">Cheveux lisses</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">LIENS UTILES</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            <a href="/login">Se connecter</a>
          </p>
          <p>
            <a href="/profile">Votre compte</a>
          </p>

          <p>
            <a href="/newsletter">Newsletter</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><i class="fas fa-home mr-3"></i> Eragny sur Oise</p>
          <p><i class="fas fa-envelope mr-3"></i> contact@afro-dream.fr</p>
        
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright: Tallia-Anne Wambiekele Kiyeko
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "myfooter",
};
</script>

<style scoped>
footer {
  margin-top: 80px;
}
/* la police du copyright */
.footer-copyright {
  color: white;
}
/* la police titre: couleur et police personnaliser */
h6 {
  color: white;
  font-family: "Playfair Display", serif;
}
/* la police liens: couleur et police personnaliser  */
p {
  color: white;
  font-family: "Playfair Display", serif;
}
/* la police des liens: couleur et police personnaliser */
a {
  color: white;
  font-family: "Playfair Display", serif;
}
</style>
