<template>
  <div class="contact">
    <mynavbar />
    <div class="wrap">
      <h2>Contact</h2>
      <!--Formulaire de paiement -->
      <form @submit="prevent = docontact">
        <!-- Email -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="email"
              placeholder="Adresse email"
              required
              class="name"
              v-model="email"
            />
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>
        <!-- Email -->
        <!--Nom du titulaire -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="text"
              placeholder="Mettre votre nom"
              required
              class="name"
              v-model="nom"
            />
            <i class="fa fa-user icon"></i>
          </div>
        </div>
        <!--Sujet du titulaire -->

        <div class="input-group">
          <div class="input-box">
            <input
              type="subject"
              placeholder="Sujet...."
              required="true"
              class="name"
              v-model="sujet"
            />
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>
        <!--Sujet du titulaire -->
        <!-- Message -->
        <div class="input-group">
          <div class="input-box">
            <textarea
              class="name-mgs"
              placeholder="votre message"
              required="true"
            ></textarea>
          </div>
        </div>
        <!-- Message -->
        <div class="input-group">
          <div class="input-box">
            <button type="submit">Envoyer</button>
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
  name: "contact",
  components: {
    mynavbar,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* arrière-plan */
  .contact {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 821px;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 82%;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* titre du formulaire */
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
  /* intérieur du input (message) */
  .name-mgs {
    padding: 14px 10px 14px 50px;
    width: 100%;
    height: 200px;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* animation du contours des inputs */
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
  /*les animations */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* le bouton: la couleur et la police */
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
  /*Les animations du bouton*/
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* arrière-plan */
  .contact {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;

    height: 821px;

    position: absolute;
  }
  /* bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 82%;
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
  /* intérieur du messagz */
  .name-mgs {
    padding: 14px 10px 14px 50px;
    width: 100%;
    height: 200px;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* les animations du contour */
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
  /* les icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* le bouton */
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
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* arrière-plan */
  .contact {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  /*le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 500px;
    height: 20%;
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
  /* intérieur du inputs */
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
  /* input du messahe: intérieur*/
  .name-mgs {
    padding: 14px 10px 14px 50px;
    width: 100%;
    height: 200px;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* annimation: le contour des inputs */
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
  /* le bouton */
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
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* arrière-plan */
  .contact {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 445px;
    height: 50%;
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
  /*intérieur des input */
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
  /* intérieur du input message */
  .name-mgs {
    padding: 14px 10px 14px 50px;
    width: 100%;
    height: 200px;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* les animations du contours */
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
  /* animation des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /*le bouton */
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
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* arrière-plan */
  .contact {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  /**le bloc du formulaire */
  .wrap {
    background-color: #ff99cc;
    opacity: 0.9;
    width: 272px;
    height: 50%;
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
  /*intérieur du input */
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
  /*intérieur du input(message) */
  .name-mgs {
    padding: 14px 10px 14px 50px;
    width: 100%;
    height: 200px;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  /* l'animation du contours */
  .name:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /*Les icones */
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
  /*les icones: animations */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /*le bouton */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 227px;
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
