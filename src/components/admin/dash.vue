<template>
<div>
    <section id="sidebar">
      <section class="title-container">
       <img class="logo" src="../../assets/Afro dream1.png" alt="mon img" width="190" />
        <h1>Afro-dream</h1>
      </section>
      <section class="links-container">
        <div class="links">
          <div class="icon">
            <i class="fas fa-home"></i>
          </div>
          <a href="/admin/dashboard"><h3>Dashboard</h3></a>
        </div>
        <div class="links">
          <div class="icon">
            <i class="fab fa-first-order-alt"></i>
          </div>
          <a href="/"><h3>Home</h3></a>
        </div>
        <div class="links">
          <div class="icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <h3>Analytics</h3>
        </div>
         <div class="links">
          <div class="icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <a href="/listproduit"><h3>Produits</h3></a>
        </div>
        
        <div class="links">
          <div class="icon">
           <i class="fas fa-sign-out-alt"></i>
          </div>
          <h3>Déconnexion</h3>
        </div>
      </section>
    </section>
    

</div>
</template>

<script>
export default {
 name: "dash",
 components: {}
}
</script>

<style scoped>
/* l'ensemble du barre de navigation */
#sidebar {
    background-color:#ff9933;
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 3px 0px 5px 1px rgba(0, 0, 0, 0.1);
  transition: 200ms width;
}
/* disposition du l'ensemble de la section title-container */
.title-container {
  display: flex;
  align-items: center;
  padding: 20px 25px;
}
/* le titre du barre de navigation */
.title-container h1 {
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}
/* la taille du logo */
.logo {
    width: 35%;
}
/* la disposition des liens */
.links-container {
  padding: 15px 25px;
}
.links {
  display: flex;
  align-items: center;
}
/* l'ensembles des icones */
.icon {
  height: 50px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
}
/* les liens de la couleur */
.links h3 {
  padding: 0px 10px;
  font-size: 15px;
  color: white;
}

.links:hover{
    border-left: 5px solid  #ffab05;
    background-color: #FFF9E2;
    box-shadow:10px 15px 5px 3px #ffab05;
    border-radius: 7px;
    color:  #ffab05;
}
.links h3:hover{
    color:  #ffab05;
}
a:hover{
    text-decoration: none;
}

@media (max-width: 1400px) {
 
  #grid-container {
    grid-template-columns: 100%;
  }
  .links h3:hover{
    color:  #ffab05;
}
a:hover{
    text-decoration: none;
}
}

@media (max-width: 950px) {

  .title-container h1 {
    display: none;
  }
  .links h3 {
    display: none;
  }
  #sidebar {
    width: 75px;
  }
  #main-dashboard-content {
    margin-left: 75px;
  }
  .title-container {
    padding: 20px;
  }
  .links:hover{
    border-left: 5px solid  #ffab05;
    background-color: #FFF9E2;
    width: 100%;
    box-shadow:10px 15px 5px 3px #ffab05;
    border-radius: 7px;
    color:  #ffab05;
}
.links h3:hover{
    color:  #ffab05;
}
a:hover{
    text-decoration: none;
}
}
</style>