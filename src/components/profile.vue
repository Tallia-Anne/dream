<template>
  <div class="container">
    <mynavbar />
    
    <div class="contact-box"  >
      <div v-if="message !== null">
      <div>
        {{ message }}
      </div>
    </div>
      
      <div class="left"></div>
      <div class="right">
        <h2>Mettre à jour</h2>
        <form @submit.prevent="update">
          <input
            type="prenom"
            placeholder="Mettre son prenom"
            class="field"
            v-model="client.prenom"
          />
          <input
            type="nom"
            placeholder="Mettre son nom"
            class="field"
            v-model="client.nom"
          />
           <input
            type="ville"
            placeholder="Insérer son ville"
            class="field"
            v-model="client.ville"
          />
          <input
            type="adresse"
            placeholder="Insérer son adresse"
            class="field"
            v-model="client.adresse"
          />
          <input
            type="cp"
            placeholder="Mettre son code postale"
            class="field"
            v-model="client.cp"
          />
          <input
            type="tel"
            class="field"
            placeholder="Téléphone"
            v-model="client.tel"
          />
          <input
            type="email"
            name="email"
            placeholder="Mettre son adresse email"
            class="field"
            v-model="client.email"
          />
          <input
            type="password"
            name="password"
            placeholder="Mettre son mot de passe"
            class="field"
            v-model="client.password"
          />

          <button type="submit" class="btn">Modifier</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import mynavbar from "@/components/mynavbar.vue";
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "profile",
  data() {
    return {
      client: {},
      message: null,
    };
  },
  components: {
    mynavbar,
  },
  created: function () {
    if (localStorage.getItem("token") === null) {
      this.$router.push({ name: "compte/:id" });
    } else {
      this.client = VueJwtDecode.decode(localStorage.getItem("token"));
      console.log(this.client);
    }
  },
  methods: {
     update: function() {
      this.axios
        .put(
          "http://localhost:3000/client/update/" + this.client.id,
          this.client
        )
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            this.message = "votre profil est a jour";
          } else {
            this.message = "error: votre profil n'est pas mis a jour";
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
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }
  /* arrière plan */
  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/fond.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  /* ensemble du formulaire et l'image */
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  /* image */
  .left {
    background: url("../assets/profil.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
  }
  /* ensemble du formulaire */
  .right {
    padding: 25px 40px;
  }
  /* le titre du formulaire */
  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
  }

  /* les inputs: interieur */
  .field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    transition: 0.3s;
  }
  /* le bouton */
  .btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(yellow, orange 70px);
    font-family: "Playfair Display", serif;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }
  /* animation du bouton */
  .btn:hover {
    background-color: #27ae60;
  }
  /* le contours des input */
  .field:focus {
    border: 2px solid #ffcc99;
    box-shadow: 0 0 2px 1px #ffcc99;
    background-color: #fff;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }
  /* arrière-plan */
  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/fond.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  /* bloc du formulaire */
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  /* l'image */
  .left {
    background: url("../assets/profil.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
  }

  .right {
    padding: 25px 40px;
  }

  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
  }

  .field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    transition: 0.3s;
  }
  /* le bouton */
  .btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(yellow, orange 70px);
    font-family: "Playfair Display", serif;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .field:focus {
    border: 2px solid #ffcc99;
    box-shadow: 0 0 2px 1px #ffcc99;
    background-color: #fff;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }
  /*arrière-plan */
  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/fond.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  /* ensemble du formulaire */
  .right {
    padding: 25px 40px;
  }
  /* titre du formulaire */
  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
  }
  /* ensemble du formulaire et image */
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  .left {
    background: url("../assets/profil.jpg") no-repeat center;
    background-size: cover;
    height: 200px;
  }
  .field {
    width: 74%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 25px;
    margin-bottom: 22px;
    transition: 0.3s;
  }
  /* le bouton */
  .btn {
    width: 74%;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(yellow, orange 70px);
    font-family: "Playfair Display", serif;
    color: #fff;
    font-size: 22px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }
  /* arrière-plan */
  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/fond.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  /* le contenu du formulaire */
  .right {
    padding: 25px 40px;
  }
  /* le titre du formulaire */
  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
  }
  /* le bloc du formulaire */
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  /* l'image */
  .left {
    background: url("../assets/profil.jpg") no-repeat center;
    background-size: cover;
    height: 200px;
  }
  /* intérieur des inputes */
  .field {
    width: 74%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 10px;
    margin-bottom: 22px;
    transition: 0.3s;
  }
  /* le bouton */
  .btn {
    width: 74%;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(yellow, orange 70px);
    font-family: "Playfair Display", serif;
    color: #fff;
    font-size: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }
  /* arrière-plan */
  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/fond.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  /* contenu du formulaire */
  .right {
    padding: 25px 40px;
  }
  /* le titre du formulaire */
  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: "Playfair Display", serif;
  }
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  /* l'image du formulaire */
  .left {
    background: url("../assets/profil.jpg") no-repeat center;
    background-size: cover;
    height: 200px;
  }
  /* intérieur des inputs */
  .field {
    width: 123px;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 11px;
    margin-bottom: 22px;
    transition: 0.3s;
  }
  /* le bouton */
  .btn {
    width: 123px;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(yellow, orange 70px);
    font-family: "Playfair Display", serif;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }
}
</style>
