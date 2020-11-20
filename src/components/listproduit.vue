<template>
<div>
     <dash />
     <section id="main-dashboard-content">
         <div class="action-icons">
          <div class="action-icon-one">
              <a href=""><i class="fa fa-times"></i></a>
          </div>
          <div class="action-icon-two">
              <a><i class="fas fa-plus"></i></a>
          </div>
        </div>
    <div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-lg-12">
            <div class="main-box no-header clearfix">
                <div class="cont">
        <form class="form-inline md-form mr-auto mb-4">
          <label>Recherche par titre : </label>
          <input
            class="form-control mr-sm-2 color"
            type="text"
            placeholder="Rechercher"
            v-model="search"
          />
        </form>
      </div>
                <div class="main-box-body clearfix">
                    <div class="table-responsive">
                          <!-- début du tableau  -->
                        <table class="table user-list">
                             <!-- début tête du tableau  -->
                            <thead>
                                <tr>
                                <th><span>Produits</span></th>
                                <th><span>Créaction</span></th>
                                <th><span>Référentiel</span></th>
                                <th><span>Prix</span></th>
                                <th><span>Type de produit</span></th>
                                
                                </tr>
                            </thead>
                              <!-- Fin tête du tableau  -->
                               <!-- début corps du tableau  -->
                            <tbody  v-for="produit in filteredproduit" :key="produit.id" >
                                <tr class="animation">
                                    <td>
                                        <figure>
                                        <a>
                                    <img
                  v-if="produit.Images[0] !== undefined"
                  v-bind:src="
                    require(`@/assets/${produit.Images[0].image}.jpg`)
                  "
                  alt="`${produit.Images[0].image}`"
                  width="100"
                  height="100"
                  v
                />
              </a>
            </figure>
                                        <br>
                                        <span class="user-subhead">{{ produit.nom }}</span>
                                    </td>
                                    <td>{{ produit.created_at }}</td>
                                    
                                    <td>
                                        <p href="#">{{ produit.ref }}</p>
                                    </td>
                                    <td>
                                        <p href="#">{{ produit.prix }}</p>
                                    </td>
                                    <td>
                                        <p href="#">{{ produit.typeproduit }}</p>
                                    </td>
                                   
                                   
                                </tr>
                               
                            </tbody>
                             <!-- Fin corps du tableau  -->
                        </table>
                         <!-- Fin du tableau  -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     </section>
</div>
</template>

<script>
import dash from "@/components/dash.vue";

export default {
  name: "listproduit",
  components: {
    dash,
    
  },
  data() {
    return {
      produits: [],
      search: "",
    };
  },
  computed: {
    filteredproduit() {
      return this.produits.filter((produit) => {
        return produit.nom.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/all")
      .then((res) => {
        console.log(res);
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}
/* l'apparence du tableau */
table {
    border-collapse: collapse;
    width: 800px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
/* l'apparence du tête du tableau */
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
/* animation des lignes   */
.animation:hover {
    background-color: #FCFCFC;;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border: #FF6B95 6px solid;
}
.action-icon-one,
.action-icon-two {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #FF0000;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  margin-left: 8px;
  color: white;
}

.action-icon-two {
  background-color: #77beff;
  color: white;
}
.action-icon-one {
  color: white;
}
.action-icons {
  display: flex;
  padding: 20px;
}

}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}

 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
    text-align: center;
}
table {
   
    border-collapse: collapse;
    width: 800px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.animation:hover {
    background-color: #FCFCFC;;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border: #FF6B95 6px solid;
}

}
@media screen and (min-width: 768px) and (max-width: 1024px) {
#main-dashboard-content {
  margin-left: 85px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}

table {
   
    border-collapse: collapse;
    width: 600px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.animation:hover {
    background-color: #FCFCFC;;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border: #FF6B95 6px solid;
}

}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
#main-dashboard-content {
  margin-left: 59px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}

 /* Le titre  */
.welcome-title {
  font-size: 34px;
  margin: 20px 5px;
   font-weight: bold;
    font-family: "Playfair Display", serif;
    text-align: center;
}
table {
   
    border-collapse: collapse;
    width: 436px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.animation:hover {
    background-color: #FCFCFC;;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border: #FF6B95 6px solid;
}

}
@media screen and (min-width: 320px) and (max-width: 479px) {
#main-dashboard-content {
  margin-left: 88px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}

table {
   
    border-collapse: collapse;
    width: 800px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

tr {
    transition: all .2s ease-in;
    cursor: pointer;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid#ddd;
}
thead {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
    color: #fff;
}
.animation:hover {
    background-color: #FCFCFC;;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border: #FF6B95 6px solid;
}

}
</style>
