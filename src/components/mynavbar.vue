<template>
  <div>
    <input type="checkbox" id="check" />
    <label class="boutonopen" for="check">
      <!--  les trois traits  -->
      <i class="fas fa-bars" id="btn"></i>
      <!--  la croix  -->
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <h1 class="text">Afro Dream</h1>
      <a href="/" class="active">
        <i class="fas fa-qrcode"></i>
        <span>Accueil</span>
      </a>
      <a href="/compte">
        <i class="far fa-user"></i>
        <span>Compte</span>
      </a>
      <a href="/commande">
        <i class="fas fa-link"></i>
        <span>Commandes</span>
      </a>
       <a>
        <i class="fas fa-sign-out-alt"></i>
        <span class="dec">Déconnexion</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 240px;
  left: -240px;
  height: 100%;
  background: #1e1e1e;
  transition: all 0.5s ease;
  top: 0;
  z-index: 2;
}
.sidebar h1 {
  font-size: 28px;
  color: white;
  line-height: 70px;
  text-align: center;
  background: #1b1b1b;
  user-select: none;
  font-family: "Montserrat", sans-serif;
}

.sidebar a {
  display: block;
  height: 65px;
  width: 100%;
  color: white;
  line-height: 65px;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 5px solid transparent;
  font-family: "Open Sans", sans-serif;
  transition: all 0.5s ease;
}
a.active,
a:hover {
  border-left: 5px solid #740040;
  color: #740040;
}
.sidebar a i {
  font-size: 23px;
  margin-right: 16px;
}
.sidebar a span {
  letter-spacing: 1px;
  text-transform: uppercase;
}
#check {
  display: none;
}
/* la placement du bouton */
.boutonopen {
  top: 1%;
  left: 9%;
  position: absolute;
}
/* le bouton: forme, la couleur du bloc. 
Et la taille et la couleur de l'icone: croix(cancel) */
label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: 1px solid #262626;
  margin: 15px 30px;
  font-size: 29px;
  background: #262626;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  transition: all 0.5s ease;
}
.dec, .fa-sign-out-alt:before  {
  color: red;
}

label #cancel {
  /* icone bars plus visibilité */
  opacity: 0;
  visibility: hidden;
}

/* quand on va cliquer sur le bouton. 
le bouton vers la droite */
#check:checked ~ label #btn {
  margin-left: 245px;
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ label #cancel {
  margin-left: 245px;
  opacity: 1;
  visibility: visible;
}
/* sidebar ramener vers la droit 
quand on clique sur le bouton */
#check:checked ~ .sidebar {
  left: 0;
}
@media (max-width: 860px) {
  .sidebar {
    height: auto;
    width: 70px;
    /* permet mettre sidebar en bas */
    left: 0;
    /* les espaces entre les span */
    margin: 100px 0;
  }
  /* faire disparait le titre et le bouton avec les icones */
  h1,
  #btn,
  #cancel {
    display: none;
  }
  span {
    position: absolute;
    margin-left: 23px;
    opacity: 0;
    visibility: hidden;
  }
  .sidebar a {
    height: 60px;
  }
  .sidebar a i {
    margin-left: -10px;
  }
  a:hover {
    width: 331px;
    background: inherit;
  }
  .sidebar a:hover span {
    opacity: 1;
    visibility: visible;
  }
}
</style>
