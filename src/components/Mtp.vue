<template>
  <div class="wrapper">
    <div class="regform">
      <div class="form-left">
        <img src="../assets/mtp.jpg" alt="mon login" />
      </div>
      <form @submit.prevent="doupdatepass" class="form-detail">
        <h2>Mot de passe oublié</h2>

        <div class="form-row">
          <input
            type="forget"
            name="forget"
            class="input-text"
            placeholder="inserer le mot de passe oublié"
            v-model="forget"
          />
        </div>
        <div class="form-row">
          <input
            type="password"
            name="password"
            class="input-text"
            placeholder="Mettre son nouveau mot de passe"
            v-model="password"
          />
        </div>
        <div class="form-row-last">
          <input
            type="submit"
            name="register"
            id="register"
            class="register"
            value="Confirmer"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mtp",
  components: {},
  data() {
    return {
      forget: "",
      password: "",
    };
  },
  methods: {
    doupdatepass: function () {
      this.axios
        .post(this.$apiurl +"/client/updatepassword", {
          forget: this.forget,
          password: this.password,
        })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "login" });
            window.location.reload();
          } else {
            this.$router.push({
              name: "login",
              params: { msg: "non connecté" },
            });
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
  /* arrière plan */
  .wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/fond.jpg");
  }

  /* le bloc du formulaire */
  .regform {
    background: #fff;
    width: 968px;
    border-radius: 7px;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    display: flex;
    box-shadow: 10px 3px 10px 11px rgba(0, 0, 0, 0.75);
    margin-left: 13%;
    margin-top: 3%;
    height: 81%;
  }
  /* le positionnement 
de l'image vers le bas */
  .regform .form-left {
    margin-bottom: -6px;
  }
  /* image du formulaire */
  .regform .form-left img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 107%;
    height: 99%;
  }
  /* formulaire */
  .regform .form-detail {
    padding: 78px 40px;
    position: relative;
    width: 100%;
  }
  /* le titre du formulaire */
  .regform .form-detail h2 {
    text-align: center;
    font-size: 36px;
    padding: 6px 0 0;
    position: relative;
    margin-bottom: 48px;
    color: #333;
    font-weight: 600;
  }
  /* la positionnement des inputs */
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 8px;
    margin-left: 25px;
  }
  /* la taille des inputs */
  .regform .form-detail .form-row {
    width: 100%;
  }
  /* le positionnement des inputs */
  .regform .form-detail .form-row-last {
    text-align: center;
  }
  /* le format du formulaire */
  .regform .form-detail .input-text {
    margin-bottom: 35px;
  }
  /* l'apparence des inputs: la taille, la couleur, la police */
  .regform .form-detail input {
    width: 92%;
    padding: 0 15px 10px 15px;
    border: 2px solid transparent;
    border-bottom: 2px solid #e5e5e5;
    outline: none;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  /* les effets des input grâce aux focus */
  .regform .form-detail input:focus {
    border-bottom: 2px solid#740040;
  }
  /* le bouton du formulaire */
  .regform .form-detail .register {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    box-shadow: 0 9px 25px -5px orange;
    color: white;

    border-radius: 6px;
    width: 160px;
    padding: 10px;
    border: none;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0, 15) !important;
    margin: -12px 0 50px 0px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 18px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* arrière plan */
  .wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/fond.jpg");
  }

  /* le bloc du formulaire */
  .regform {
    background: #fff;
    width: 968px;
    border-radius: 7px;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    display: flex;
    box-shadow: 10px 3px 10px 11px rgba(0, 0, 0, 0.75);
    margin-left: 13%;
    margin-top: 3%;
    height: 81%;
  }
  /* le positionnement 
de l'image vers le bas */
  .regform .form-left {
    margin-bottom: -6px;
  }
  /* image du formulaire */
  .regform .form-left img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 107%;
    height: 99%;
  }
  /* formulaire */
  .regform .form-detail {
    padding: 78px 40px;
    position: relative;
    width: 100%;
  }
  /* le titre du formulaire */
  .regform .form-detail h2 {
    text-align: center;
    font-size: 36px;
    padding: 6px 0 0;
    position: relative;
    margin-bottom: 48px;
    color: #333;
    font-weight: 600;
  }
  /* la positionnement des inputs */
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 8px;
    margin-left: 25px;
  }
  /* la taille des inputs */
  .regform .form-detail .form-row {
    width: 100%;
  }
  /* le positionnement des inputs */
  .regform .form-detail .form-row-last {
    text-align: center;
  }
  /* le format du formulaire */
  .regform .form-detail .input-text {
    margin-bottom: 35px;
  }
  /* l'apparence des inputs: la taille, la couleur, la police */
  .regform .form-detail input {
    width: 92%;
    padding: 0 15px 10px 15px;
    border: 2px solid transparent;
    border-bottom: 2px solid #e5e5e5;
    outline: none;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  /* les effets des input grâce aux focus */
  .regform .form-detail input:focus {
    border-bottom: 2px solid#740040;
  }
  /* le bouton du formulaire */
  .regform .form-detail .register {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    box-shadow: 0 9px 25px -5px orange;
    color: white;

    border-radius: 6px;
    width: 160px;
    padding: 10px;
    border: none;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0, 15) !important;
    margin: -12px 0 50px 0px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 18px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* arrière plan */
  .wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/fond.jpg");
  }
  /* le format du formulaire */
  .regform {
    margin: 120px 20px;
    flex-direction: column;
    width: 73%;
  }
  /* la taille de l'image */
  .regform .form-left {
    width: 100%;
  }
  /* le format de l'image */
  .regform .form-left img {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
  }
  /* les positionnement des inputs */
  .regform .form-detail {
    width: auto;
    padding: 30px 20px 30px 20px;
  }
  /* le positionnement du bouton */
  .regform .form-detail .register {
    margin-bottom: 80px;
  }
  /* le bloc du formulaire */
  .regform {
    background: #fff;
    width: 67%;
    border-radius: 7px;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    display: flex;
    box-shadow: 10px 3px 10px 11px rgba(0, 0, 0, 0.75);
    margin-left: 13%;
    margin-top: 3%;
    height: 66%;
  }
  .regform .form-detail input {
    width: 92%;
    padding: 33px 15px 10px 15px;
    border: 2px solid transparent;
    border-bottom: 2px solid #e5e5e5;
    outline: none;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  /* les effets des input grâce aux focus */
  .regform .form-detail input:focus {
    border-bottom: 2px solid#740040;
  }
  /* le bouton du formulaire */
  .regform .form-detail .register {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    box-shadow: 0 9px 25px -5px orange;
    color: white;

    border-radius: 6px;
    width: 160px;
    padding: 10px;
    border: none;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0, 15) !important;
    margin: 37px 0 50px 0px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 18px;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  /* arrière plan */
  .wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/fond.jpg");
  }
  /* le format du formulaire */
  .regform {
    margin: 120px 20px;
    flex-direction: column;
    width: 73%;
  }
  /* la taille de l'image */
  .regform .form-left {
    width: 100%;
  }
  /* le format de l'image */
  .regform .form-left img {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
  }
  /* les positionnement des inputs */
  .regform .form-detail {
    width: auto;
    padding: 30px 20px 30px 20px;
  }
  /* le positionnement du bouton */
  .regform .form-detail .register {
    margin-bottom: 80px;
  }
  /* le bloc du formulaire */
  .regform {
    background: #fff;
    width: 67%;
    border-radius: 7px;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    display: flex;
    box-shadow: 10px 3px 10px 11px rgba(0, 0, 0, 0.75);
    margin-left: 13%;
    margin-top: 3%;
    height: 56%;
  }
  .regform .form-detail input {
    width: 92%;
    padding: 33px 15px 10px 15px;
    border: 2px solid transparent;
    border-bottom: 2px solid #e5e5e5;
    outline: none;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  /* les effets des input grâce aux focus */
  .regform .form-detail input:focus {
    border-bottom: 2px solid#740040;
  }
  /* le bouton du formulaire */
  .regform .form-detail .register {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    box-shadow: 0 9px 25px -5px orange;
    color: white;

    border-radius: 6px;
    width: 160px;
    padding: 10px;
    border: none;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0, 15) !important;
    margin: 37px 0 50px 0px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 18px;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  /* arrière plan */
  .wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/fond.jpg");
  }
  /* le format du formulaire */
  .regform {
    margin: 120px 20px;
    flex-direction: column;
    width: 73%;
  }
  /* la taille de l'image */
  .regform .form-left {
    width: 100%;
  }
  /* le format de l'image */
  .regform .form-left img {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
  }
  /* les positionnement des inputs */
  .regform .form-detail {
    width: auto;
    padding: 30px 20px 30px 20px;
  }
  /* le positionnement du bouton */
  .regform .form-detail .register {
    margin-bottom: 80px;
  }
  /* le bloc du formulaire */
  .regform {
    background: #fff;
    width: 67%;
    border-radius: 7px;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    display: flex;
    box-shadow: 10px 3px 10px 11px rgba(0, 0, 0, 0.75);
    margin-left: 13%;
    margin-top: 3%;
    height: 49%;
  }
  .regform .form-detail input {
    width: 92%;
    padding: 33px 15px 10px 15px;
    border: 2px solid transparent;
    border-bottom: 2px solid #e5e5e5;
    outline: none;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  /* les effets des input grâce aux focus */
  .regform .form-detail input:focus {
    border-bottom: 2px solid#740040;
  }
  /* le bouton du formulaire */
  .regform .form-detail .register {
    background-image: linear-gradient(to left, yellow 0%, orange 100%);
    box-shadow: 0 9px 25px -5px orange;
    color: white;

    border-radius: 6px;
    width: 160px;
    padding: 10px;
    border: none;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0, 15) !important;
    margin: 37px 0 50px 0px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
