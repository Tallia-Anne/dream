<template>
  <div class="wrap">
    <mynav />
    <div class="header_conseil">
      <img
        class="image-header"
        src="https://image.freepik.com/photos-gratuite/traitement-capillaire-naturel-noix-coco_105565-4153.jpg"
        alt="header"
      />
    </div>
    <div class="section-une">
      <div class="section-paragraphe">
        <h2>Les conseils:</h2>
      </div>
      <div class="conseil">
        <p>
          La patience: Arrêter de se focaliser sur la pouse. <br />
          La manipulation: Faire un masque de protéine grâce aux poudres, les
          huiles et etc. Laver des cheveux qu'une fois par semaine. <br />
          Bien hydrater les cheveux avec un vaporisanr avec de l'huile tous les
          jours. Réaliser une coiffure protectrice. <br />
          Sommeil: Pour dormi avec un fourlad sur la tête. Parce que c'est
          nécessaire pour garder ses cheveux hydratés. Deplus moins de riques à
          perdre ses cheveux durant la nuit.
          <br />
          Les erreurs à éviter: <br />
          Les coiffures: réaliser des tresses trop serrées au niveau des racines
          comme les postiches . <br />
          Les séchoirs et fer à lisser, trop chaudes ou maintenues trop près du
          cuir chevelu. <br />
          Les brossages brutales Les défrisages , lissages ou des produits
          chimiques
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="main_portfolio_content">
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img
                src="https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg"
                alt=""
              />
              <div class="portfolio_images_overlay text-center">
                <a href="/brocher"><h6>Aide capillaire</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img
                src="https://image.freepik.com/photos-gratuite/traitement-capillaire-naturel-noix-coco_105565-4139.jpg"
                alt=""
              />
              <div class="portfolio_images_overlay text-center">
                <a href="/decouvrir"><h6>Découvrir la plateforme</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img src="../assets/396293-PCIO51-898.jpg" alt="" />
              <div class="portfolio_images_overlay text-center">
                <a href="/huile"><h6>Huile essentielle</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img src="../assets/5f493e28e31c4.jpg" alt="img17" />
              <div class="portfolio_images_overlay text-center">
                <h6>Coiffure</h6>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img src="../assets/Page asseccoire.jpg" alt="img25" />
              <div class="portfolio_images_overlay text-center">
                <a href="/accessoire"><h6>Accessoire</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img
                src="https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-7.jpg"
                alt=""
              />
              <div class="portfolio_images_overlay text-center">
                <a href="/produit"><h6>Nos produits</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img
                src="https://image.freepik.com/photos-gratuite/jeune-femme-meconnaissable-sa-petite-fille-debout-dans-parc-fleurs-dans-cheveux-mere-petite-fille-exterieur-famille-heureuse_136813-1923.jpg"
                alt=""
              />
              <div class="portfolio_images_overlay text-center">
                <a href="/enfant"><h6>Enfant</h6></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
              <img
                src="https://image.freepik.com/photos-gratuite/test-cosmetiques-femme-cosmetologue-cosmetiques-biologiques-naturels-masque-capillaire-serum-pastel-plat_296062-38.jpg"
                alt=""
              />
              <div class="portfolio_images_overlay text-center">
                <a href="/register"><h6>Inscription</h6></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import mynav from "@/components/mynav.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  name: "conseil",
  components: {
    mynav,
    myfooter,
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
}
.header-conseil {
  width: 100%;
  height: 690px;
}
/* image de header */
.image-header {
  width: 100%;
}
/* le titre  */
.section-paragraphe {
  padding: 4%;
  font-family: "Galada", cursive;
  font-size: 48px;
}

/* le paragraphe */
.conseil {
  font-family: "Galada", cursive;
}

.portfolio_content {
  padding-bottom: 120px;
  display: inline-block;
}
/* ensemble de l'image */
.single_portfolio_text {
  display: inline-block;
  padding: 0;
  position: relative;
  overflow: hidden;
}
/*image*/
.single_portfolio_text img {
  width: 100%;
}

.single_portfolio_text:hover .portfolio_images_overlay {
  top: 5%;
  left: 5%;
}
/*animation: du rectangle*/
.portfolio_images_overlay {
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 0 auto;
  top: -100%;
  left: 5%;
  position: absolute;
  transition: 0.6s;
}
/* Les liens chaque images */
.portfolio_images_overlay h6 {
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  line-height: 2.575rem;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
/* les liens */
a {
  text-decoration: none;
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .wrap {
    width: 100%;
  }
  .header-conseil {
    width: 100%;
    height: 690px;
  }
  .image-header {
    width: 100%;
  }

  .section-paragraphe {
    padding: 4%;
    font-family: "Galada", cursive;
  }

  .portfolio_content {
    padding-bottom: 120px;
    display: inline-block;
  }

  .single_portfolio_text {
    display: inline-block;
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .single_portfolio_text img {
    width: 100%;
  }
  /* disposition du cadre */
  .single_portfolio_text:hover .portfolio_images_overlay {
    top: 5%;
    left: 5%;
  }
  /*  la taille du cadre */
  .portfolio_images_overlay {
    width: 90%;
    height: 90%;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin: 0 auto;
    top: -100%;
    left: 5%;
    position: absolute;
    transition: 0.6s;
  }
  .portfolio_images_overlay h6 {
    text-transform: uppercase;
    color: #fff;
    font-size: 2rem;
    line-height: 2.575rem;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .portfolio_images_overlay {
    padding: 0px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .portfolio_images_overlay {
    padding: 170px 20px;
  }
}

@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .portfolio_images_overlay {
    padding: 40px 20px;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .portfolio_images_overlay {
    padding: 20px;
  }
}
</style>
