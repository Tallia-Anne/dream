<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <a href="/">
        <img class="logo" src="../assets/Afro dream1.png" alt="mon img" />
      </a>

      <b-navbar-toggle b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown  text="Gamme" right>
            <b-dropdown-item href="/marquenatural">
              naturalong
            </b-dropdown-item>
            <b-dropdown-item href="/marqueasiam"> AS I AM </b-dropdown-item>
            <b-dropdown-item href="/marquecreme">
              Creme of nature pure honey
            </b-dropdown-item>
            <b-dropdown-item href="/marquenatu">
              Shea moisture
            </b-dropdown-item>
            <b-dropdown-item href="/marquemielle">
              Mielle organic
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav class="color">
            <b-nav-item href="/produit">Nos produits</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown text="Femme" right>
            <b-dropdown-item href="/myproduitcrepus">
              cheveux crépus
            </b-dropdown-item>
            <b-dropdown-item href="/produitf"> cheveux frisés </b-dropdown-item>
            <b-dropdown-item href="/produitb">
              cheveux bouclés
            </b-dropdown-item>
            <b-dropdown-item href="/produitl"> cheveux lisses </b-dropdown-item>
            <b-dropdown-item href="/huile"> Huile essentielle </b-dropdown-item>
               <b-dropdown-item href="/accessoire"> Accessoire</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav class="color">
            <b-nav-item href="/produitkids">Enfant</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="color">
            <b-nav-item href="/decouvrir"> A propos</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Compte</em>
            </template>
            <b-dropdown-item class="sous-menu color" href="/compte/:id"
              >Profil</b-dropdown-item
            >
            <b-dropdown-item class="sous-menu color" href="/dejacompte"
              >Se connecter</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="/panier">
            <i class="fa fa-shopping-basket color"></i>
          </b-nav-item>
          <b-nav-item href="/search">
            <i class="fas fa-search"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "mynav",
};
</script>

<style scoped>
/* la couleur navabar */
.navbar.bg-info {
    background-color: black !important;
}
/* la taille du logo*/
.logo {
  width: 60px;
}
/* positionnement du logo */
.logo img {
  left: 82px;
  width: 132%;
}
/* couleur de police */
.navbar-dark .navbar-nav .nav-link {
  color: white !important;
}
/* couleur de police */
em {
  color: white !important;
}
/* couleur de police */
.color {
  color: white;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgb(255 255 255) !important;
}
/* taille de panier */
.fa-shopping-basket:before {
  font-size: 21px;
}
/* taille de panier */
.fa-shopping-search:before {
  font-size: 21px;
}
navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: white;
}
navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link {
    color: white;
}
</style>
