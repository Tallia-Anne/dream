<template>
  <div class="adresse">
    <mynavbar />
    <div class="wrap">
      <h2>Ajouter d'une autre adresse</h2>
      <!--Formulaire de paiement -->
      <form>
        <!-- Email -->
        <div class="input-group">
          <div class="input-box">
            <input type="ville" placeholder="Ville" required class="name" />
            <i class="fa fa-home icon"></i>
          </div>
        </div>
        <!-- Email -->
        <!--Nom du titulaire -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="adresse"
              placeholder="Mettre votre adresse"
              required
              class="name"
            />
            <i class="fa fa-home icon"></i>
          </div>
        </div>
        <!--Sujet du titulaire -->

        <div class="input-group">
          <div class="input-box">
            <input
              type="cp"
              placeholder="Code postale"
              required="true"
              class="name"
            />
            <i class="fas fa-address-card icon"></i>
          </div>
        </div>
        <!--Sujet du titulaire -->
        <!-- Message -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="pays"
              placeholder="Insérer son pays"
              required="true"
              class="name"
            />
            <i class="fa fa-home icon"></i>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input
              type="tel"
              placeholder="Insérer son numéro de téléphone"
              required="true"
              class="name"
            />
            <i class="fa fa-phone icon"></i>
          </div>
        </div>
        <!-- Message -->
        <div class="input-group">
          <div class="input-box">
            <button type="submit">Ajouter</button>
          </div>
        </div>
      </form>
      <!--Fin du Formulaire de paiement -->
    </div>
  </div>
</template>

<script>
import mynavbar from "@/components/mynavbar.vue";
export default {
  name: "ajadresse",
  components: {
    mynavbar,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* fond */
  .adresse {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 959px;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 60%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* Le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 34px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }
  /* disposition des input */
  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /* positionnement des icones et la couleur des icones */
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    border: 1px solid #00000033;
    border-right: none;
  }
  /* animation des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }

  /* Le bouton  */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* Animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* fond */
  .adresse {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 959px;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 60%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 34px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }

  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* animation du input */
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /* les icones */
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  /* les animations des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }

  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* fond d'arrière-plan */
  .adresse {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 959px;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 60%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 34px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }

  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  /* intérieur d'input */
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* animation du contours du input */
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /* les icones */
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  /*Les animations des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* le bouton: couleur et la police */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* L'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* le fond du arrière-plan */
  .adresse {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 959px;
    position: absolute;
  }
  /* Le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 330px;
    height: 60%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* Le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 34px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }

  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  /* intérieur des inputs */
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* Les animations d'inputs */
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /* Les icones */
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  /* Les animations des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* le bouton: couleur */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* L'arrière-plan */
  .adresse {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 959px;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 211px;
    height: 60%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }

  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  /* intérieur du input */
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* animations des input le contour */
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  /* l'animation des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* le bouton: couleur, police du bouton */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 168px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
</style>
