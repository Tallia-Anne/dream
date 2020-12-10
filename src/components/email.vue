<template>
<div class="wrap">
    <dash />
     <section id="main-dashboard-content">
   
    <div id="container">
      <h2>Newsletter</h2>
      <form   @submit.prevent="addproduit" >
        <input type="nom" placeholder="Entrer votre email" required v-model="nom" />
         <input type="ref" placeholder="Entrer votre email" required v-model="ref" />
          <input type="typeproduit" placeholder="Entrer votre email" required v-model="typeproduit" />
           <input type="application" placeholder="Entrer votre email" required v-model="application" />
            <input type="contenance" placeholder="Entrer votre email" required v-model="contenance" />
             <input type="prix" placeholder="Entrer votre email" required v-model="prix" />
              <input type="description" placeholder="Entrer votre email" required v-model="description" />
               <input type="composition" placeholder="Entrer votre email" required v-model="composition" />
        <button><i class="fas fa-envelope"></i> Valider</button>
      </form>
    </div>
       </section>
  </div>
</template>

<script>
import dash from "../components/admin/dash.vue";
export default {
    components: {
    dash,
  },
   data() {
    return {
      produit: {},
       nom: "",
      ref: "",
       typeproduit: "",
      application: "",
       contenance: "",
      prix: "",
       description: "",
      composition: "",
    };
  },
   methods: {
    addproduit: function () {
      this.axios
        .post("http://localhost:3000/produit/new", {
          nom: this.nom,
          ref: this.ref,
          typeproduit: this.typeproduit,
          application: this.application,
          contenance: this.contenance,
          prix: this.prix,
          description: this.description,
          composition: this.composition,

        })
        .then((result) => {
          alert(result);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
}
</script>

<style scoped>
#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
  /* arrière-plan */
  .wrap {
    content: "";
    height: 100vh;
    width: 100vw;
    background: url("https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg")
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
    height: 580px;
    width: 520px;
    padding: 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  
  /* titre du formulaire */
  #container h2 {
    background: url("https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg");
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
    background: url("https://image.freepik.com/photos-gratuite/ensemble-produits-noix-coco-pour-soin-cheveux-du-corps_100073-106.jpg");
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
    margin-top: 12px;
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
      rgba(255, 146, 202, 0.75) 0%,
      rgba(145, 149, 251, 0.86) 100%
    );
    box-shadow: 0 9px 25px -5px #df91fb;
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
</style>