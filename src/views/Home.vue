<template>
  <div class="wrap">
    <!-- Navbar -->
    <mynav />
    <!-- Navbar -->
    <!--  HEADER -->
    <div class="header">
      <img src="../assets/header (1).jpg" alt="mon img" />
    </div>
   <!-- FIN DU HEADER -->
    <!--  SECTION 1: gallerie  -->
    <div class="feature-line">
            <div class="feature-wrapper">
                <section class="categories">
                    <div class="category-item ">
                    <div class="sectionimageune">
                        <div class="category-item-inner">
                            <div>
                              
                               <a href="/myproduitcrepus"> Cheveux crépus</a>
                               
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="category-item">
                    <div class="sectionimagedeux">
                        <div class="category-item-inner">
                            <div>
                               <a href="/produitf"> Cheveux frisés</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="category-item">
                       <div class="sectionimagetrois">
                        <div class="category-item-inner">
                            <div>
                               <a href="/produitb"> Cheveux bouclés</a>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div class="category-item" >
                        <div class="sectionimagequatre">
                        <div class="category-item-inner">
                            <div>
                               <a href="/produitl"> Cheveux lisses</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="category-item">
                        <div class="sectionimagecinq">
                        <div class="category-item-inner">
                            <div>
                               <a href="/produitkids"> Enfants</a>
                            </div>
                        </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    <!--  FIN DE LA SECTION 1 -->
    <!--  SECTION 2: parallaxe -->
    <div class="ctn1">
      <div class="overlay">
       
        <div class="text">
         <h1>Afro-dream</h1>
        <p>Ce site sera votre meileur ami qui va conseiller à choisir 
au mieux vos produits</p>
<a href="/produit"><button class="btn1">Nos produits</button></a>
<a href="/decouvrir"><button class="btn2">En savoir plus</button></a>
</div>
      </div>
    </div>
    <!--  FIN DE LA SECTION 2 -->
    <!--  SECTION 3 : les produits-->
    <div class="container">
      <div class="section-header">
        <h2>Nos Produits</h2>
          <div class="ligne"></div>
      </div>

      <div class="row">
        <div class="col" v-for="produit in produits" :key="produit.id">
          <div class="single-publication">
            <figure>
              <a>
                <img
                  v-if="produit.Images[0] !== undefined"
                  :src="require(`@/assets/${produit.Images[0].image}.jpg`)"
                  alt="`${produit.Images[0].image}`"
                  width="100"
                  height="150"
                />
              </a>
            </figure>

            <div class="publication-content">
              <h4>
                <router-link :to="`/dtproduit/${produit.id}`">
                  <a href="#">{{ produit.nom }}</a>
                </router-link>
              </h4>

              <h5 class="price">{{ produit.prix }} €</h5>
            </div>
            <div class="add-to-cart">
              <a
                @click="ajouter(produit.id, produit.nom, produit.prix, produit.Images[0].image)"
                class="default-btn"
                >Je craque</a
              >
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DE LA SECTION 3 -->
  <!--  SECTION 4 : 2eme parallaxe -->
    <div class="ctn2"></div>
    <!--  FIN DE LA SECTION 4 -->
    <!--  SECTION 5 -->
    <section class="recent-work">
      <h2>Nos objectives</h2>
      <div class="ligne"></div>
      <p>
        Courts, longs, lisses, crépus… tous les types de cheveux peuvent être
        sublimés grâce à une routine beauté adapté. De beaux cheveux, c’est
        avant tout des cheveux en bonne santé : forts, brillants, et doux. Avoir
        des cheveux en bonne santé vous garanti un entretien plus facile au
        quotidien, avec des cheveux éclatants au naturel et qui se laissent
        coiffer facilement.
      </p>
      <div class="recent-work-container">
        
        <div class="product-photography recent-images">
          <div class="gradient">
          <h5>Soin de beauté</h5>
          <p>Le meilleur ami chez une femme</p>
          </div>
        </div>
        <div class="tour-portrait recent-images">
          <div class="gradient">
          <h5>Diversité</h5>
          <p>Pas de difference </p>
          </div>
        </div>
        <div class="modal-photography recent-images">
          <div class="gradient">
          <h5>Unir</h5>
          <p>Tous les types de cheveux</p>
          </div>
        </div>
        <div class="classical-photography recent-images">
          <div class="gradient-un">
          <h5>Chemin du bonheur</h5>
          <p>Prenez du plaisir pour choisir vos produits</p>
          </div>
        </div>
                
      </div>
      
    </section>
