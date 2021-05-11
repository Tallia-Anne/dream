<template>
  <div class="arriere" >
      <mynavbar />
<div class="card">
   <div class="banner">
     
   </div>
   <div class="info">
      <h1 class="name" style="display: inline">Bonjour {{client.nom}}  {{client.prenom}}</h1>
       <h2 class="name" >Les informations personnelles:</h2>
      <div class="details">
        
          <h4> Ville: {{client.ville}} </h4>
         
          <h4> Adresse: {{client.adresse}}</h4>
         <h4>  </h4>
         <h4> cp: {{client.cp}} </h4>
         
          <h4> Numéro de téléphone: {{client.tel}} </h4>
         
         <h4> Adresse mail: {{client.email}} </h4>
         
      </div>
      <div>
          <a href="/profile"><button> Modifier</button></a>
            
      </div>
   </div>
</div>
</div>
</template>

<script>
import jwt from "vue-jwt-decode"
import mynavbar from "@/components/mynavbar.vue";
export default {
  name: "compte",
  components: {
    mynavbar,
  },
  data() {
    return {
      client: {},
      id: this.$route.params.id,
    };
  },
  created() {
    this.axios
      .get(this.$apiurl +"client/profile/" + this.client.id)
      .then((res) => {
        console.log(res);
        this.client = jwt.decode(localStorage.getItem("token"));
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* arrière du conteneur */
 .arriere {
   background-image: url("../assets/fond.jpg");
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 133vh;
    position: absolute;
    
}
/* le conteneur de l'arrière plan */
.card {
	margin: 50px auto;
	background: #ffffff;
	border: #c2c2c2;
	border-radius: 9px;
	padding: 2px;
	text-align: center;
	width: 500px;
	box-shadow: 3px 2px 9px 0px rgba(80, 63, 63, 0.62);
	transition: width .6s;
}
/* la bannière du profile */
.card .banner {
	background-image: url("https://image.freepik.com/photos-gratuite/rose-fleurs-violettes_1203-2191.jpg");
	height: 125px;
}

.card .info {
	padding-top: 48px;
  background: #FCD6EA;
  
}
.name {
  color: white;
  padding: 6%;
  font-size: 28px;
}
.card .info .details {
	text-align: left;
	color: #ff8838;
  padding: 1px 29px;
  font-size: 20px;
}

  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
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
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }

  /* ----------------------------------------------------   Fin   ------------------------------------------------------------------------- */
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* -------------   arrière-plan   -------------*/
  .arrière {
    background-image: url("https://img.freepik.com/photos-gratuite/vue-dessus-bouteille-noix-coco-tranches-orance_23-2148305477.jpg?size=626&ext=jpg&ga=GA1.2.1033970166.1585772392");
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 133vh;
    position: absolute;
    margin-top: 2%;
}
/* conteneur de la card profile*/
.card {
	margin: 50px auto;
	background: #ffffff;
	border: #c2c2c2;
	border-radius: 9px;
	padding: 9px;
	text-align: center;
	width: 500px;
	box-shadow: 3px 2px 9px 0px rgba(80, 63, 63, 0.62);
	transition: width .6s;
}
/* la bannier de la profil */
.card .banner {
	background-image: url("https://image.freepik.com/photos-gratuite/rose-fleurs-violettes_1203-2191.jpg");
	height: 125px;
}
/* le conteneur qui contient les information de l'utilisateur */
.card .info {
	padding-top: 48px;
	background: #FCD6EA;
}
/* L'apparence des informations de l'utilisateur*/
.card .info .details {
	text-align: left;
	color: #ff8838;
	padding: 1px 29px;
}

  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
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
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
  /* ----------------------------------------------------   Parti4   ------------------------------------------------------------------------- */
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .arrière {
    background-image: url("https://img.freepik.com/photos-gratuite/vue-dessus-bouteille-noix-coco-tranches-orance_23-2148305477.jpg?size=626&ext=jpg&ga=GA1.2.1033970166.1585772392");
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 133vh;
    position: absolute;
    margin-top: 2%;
}
.card {
	margin: 50px auto;
	background: #ffffff;
	border: #c2c2c2;
	border-radius: 9px;
	padding: 9px;
	text-align: center;
	width: 500px;
	box-shadow: 3px 2px 9px 0px rgba(80, 63, 63, 0.62);
	transition: width .6s;
}

.card .banner {
	background-image: url("https://image.freepik.com/photos-gratuite/rose-fleurs-violettes_1203-2191.jpg");
	height: 125px;
}

.card .info {
	padding-top: 48px;
	background: #FCD6EA;
}

.card .info .details {
	text-align: left;
	color: #ff8838;
	padding: 1px 29px;
}

  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
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
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
 .arrière {
    background-image: url("https://img.freepik.com/photos-gratuite/vue-dessus-bouteille-noix-coco-tranches-orance_23-2148305477.jpg?size=626&ext=jpg&ga=GA1.2.1033970166.1585772392");
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 133vh;
    position: absolute;
    margin-top: 2%;
}
.card {
	margin: 50px auto;
	background: #ffffff;
	border: #c2c2c2;
	border-radius: 9px;
	padding: 9px;
	text-align: center;
	width: 500px;
	box-shadow: 3px 2px 9px 0px rgba(80, 63, 63, 0.62);
	transition: width .6s;
}

.card .banner {
	background-image: url("https://image.freepik.com/photos-gratuite/rose-fleurs-violettes_1203-2191.jpg");
	height: 125px;
}

.card .info {
	padding-top: 48px;
	background: #FCD6EA;
}

.card .info .details {
	text-align: left;
	color: #ff8838;
	padding: 1px 29px;
}

  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
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
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
 .arrière {
    background-image: url("https://img.freepik.com/photos-gratuite/vue-dessus-bouteille-noix-coco-tranches-orance_23-2148305477.jpg?size=626&ext=jpg&ga=GA1.2.1033970166.1585772392");
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 133vh;
    position: absolute;
    margin-top: 2%;
}
.card {
	margin: 50px auto;
	background: #ffffff;
	border: #c2c2c2;
	border-radius: 9px;
	padding: 9px;
	text-align: center;
	width: 500px;
	box-shadow: 3px 2px 9px 0px rgba(80, 63, 63, 0.62);
	transition: width .6s;
}

.card .banner {
	background-image: url("https://image.freepik.com/photos-gratuite/rose-fleurs-violettes_1203-2191.jpg");
	height: 125px;
}

.card .info {
	padding-top: 48px;
	background: #FCD6EA;
}

.card .info .details {
	text-align: left;
	color: #ff8838;
	padding: 1px 29px;
}

  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
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
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
}
</style>
