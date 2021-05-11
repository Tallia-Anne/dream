<template>
  <div class="wrap">
    <a href="/">
      <i class="fa fa-times"></i>
    </a>
    <div id="container">
      <h2>Déjà un compte</h2>

      <a href="/login"
        ><button class="bouton1"><i class="fas fa-user"></i> Login</button></a
      >
      <p>Nouvelle ici.</p>
      <a href="/register"
        ><button class="bouton2">
          <i class="fas fa-plus"></i> S'inscrite
        </button></a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
  }

  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 340px;
    width: 520px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  /* icone du formulaire (fermer) */
  .fa-times:before {
    content: "\f00d";
    position: absolute;
    right: 66%;
    top: 11%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 3.5em;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }

  /* l'apparence du bouton */
  #container .bouton1 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 29px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container .bouton2 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: -4px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container button:hover {
    transform: translatey(2px);
  }
  #container button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 340px;
    width: 520px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  /* icone du formulaire (fermer) */
  .fa-times:before {
    content: "\f00d";
    position: absolute;
    right: 66%;
    top: 11%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 3.5em;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }

  /* l'apparence du bouton */
  #container .bouton1 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 29px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container .bouton2 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: -4px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container button:hover {
    transform: translatey(2px);
  }
  #container button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 340px;
    width: 520px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  /* icone du formulaire (fermer) */
  .fa-times:before {
    content: "\f00d";
    position: absolute;
    right: 78%;
    top: 5%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 3.5em;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }

  /* l'apparence du bouton */
  #container .bouton1 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 29px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container .bouton2 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: -4px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container button:hover {
    transform: translatey(2px);
  }
  #container button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 340px;
    width: 401px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  /* icone du formulaire (fermer) */
  .fa-times:before {
    content: "\f00d";
    position: absolute;
    right: 85%;
    top: 4%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 3.5em;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }

  /* l'apparence du bouton */
  #container .bouton1 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 29px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container .bouton2 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: -4px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container button:hover {
    transform: translatey(2px);
  }
  #container button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 280px;
    width: 286px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  /* icone du formulaire (fermer) */
  .fa-times:before {
    content: "\f00d";
    position: absolute;
    right: 80%;
    top: 8%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 20px;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/huile-essentielle-naturelle-dans-flacon-verre-contre-espace-fleurs-roses-concept-essences-bio-cosmetiques-naturels-produits-sante-apothicaire-moderne_97899-1041.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 30px 0;
    font-size: 1.3em;
  }

  /* l'apparence du bouton */
  #container .bouton1 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 29px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container .bouton2 {
    background-image: linear-gradient(
      to left,
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: -4px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
  #container button:hover {
    transform: translatey(2px);
  }
  #container button:active {
    transform: translatey(5px);
  }
}
</style>