<!--  FIN DE LA SECTION 5 -->
   <!--  SECTION 6 -->
  <section class="d-flex-c">
    <div class="text-center text-container">
      <h2>Ma gallerie</h2>
      <div class="ligne"></div>
    </div>
    <ul class="d-flex-r">
      <li class="one_third"><img src="../assets/galleryunsec1.jpg" alt=""></li>
        <li class="one_third"><img src="../assets/gallerydeuxsec1.jpg" alt=""></li>
          <li class="one_third"><img src="../assets/gallerytroissec1.jpg" alt=""></li>
            <li class="one_third"><img src="../assets/galleryquatresec1.jpg" alt=""></li>
              <li class="one_third"><img src="../assets/gallerycinq.jpg" alt=""></li>
                <li class="one_third"><img src="../assets/gallerysix.jpg" alt=""></li>
    </ul>
  </section>
   <!-- FIN DU SECTION 6 -->
    <!-- FOOTER -->
    <myfooter />
    <!-- FOOTER -->
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
import mynav from "@/components/mynav.vue";
export default {
  name: "Home",
  components: {
    mynav,
    myfooter,
  },
  data() {
    return {
      produits: {},
    };
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
            image: image,
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
  created() {
    this.axios
      .get(this.$apiurl +"produit/limit/4")
      .then((res) => {
        console.log(res);
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
* {
  padding: 0;
}
@media screen and (min-width: 1280px) {
   /* ensemble de la page */
   .wrap {
    width: 100%;
  }
  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 610px;
  }
  /* dimension du header */ 
  .header img {
    width: 100%;
  }
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  .feature-line {
                   width: 100%;
                   position: relative;
               }
               .feature-wrapper {
                   padding: 2px;
               }
               .categories {
                   width: 100%;
                   display: flex;
                   flex-wrap: wrap;
               }
               /* le format de l'image */
               .category-item {
                   flex-grow: 1;
                   flex-basis: 0;
                   min-width: 33.33%;
                   border: 5px solid white;
                   box-sizing: border-box;
                   height: 300px;
                   background-size: cover;
                   background-position: center;
               }
                /* image de chaque gallerie */
               .sectionimageune {
                 background-image: url("../assets/crepus.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagedeux {
                 background-image: url("../assets/6089b79b7aff7.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagetrois {
                 background-image: url("../assets/jeune-mannequin-aux-cheveux-blonds-aux-cheveux-longs-ondules-bien-coiffes-crepus-coiffure-elegante-lache-boucles-librement-couchees-art-coiffure-soins-capillaires-maquillage_353119-83.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagequatre {
                 background-image: url("../assets/belle-femme-au-printemps-fleurs-pommier-fleur_81863-265.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagecinq {
                 background-image: url("../assets/jeune-maman-sa-petite-fille-s-amusant-exterieur-jolie-famille_136813-7027.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               .category-item-inner {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
               /* les titre de chaque de gallerie */
               .category-item-inner>div a{
                   padding: 5px 10px;
                   background-color: rgba(0, 0, 0, 0.5);
                   color: white;
                   font-family: "Playfair Display", serif;
                   border-radius: 5px;
                   font-size: 30px;
                   font-weight: bold;
                   text-decoration: none;
                   
               }
               /*============================================================================================================ */
  /* ====================================================== SECTION 2 ========================================================= */
 .ctn1 {
    height: 668px;
    width: 100%;
    background-image: url("../assets/parallaxeune.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  .overlay {
    background-color: rgb(117 15 63 / 33%);;
    height: 100%;
  }
  .text {
    padding: 17%;
  }
  .overlay h1  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-size: 57px;

  }
  .overlay p  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    padding: 31px;
  }
  .btn1 {
    position: absolute;
    left: 51%;
  }
  .btn2 {
    position: absolute;
    left: 36%;
  }/* le format du bouton */
  button {
    background-color: #5a1c33;
    color: #fff;
    font-weight: bold;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }

  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
 .container {
    max-width: 1280px;
  }
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 10rem;
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
    border: none;
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
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.28;
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
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /* le parallaxe  */
  .ctn2 {
    height: 515px;
    width: 100%;
    background-image: url("../assets/parallaxedeux.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }

 /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */

.recent-work {
  padding-top: 1rem;
  text-align: center;
}
/* le titre de la section */
.recent-work> h2 {
  color: black;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 46px;

}
/*  */
.recent-work> p {
  color: black;
  padding: 3%;
  font-family: "Playfair Display", serif;
}
.ligne {
  
    border-bottom: 8px solid #ad207a8c;
    width: 12%;
    margin: 0 auto;
    padding-bottom: 13px;
}
/* le positionnement */
.recent-work-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
 /* image */
.product-photography {
  background:  url("../assets/6006eb8d1fe0b.jpg");
}
/* image */
.tour-portrait {
  background:  url("../assets/image-trois.jpg");
}
/* image */
.modal-photography {
   background:  url("../assets/image-quatre.jpg");
}
/* image */
.classical-photography {
   background:  url("../assets/imagecinq.jpg");
}
.recent-images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 250px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.recent-images:hover {
  transform: scale(1.07);
   
}
/* titre de la section */
.recent-images>h5 {
  color: white;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}
/* le texte de la section */
.recent-images>p {
  color: white;
  font-family: "Playfair Display", serif;
}

  /* =============================================================================================================== */
  
  /* ====================================================== SECTION 6 ========================================================= */

 ul {
   font-style: normal;
   list-style: none;
 }
/* l'ensemble de la section */
 .d-flex-c {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-bottom: -96px;
 }
 /* le titre de la section */
.d-flex-c h2 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 46px;
}
/* la section enfant  */
 /* postionnement de la gallerie */
 .d-flex-r {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 }
 /* le format de l'image */
  /* la dimension des images */
 .d-flex-r img {
   width: 100%;
   height: 100%;
 }
 /* l'emplacement des image au niveau de largeur */
 .one_third {
   width: 33.3333333%;

 }

 .text-center {
   text-align: center;
 }
 .text-container {
   padding: 1.5rem;
 }
 

  
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* ensemble de la page */
  .wrap {
    width: 100%;
  }
  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 610px;
  }
  
  /* dimension du header */ 
  .header img {
    width: 100%;
  }
  
  
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
 /* l'ensemble de la section */
  .feature-line {
                   width: 100%;
                   position: relative;
               }
               .feature-wrapper {
                   padding: 2px;
               }
               .categories {
                   width: 100%;
                   display: flex;
                   flex-wrap: wrap;
               }
               .category-item {
                   flex-grow: 1;
                   flex-basis: 0;
                   min-width: 33.33%;
                   border: 5px solid white;
                   box-sizing: border-box;
                   height: 300px;
                   background-size: cover;
                   background-position: center;
               }
               /* image de la gallerie */
               .sectionimageune {
                 background-image: url("../assets/crepus.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagedeux {
                 background-image: url("../assets/6089b79b7aff7.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagetrois {
                 background-image: url("../assets/jeune-mannequin-aux-cheveux-blonds-aux-cheveux-longs-ondules-bien-coiffes-crepus-coiffure-elegante-lache-boucles-librement-couchees-art-coiffure-soins-capillaires-maquillage_353119-83.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagequatre {
                 background-image: url("../assets/belle-femme-au-printemps-fleurs-pommier-fleur_81863-265.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
                /* image de chaque gallerie */
               .sectionimagecinq {
                 background-image: url("../assets/jeune-maman-sa-petite-fille-s-amusant-exterieur-jolie-famille_136813-7027.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               .category-item-inner {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
               /* le titre de chaque gallerie */
               .category-item-inner>div a{
                   padding: 5px 10px;
                   background-color: rgba(0, 0, 0, 0.5);
                   color: white;
                   font-family: "Playfair Display", serif;
                   border-radius: 5px;
                   font-size: 30px;
                   font-weight: bold;
                   text-decoration: none;
                   
               }
               /*============================================================================================================ */
  /* ====================================================== SECTION 2 ========================================================= */
 /* le parallaxe*/
 .ctn1 {
    height: 668px;
    width: 100%;
    background-image: url("../assets/parallaxeune.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  .overlay {
    background-color: rgb(117 15 63 / 33%);;
    height: 100%;
  
  }
  .text {
    padding: 17%;
  }
  /* le titre du parallaxe: le format */
  .overlay h1  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-size: 57px;

  }
  /* le texte avec le format */
  .overlay p  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    padding: 31px;
  }
  /* le positionnement du bouton */
  .btn1 {
    position: absolute;
    left: 51%;
  }
  /* le positionnement du bouton */
  .btn2 {
    position: absolute;
    left: 36%;
  }
  /* le format du bouton */
  button {
    background-color: #5a1c33;
    color: #fff;
    font-weight: bold;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }

  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  .container {
    max-width: 1024px;
  }
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  /* le titre de la section */
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 46px;
    font-weight: bold;
  }

  .single-publication {
    --auto-grid-min-size: 10rem;
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
    border: none;
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
  }
  /* la positionnement du nom: l'épaisseur, la taille et positionnement  */
  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }
/* le prix */
  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  /* animation autour des produits */
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
  }
  /* le bouton */
  .single-publication .add-to-cart {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.28;
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
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  /* le parallaxe */
  .ctn2 {
    height: 515px;
    width: 100%;
    background-image: url("../assets/parallaxedeux.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
  }


 /* =============================================================================================================== */
  /* ====================================================== SECTION 5 ========================================================= */
/* l'ensemble du section */
.recent-work {
  padding-top: 1rem;
  text-align: center;
}
/* le titre de la section */
.recent-work> h2 {
  color: black;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 46px;

}
/* le text de la section */
.recent-work> p {
  color: black;
  padding: 3%;
  font-family: "Playfair Display", serif;
}
/* la ligne sous le titre */
.ligne {
    border-bottom: 8px solid #ad207a8c;
    width: 12%;
    margin: 0 auto;
    padding-bottom: 13px;
}
/* le positionnement */
.recent-work-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
/* image */
.product-photography {
  background:  url("../assets/6006eb8d1fe0b.jpg");
}
/* image */
.tour-portrait {
  background:  url("../assets/image-trois.jpg");
}
/* image */
.modal-photography {
   background:  url("../assets/image-quatre.jpg");
}
/* image */
.classical-photography {
  background:  url("../assets/imagecinq.jpg");
}
/* le format de l'image  */
.recent-images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 250px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/* animation d'effest zoom de l'image */
.recent-images:hover {
  transform: scale(1.07);
   
}
/* le titre de chaque image */
.recent-images>h5 {
  color: white;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}
/* le texte de l'image */
.recent-images>p {
  color: white;
  font-family: "Playfair Display", serif;
}

  /* =============================================================================================================== */
 
  
  /* ====================================================== SECTION 6 ========================================================= */
/* la liste */
 ul {
   font-style: normal;
   list-style: none;
 }
  /* l'ensemble de la section */
 .d-flex-c {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-bottom: -96px;
 }
 /* le titre de la section */
.d-flex-c h2 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 46px;
}

 /* postionnement de la gallerie */
 .d-flex-r {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 }
  /* la dimension des images */
 .d-flex-r img {
   width: 100%;
   height: 100%;
 }
 .one_third {
   width: 33.3333333%;
 }

 .text-center {
   text-align: center;
 }
 .text-container {
   padding: 1.5rem;
 }
 

  /* ====================================================== SECTION 6 ========================================================= */
  
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
 /* ensemble de la page */
  .wrap {
    width: 100%;
  }
  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 372px;
  }
  /* dimension du header */
   .header img {
    width: 100%;
  }
  
  
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  /* l'ensemble de cette section */
      .feature-line {
                   width: 100%;
                   position: relative;
               }
               .feature-wrapper {
                   padding: 2px;
               }
               .categories {
                   width: 100%;
                   display: flex;
                   flex-wrap: wrap;
               }
               /* format des images */
               .category-item {
                   flex-grow: 1;
                   flex-basis: 0;
                   min-width: 39%;
                   box-sizing: border-box;
                    border: 5px solid white;
                   height: 300px;
                   background-size: cover;
                   background-position: center;
               }
               /* image de la gallerie */
                .sectionimageune {
                 background-image: url("../assets/crepus.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de la gallerie */
               .sectionimagedeux {
                 background-image: url("../assets/6089b79b7aff7.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de la gallerie */
               .sectionimagetrois {
                 background-image: url("../assets/jeune-mannequin-aux-cheveux-blonds-aux-cheveux-longs-ondules-bien-coiffes-crepus-coiffure-elegante-lache-boucles-librement-couchees-art-coiffure-soins-capillaires-maquillage_353119-83.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de la gallerie */
               .sectionimagequatre {
                 background-image: url("../assets/belle-femme-au-printemps-fleurs-pommier-fleur_81863-265.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de la gallerie */
               .sectionimagecinq {
                 background-image: url("../assets/jeune-maman-sa-petite-fille-s-amusant-exterieur-jolie-famille_136813-7027.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               .category-item-inner {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
               /* le format du titre de chaque gallerie */
               .category-item-inner>div a{
                   padding: 5px 10px;
                   background-color: rgba(0, 0, 0, 0.5);
                   color: white;
                   font-family: "Playfair Display", serif;
                   border-radius: 5px;
                   font-size: 30px;
                   font-weight: bold;
               }
               /* animation pour retirer la ligne sous les titre */
               .category-item-inner>div a:hover{
                  text-decoration: none;
               }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
  /* parallaxe */
 .ctn1 {
    height: 568px;
    width: 100%;
    background-image: url("../assets/parallaxeune.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  .overlay {
    background-color: rgb(117 15 63 / 33%);;
    height: 100%;
  
  }
  .text {
    padding: 17%;
  }
  /* le titre du parallaxe */
  .overlay h1  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    padding: 22px;

  }
  /* le text du parallaxe */
  .overlay p  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
  }
  /* le positionnement du bouton */
  .btn1 {
    position: absolute;
    left: 51%;
  }
  /* le positionnement du bouton */
  .btn2 {
    position: absolute;
    left: 28%;
  }
  /* le format du bouton */
  button {
    background-color: #5a1c33;
    color: #fff;
    font-weight: bold;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  /* le titre de la section */
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 14rem;
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
    border: none;
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
  }

  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }
  /* le prix */
  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  /* Animation autour du autour des produits */
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
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
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */

  /* le parallaxe  */
  .ctn2 {
    height: 515px;
    width: 100%;
    background-image: url("../assets/parallaxedeux.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }

 /* =============================================================================================================== */
 /* ====================================================== SECTION 5 ========================================================= */
/* l'ensemble de la section */
.recent-work {
  padding-top: 1rem;
  text-align: center;
}
/* le titre de la section */
.recent-work> h2 {
  color: black;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 46px;
}
/* le text de la section */
.recent-work> p {
  color: black;
  padding: 3%;
  font-family: "Playfair Display", serif;
}
/* la ligne sous le titre */
.ligne {
    border-bottom: 8px solid #ad207a8c;
    width: 12%;
    margin: 0 auto;
    padding-bottom: 13px;
}
/* le positionnement */
.recent-work-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
/* image */
.product-photography {
  background:  url("../assets/6006eb8d1fe0b.jpg");
}
/* image */
.tour-portrait {
  background:  url("../assets/image-trois.jpg");
}
/* image */
.modal-photography {
   background:  url("../assets/image-quatre.jpg");
}
/* image */
.classical-photography {
  background:  url("../assets/imagecinq.jpg");
}
/* le format de l'image */
.recent-images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 250px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/*Animation : de l'effet de zoom */
.recent-images:hover {
  transform: scale(1.07);
   
}
/* le titre de chaque image  */
.recent-images>h5 {
  color: black;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}
/* le texte de chaque image  */
.recent-images>p {
  color: black;
  font-family: "Playfair Display", serif;
}


  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  /* la list */
  ul {
   font-style: normal;
   list-style: none;
 }
  /* l'ensemble de la section */
 .d-flex-c {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-bottom: -96px;
 }
 /* le titre de la section */
.d-flex-c h2 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 46px;
}

 /* postionnement de la gallerie */
 .d-flex-r {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 }
  /* la dimension des images */
 .d-flex-r img {
   width: 100%;
   height: 100%;
 }
 /* la dimension au niveau de largeur de l'image */
 .one_third {
   width: 50%;

 }
/* le postionnement  */
 .text-center {
   text-align: center;
 }
 /* epacement */
 .text-container {
   padding: 1.5rem;
 }
 

  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* ensemble de la page */
  .wrap {
    width: 100%;
  }
  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 245px;
  }
  /* dimension du header */ 
  .header img {
    width: 100%;
  }
  
  
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  /* l'ensemble de la section */
  .feature-line {
                   width: 100%;
                   position: relative;
               }
               .feature-wrapper {
                   padding: 2px;
               }
               .categories {
                   width: 100%;
                   display: flex;
                   flex-wrap: wrap;
               }
               /* format des images */
               .category-item {
                   flex-grow: 1;
                   flex-basis: 0;
                   min-width: 100%;
                   box-sizing: border-box;
                   border: #fff 5px solid;
                   height: 300px;
                   background-size: cover;
                   background-position: center;
               }
               .category-item-inner {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
               /* le titre de chaque titre */
               .category-item-inner>div a{
                   padding: 5px 10px;
                   background-color: rgba(0, 0, 0, 0.5);
                   color: white;
                   border-radius: 5px;
                   font-size: 30px;
                   font-weight: bold;
                   font-family: "Playfair Display", serif;
               }
               /* Animation: retirer sous ligne de chaque titre de la gallerie */
               .category-item-inner>div a:hover {
                 text-decoration: none;
               }
               /* la positionnement du nom et du prix produit */
               .sectionimageune {
                 background-image: url("../assets/crepus.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* la positionnement du nom et du prix produit */
               .sectionimagedeux {
                 background-image: url("../assets/6089b79b7aff7.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* la positionnement du nom et du prix produit */
               .sectionimagetrois {
                 background-image: url("../assets/jeune-mannequin-aux-cheveux-blonds-aux-cheveux-longs-ondules-bien-coiffes-crepus-coiffure-elegante-lache-boucles-librement-couchees-art-coiffure-soins-capillaires-maquillage_353119-83.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* la positionnement du nom et du prix produit */
               .sectionimagequatre {
                 background-image: url("../assets/belle-femme-au-printemps-fleurs-pommier-fleur_81863-265.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* la positionnement du nom et du prix produit */
               .sectionimagecinq {
                 background-image: url("../assets/jeune-maman-sa-petite-fille-s-amusant-exterieur-jolie-famille_136813-7027.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
   /* le parallaxe */
   .ctn1 {
    height: 568px;
    width: 100%;
    background-image: url("../assets/parallaxeune.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  .overlay {
    background-color: rgb(117 15 63 / 33%);;
    height: 100%;
  
  }
  .text {
    padding: 17%;
  }
  .overlay h1  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    padding: 11%;

  }
  .overlay p  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    padding: 17px;
  }
  /* le positionnemnt du bouton */
  .btn1 {
    position: absolute;
    left: 51%;
  }
  /* le positionnemnt du bouton */
  .btn2 {
    position: absolute;
    left: 15%;
  }/* le format du bouton */
  button {
    background-color: #5a1c33;
    color: #fff;
    font-weight: bold;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 46px;
  }

  .single-publication {
    --auto-grid-min-size: 14rem;
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
    border: none;
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
  }
  /* le format du nom du produit */
  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }
  /* le prix*/
  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  /* l'animation autour des produit avec la bordure et l'effet d'ombre */
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
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
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 4 ========================================================= */
  /* le parallaxe  */
  .ctn2 {
    height: 515px;
    width: 100%;
    background-image: url("../assets/parallaxedeux.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }

 /* =============================================================================================================== */
 /* ====================================================== SECTION 5 ========================================================= */
/* l'ensemble de la section */
.recent-work {
  padding-top: 1rem;
  text-align: center;
}
/* la titre de cette section */
.recent-work> h2 {
  color: black;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 46px;

}
/* le text de cette section */
.recent-work> p {
  color: black;
  padding: 3%;
  font-family: "Playfair Display", serif;
}
/* la ligne du titre */
.ligne {
    border-bottom: 8px solid #ad207a8c;
    width: 12%;
    margin: 0 auto;
    padding-bottom: 13px;
}
/* le positionnement */
.recent-work-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
/* image */
.product-photography {
  background:  url("../assets/6006eb8d1fe0b.jpg");
}
/* image */
.tour-portrait {
  background:  url("../assets/image-trois.jpg");
}
/* image */
.modal-photography {
   background:  url("../assets/image-quatre.jpg");
}
/* image */
.classical-photography {
  background:  url("../assets/imagecinq.jpg");
}
/* le format de l'image */
.recent-images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 250px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/* Animation: effet de zoom */
.recent-images:hover {
  transform: scale(1.07);
   
}
/* le titre de chaque image  */
.recent-images>h5 {
  color: black;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}
/* le texte de chaque image  */
.recent-images>p {
  color: white;
  font-family: "Playfair Display", serif;
}



  /* =============================================      SECTION 6        ================================================================== */
  /* =============================================================================================================== */

  /* la liste */
  ul {
   font-style: normal;
   list-style: none;
 }

 .d-flex-c {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-bottom: -96px;
 }
 /* la titre de section */
.d-flex-c h2 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 46px;
}

 /* postionnement de la gallerie */
 .d-flex-r {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 }
  /* la dimension des images */
 .d-flex-r img {
   width: 100%;
   height: 100%;
 }
 /* la dimension au niveau de la largeur de l'image */
 .one_third {
   width: 100%;

 }

 .text-center {
   text-align: center;
 }
 .text-container {
   padding: 1.5rem;
 }
 

  /* =============================================================================================================== */


  /* ==================================  FIN DE LA SECTION 6 ============================================================================= */
 
  

}
@media screen and (min-width: 320px) and (max-width: 479.9px) {
  /* ensemble de la page */
  .wrap {
    width: 100%;
  }

  /* =============================================================================================================== */
  /* ==================================================== HEADER ===================================================== */
  /*l'ensemble de l'image*/
  .header {
    width: 100%;
    height: 245px;
  }
  /* dimension du header */ 
  .header img {
    width: 100%;
    height: 100%;
  }
  
  
  /* =============================================================================================================== */
  /* ==================================================== SectionUne ===================================================== */
  /* l'ensemble de la section */
  .feature-line {
                   width: 100%;
                   position: relative;
               }
               .feature-wrapper {
                   padding: 2px;
               }
               .categories {
                   width: 100%;
                   display: flex;
                   flex-wrap: wrap;
               }
               .category-item {
                   flex-grow: 1;
                   flex-basis: 0;
                   min-width: 100%;
                   box-sizing: border-box;
                   border: #fff 5px solid;
                   height: 300px;
                   background-size: cover;
                   background-position: center;
               }
               .category-item-inner {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
               /* les titres de la gallerie   */
               .category-item-inner>div a{
                   padding: 5px 10px;
                   background-color: rgba(0, 0, 0, 0.5);
                   color: white;
                   border-radius: 5px;
                   font-size: 30px;
                   font-weight: bold;
                   font-family: "Playfair Display", serif;
               }
               /* les titres de la gallerie avec les animation  */
               .category-item-inner>div a:hover {
                 text-decoration: none;
               }
               /* image de chaque gallerie */
               .sectionimageune {
                 background-image: url("../assets/crepus.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de chaque gallerie */
               .sectionimagedeux {
                 background-image: url("../assets/6089b79b7aff7.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de chaque gallerie */
               .sectionimagetrois {
                 background-image: url("../assets/jeune-mannequin-aux-cheveux-blonds-aux-cheveux-longs-ondules-bien-coiffes-crepus-coiffure-elegante-lache-boucles-librement-couchees-art-coiffure-soins-capillaires-maquillage_353119-83.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de chaque gallerie */
               .sectionimagequatre {
                 background-image: url("../assets/belle-femme-au-printemps-fleurs-pommier-fleur_81863-265.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
               /* image de chaque gallerie */
               .sectionimagecinq {
                 background-image: url("../assets/jeune-maman-sa-petite-fille-s-amusant-exterieur-jolie-famille_136813-7027.jpg");
                 height: 100%;
    background-position: center;
    background-size: cover;
               }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 2 ========================================================= */
   /* le parallaxe */
   .ctn1 {
    height: 568px;
    width: 100%;
    background-image: url("../assets/parallaxeune.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }
  /* overlay */
  .overlay {
    background-color: rgb(117 15 63 / 33%);;
    height: 100%;
  
  }
  /* la position du le texte */
  .text {
    padding: 17%;
  }
  /* le titre: la police, la couleurs, épaisseur de la police */
  .overlay h1  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: bold;

  }
  /* le texte: la police, la couleurs, épaisseur de la police */
  .overlay p  {
    color: #fff;
    text-align: center;
    font-family: "Playfair Display", serif;
  }
  /* le positionnement du bonton */
  .btn1 {
    position: absolute;
    left: 51%;
  }
  /* le positionnement du bonton */
  .btn2 {
    position: absolute;
    left: 36%;
  }
  /* le format du bouton */
  button {
    background-color: #5a1c33;
    color: #fff;
    font-weight: bold;
    border: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
  /* ====================================================== SECTION 3 ========================================================= */
  /*l'ensemble de la section du produit*/
  .sectionproduit {
    position: relative;
    width: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 10px;
  }
  /* le titre de chaque produit */
  .section-header h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 46px;
  }
  /* placement des produits */
  .single-publication {
    --auto-grid-min-size: 14rem;
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
    border: none;
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
  }
  /* nom du produits: l'epaisseur et la taille */
  .single-publication .publication-content h4 {
    font-weight: 600;
    margin: 8px 0 10px;
    font-size: 20px;
  }
  /* couleur de la police */
  .single-publication .publication-content h4 a {
    color: black;
    text-decoration: none;
    font-size: 15px;
  }
  /* le prix */
  .single-publication .publication-content .price {
    font-size: 20px;
    color: gold;
    padding-left: 5px;
    font-weight: 300;
  }
  /* animation autour des produits */
  .single-publication:hover {
    border: 3px solid #612741;
    border-radius: 30px;
	box-shadow: 2px 2px 5px black;
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
  /* animation  */
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
    box-shadow: 2px 2px 5px black;
  }
  /* =============================================================================================================== */
   /* ====================================================== SECTION 4 ========================================================= */
  /* le parallaxe  */
  .ctn2 {
    height: 515px;
    width: 100%;
    background-image: url("../assets/parallaxedeux.jpg");
    /*mettre l'image en couverture*/
    background-size: cover;
    /*l'arrière-plan ciblé ne se déplacera pas avec l'élément*/
    background-attachment: fixed;
    background-position: center;
  }

 /* =============================================================================================================== */

 /* ====================================================== SECTION 5 ========================================================= */
/* l'ensemble de la section */
.recent-work {
  padding-top: 1rem;
  text-align: center;
}
/* le titre de l'image */
.recent-work> h2 {
  color: black;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 46px;

}
/* le texte de l'image */
.recent-work> p {
  color: black;
  padding: 3%;
  font-family: "Playfair Display", serif;
}
/* la ligne du titre */
.ligne {
    border-bottom: 8px solid #ad207a8c;
    width: 25%;
    margin: 0 auto;
    padding-bottom: 13px;
}
/* le positionnement */
.recent-work-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
/* image */
.product-photography {
  background:  url("../assets/6006eb8d1fe0b.jpg");
}
/* image */
.tour-portrait {
  background:  url("../assets/image-trois.jpg");
}
/* image */
.modal-photography {
   background:  url("../assets/image-quatre.jpg");
}
/* image */
.classical-photography {
  background:  url("../assets/imagecinq.jpg");
}
/* le format de l'image */
.recent-images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 250px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/* Animation : effet zoom */
.recent-images:hover {
  transform: scale(1.07); 
}
/* le titre de chaque image */
.recent-images>h5 {
  color: black;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}
/* le text de chaque image */
.recent-images>p {
  color: black;
  font-family: "Playfair Display", serif;
}


    /* =============================================================================================================== */

  /* =============================================================================================================== */
  /* la liste */
  ul {
   font-style: normal;
   list-style: none;
 }
/* le container de la gallerie */
 .d-flex-c {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-bottom: -96px;
 }
 /* le titre de la section */
.d-flex-c h2 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 46px;
}
 /* postionnement de la gallerie */
 .d-flex-r {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 }
  /* la dimension des images */
 .d-flex-r img {
   width: 100%;
   height: 100%;
 }
 /* redimmensionnement des image */
 .one_third {
   width: 100%;

 }
  /* le potionnemt du titre */
 .text-center {
   text-align: center;
 }
 /* l'espacement entre le titre et la gallerie */
 .text-container {
   padding: 1.5rem;
 }
 

  /* =============================================================================================================== */


  
  
}
</style>
