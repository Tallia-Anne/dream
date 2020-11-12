<template>
  <div class="wrap">
    <a href="/login">
      <i class="fa fa-times"></i>
    </a>
    <div id="container">
      <h2>Reinitialiser</h2>
      <p>
        Veuillez entrer votre adresse e-mail pour recevoir le mot de passe
        oublié.
      </p>
      <form @submit.prevent="checkForm">
        <input
          type="email"
          placeholder="Entrer votre email"
          v-model="email"
          required
        />

        <button><i class="fas fa-envelope"></i> Reinitialiser</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "reinitialiser",
  components: {},
  data() {
    return {
      email: "",
    };
  },
  methods: {
    checkForm: function () {
      this.axios
        .post(this.$apiurl + "client/forgetpassword", {
          email: this.email,
        })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "Mtp" });
            window.location.reload();
          } else {
            this.$router.push({ name: "Mtp", params: { msg: "reçu le mail" } });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg")
      no-repeat;
    background-size: cover;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 380px;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }
  /* l'apparence du input */
  #container input {
    width: 378px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  #container input:focus {
    background: rgba(0, 0, 333, 0.1);
  }
  /* l'apparence du bouton */
  #container button {
    background-image: linear-gradient(
      to left,
      #56f086 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #56f086;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg")
      no-repeat;
    background-size: cover;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 380px;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }
  /* l'apparence du input */
  #container input {
    width: 378px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  #container input:focus {
    background: rgba(0, 0, 333, 0.1);
  }
  /* l'apparence du bouton */
  #container button {
    background-image: linear-gradient(
      to left,
      #56f086 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #56f086;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg")
      no-repeat;
    background-size: cover;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 380px;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }
  /* l'apparence du input */
  #container input {
    width: 378px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  #container input:focus {
    background: rgba(0, 0, 333, 0.1);
  }
  /* l'apparence du bouton */
  #container button {
    background-image: linear-gradient(
      to left,
      #56f086 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #56f086;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg")
      no-repeat;
    background-size: cover;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 380px;
    width: 436px;
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
    right: 88%;
    top: 4%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 1.3em;
  }
  /* l'apparence du input */
  #container input {
    width: 378px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  #container input:focus {
    background: rgba(0, 0, 333, 0.1);
  }
  /* l'apparence du bouton */
  #container button {
    background-image: linear-gradient(
      to left,
      #56f086 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #56f086;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
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
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg")
      no-repeat;
    background-size: cover;
    position: fixed;
  }
  /* le contenu du formulaire */
  #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    text-align: center;
    border-radius: 5px;
    margin: 3rem auto;
    background: rgba(255, 255, 255, 0.95);
    height: 312px;
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

    right: 84%;

    top: 4%;
    z-index: 2;
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
  }
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Playfair Display", serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    letter-spacing: 2px;
    font-size: 30px;
    margin: 0;
  }
  /* le paragraphe du formulaire */
  #container p {
    background: url("https://image.freepik.com/photos-gratuite/fermer-bouteille-huile-essentielle-renversee-pierre-herbes-aromatiques_100787-2986.jpg");
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Farsan", cursive;
    margin: 3px 0 1.5em 0;
    font-size: 15px;
  }
  /* l'apparence du input */
  #container input {
    width: 224px;
    display: inline-block;
    text-align: center;
    border-radius: 7px;
    background: #eee;
    padding: 1em 2em;
    outline: none;
    border: none;
    color: #222;
    transition: 0.3s linear;
  }
  /* la couleur de la police */
  ::placeholder {
    color: #999;
  }
  /* l'animation du input */
  #container input:focus {
    background: rgba(0, 0, 333, 0.1);
  }
  /* l'apparence du bouton */
  #container button {
    background-image: linear-gradient(
      to left,
      #56f086 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #56f086;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
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
