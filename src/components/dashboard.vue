<template>
<div>
     <dash />
    <section id="main-dashboard-content">
      <h1 class="welcome-title">Bienvenue dans l'espace adminstration</h1>
      <div class="row mb-2 ">
          <!-- sectionUne -->
      <div class="col-md-4 mb-5 card-produit">
         <div class="card bg-primary mb-3 text-center">
            <div class="card-body color">
               <h2>Produit</h2>
                 <div class="icon"><i class="fas fa-shopping-cart"></i></div>
                 <h6><a href="/listproduit">Détails tous les produits</a></h6>
            </div>
         </div>
      </div>
      
      <!-- Fin de sectionUne -->
      <!-- sectionDeux -->
      <div class="col-md-4 mb-5 card-produit">
         <div class="card bg-primary mb-3 text-center">
            <div class="card-body color-1">
               <h2>Utilisateur</h2>
                 <div class="icon"><i class="fas fa-user"></i></div>
                 <h6><a href="/listuser">Détails tous les utilisateurs</a></h6>
            </div>
         </div>
      </div>
      <!-- Fin de sectionDeux -->
      <!-- sectionTrois -->
      <div class="col-md-4 mb-5 card-produit">
         <div class="card bg-primary mb-3 text-center">
            <div class="card-body color-2">
               <h2>Commandes</h2>
                 <div class="icon"><i class="fas fa-truck"></i></div>
                 <h6><a href="/listcommande">Détails tous les commandes</a></h6>
            </div>
         </div>
      </div>
      <!-- Fin de sectionTrois -->
       </div>
    </section>
</div>
</template>

<script>
/* inportation de dash */
import dash from "../components/dash";
export default {
    /* le nom du component */
 name: "dashboard",
 /* le component qu'on veut importer */
 components: {dash}
}
</script>

<style scoped>
@media screen and (min-width: 1280px) {
 /* le positionnement l'ensemble */   
#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
}
.bg-primary {
     background-color: white!important; 
}
/*l'apparence du bloc de listproduit */
.color{
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px #fcd9b8;
}
/*l'apparence du bloc de listuser */
.color-1{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #fad0c4;
}
/*l'apparence du bloc de listcommande */
.color-2{
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #FCE8F8;
}
.cont:hover .box-icon-effect-1a .box-icon i {
    background: #fff;
    color: #3acf87
}

.content-box:hover .box-icon-effect-1a .box-icon i:after {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1
}
/* les titre des bloc */
h2{
    color: #fff;
}
/* l'apparence et la taille des icones */
.fa-user, .fa-truck, .fa-shopping-cart {
    color: #fff;
    font-size: 29px;
}
/* les liens :  le positionnement et la taille  */
 h6 {
     font-size:  18px;
     text-align: center;
     
 }
/* les liens : apparence,   */
a {
    color: #fff;
    text-decoration: none;
}
/* animation des lien sur la couleur */
a:hover {
    color:#FF6B95;
    text-decoration: none;
}
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
 /* le positionnement l'ensemble */   
#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
}
.bg-primary {
     background-color: white!important; 
}
/*l'apparence du bloc de listproduit */
.color{
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px #fcd9b8;
}
/*l'apparence du bloc de listuser */
.color-1{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #fad0c4;
}
/*l'apparence du bloc de listcommande */
.color-2{
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #FCE8F8;
}
/* les titre des bloc */
h2{
    color: #fff;
}
/* l'apparence et la taille des icones */
.fa-user, .fa-truck, .fa-shopping-cart {
    color: #fff;
    font-size: 29px;
}
/* les liens :  le positionnement et la taille  */
 h6 {
     font-size:  18px;
     text-align: center;
     
 }
/* les liens : apparence,   */
a {
    color: #fff;
    text-decoration: none;
}
/* animation des lien sur la couleur */
a:hover {
    color:#FF6B95;
    text-decoration: none;
}
}
@media screen and (min-width: 768px) and (max-width: 1024px)   {
 /* le positionnement l'ensemble */   
#main-dashboard-content {
    margin-left: 87px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
}
.bg-primary {
     background-color: white!important; 
}
/*l'apparence du bloc de listproduit */
.color{
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px #fcd9b8;
}
/*l'apparence du bloc de listuser */
.color-1{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #fad0c4;
}
/*l'apparence du bloc de listcommande */
.color-2{
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #FCE8F8;
}
/* les titre des bloc */
h2{
    color: #fff;
    font-size: 23px;
}
/* l'apparence et la taille des icones */
.fa-user, .fa-truck, .fa-shopping-cart {
    color: #fff;
    font-size: 29px;
}
/* les liens :  le positionnement et la taille  */
 h6 {
     font-size:  18px;
     text-align: center;
     
 }
/* les liens : apparence,   */
a {
    color: #fff;
    text-decoration: none;
}
/* animation des lien sur la couleur */
a:hover {
    color:#FF6B95;
    text-decoration: none;
}
}
@media screen and (min-width: 480px) and (max-width: 767.9px)  {
 /* le positionnement l'ensemble */   
#main-dashboard-content {
 margin-left: 93px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
}
.bg-primary {
     background-color: white!important; 
}
/*l'apparence du bloc de listproduit */
.color{
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px #fcd9b8;
}
/*l'apparence du bloc de listuser */
.color-1{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #fad0c4;
}
/*l'apparence du bloc de listcommande */
.color-2{
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #FCE8F8;
}
/* les titre des bloc */
h2{
    color: #fff;
}
/* l'apparence et la taille des icones */
.fa-user, .fa-truck, .fa-shopping-cart {
    color: #fff;
    font-size: 29px;
}
/* les liens :  le positionnement et la taille  */
 h6 {
     font-size:  18px;
     text-align: center;
     
 }
/* les liens : apparence,   */
a {
    color: #fff;
    text-decoration: none;
}
/* animation des lien sur la couleur */
a:hover {
    color:#FF6B95;
    text-decoration: none;
}
}
@media screen and (min-width: 320px) and (max-width: 479px)  {
 /* le positionnement l'ensemble */   
#main-dashboard-content {
  margin-left: 76px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
 /* Le titre  */
.welcome-title {
  font-size: 25px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
}
.bg-primary {
     background-color: white!important; 
}
/*l'apparence du bloc de listproduit */
.color{
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px #fcd9b8;
}
/*l'apparence du bloc de listuser */
.color-1{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #fad0c4;
}
/*l'apparence du bloc de listcommande */
.color-2{
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    border-radius: 7px;
    box-shadow: 10px 15px 5px 3px  #FCE8F8;
}
/* les titre des bloc */
h2{
    color: #fff;
    font-size:  18px;
}
/* l'apparence et la taille des icones */
.fa-user, .fa-truck, .fa-shopping-cart {
    color: #fff;
    font-size: 29px;
}
/* les liens :  le positionnement et la taille  */
 h6 {
     font-size:  18px;
     text-align: center;
     
 }
/* les liens : apparence,   */
a {
    color: #fff;
    text-decoration: none;
}
/* animation des lien sur la couleur */
a:hover {
    color:#FF6B95;
    text-decoration: none;
}
}

</style>