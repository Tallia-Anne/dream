<template>
  <div class="valide">
    <div class="wrap">
      <h2>Validation de l'adresse email</h2>
  <!-- Début du formulaire --> 
      <form>
        <input
          type="email"
          name="email"
          placeholder="Mettre son email"
          class="form-control my-2 p-2"
          v-model="email"/>

        <div class="input-group">
          <div class="input-box">
            <button @click="validermail" type="submit">Confirmer</button>
          </div>
        </div>
      </form>
       <!-- Fin du formulaire --> 
    </div>
  </div>
</template>

<script>
export default {
  name: "valide",
  components: {},
  data() {
    return {
      email: this.$route.params.email,
    };
  },
  methods: {
    validermail: function () {
      this.axios
        .post(this.$apiurl +"client/validemail", {
          email: this.email,
        })
        .then((result) => {
          alert(result);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* fond d'arrière-plan */
  .valide {
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
    width: 500px;
    height: 48%;
    padding: 25px;
    margin: 25px auto 0;
   box-shadow: 2px 2px 5px black;
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
  /* Le bouton */
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
    margin-left: 19%;
    margin-top: 14%;
  }
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /*fond d'arrière-plan  */
  .valide {
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
    height: 48%;
    padding: 25px;
    margin: 25px auto 0;
   box-shadow: 2px 2px 5px black;
    border-radius: 9px;
  }
  /*Le titre du formulaire */
  .wrap h2 {
    color: white;
    font-size: 34px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Playfair Display", serif;
  }
  /* Le bouton */
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
    margin-left: 19%;
    margin-top: 14%;
  }
  /* animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* fond: arrière-plan */
  .valide {
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
    width: 500px;
    height: 2%;
    padding: 25px;
    margin: 25px auto 0;
   box-shadow: 2px 2px 5px black;
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
    margin-left: 19%;
    margin-top: 14%;
  }
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* fond arrière-plan */
  .valide {
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
    width: 298px;
    height: 24%;
    padding: 25px;
    margin: 25px auto 0;
   box-shadow: 2px 2px 5px black;
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
  /* le bouton du formulaire */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 183px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
    margin-left: 19%;
    margin-top: 14%;
  }
  /* l'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /*fond arrière-plan*/
  .valide {
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
    width: 298px;
    height: 24%;
    padding: 25px;
    margin: 25px auto 0;
   box-shadow: 2px 2px 5px black;
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
  /* le bouton */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 183px;
    background-image: linear-gradient(#cc6699, #ff00cc 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
    margin-left: 19%;
    margin-top: 14%;
  }
  /* L'animation du bouton */
  button:hover {
    cursor: pointer;
    background: red;
  }
}
</style>
