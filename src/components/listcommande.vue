<template>
<div>
     <dash />
     <section id="main-dashboard-content">
         
    <div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-lg-12">
            <div class="main-box no-header clearfix">
                <div class="main-box-body clearfix">
                    <div class="table-responsive">
                        <!-- début du tableau  -->
                        <table class="table user-list">
                             <!-- début tête du tableau  -->
                            <thead>
                                <tr>
                                <th><span>l'idientifiant de la commande </span></th>
                                <th><span>Date de commande</span></th>
                                <th><span>Utilisateur</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                             <!-- Fin tête du tableau  -->
                             <!-- début corps du tableau  -->
                            <tbody  v-for="commande in commande" :key="commande.id" >
                                <!--  2eme ligne du tableau -->
                                <tr>
                                    <td>
                                        <p href="#" class="user-link">{{ commande.id }}</p>
                                    </td>
                                    <td>{{ commande.created_at }}</td>
                                    <td>
                                        <p href="#">{{ commande.clientId }}</p></td>
                                    <td style="width: 20%;">
                                       
                                        <a href="#" class="table-link text-info">
                                            <span class="fa-stack">
                                                <i class="fa fa-square fa-stack-2x"></i>
                                                <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                        <a href="#" class="table-link danger">
                                            <span class="fa-stack">
                                                <i class="fa fa-square fa-stack-2x"></i>
                                                <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                                 <!-- Fin 2eme ligne du tableau -->
                                
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
import dash from "../components/admin/dash.vue";

export default {
  name: "listcommande",
  components: {
    dash,
  },
   data() {
    return {
      commande: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/commande/show")
      .then((res) => {
        console.log(res);
        this.commande = res.data.commande;
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

table {
   
    border-collapse: collapse;
    width: 800px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
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
@media screen and (min-width: 1024px) and (max-width: 1280px) {
#main-dashboard-content {
  margin-left: 300px;
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
    border-radius: 7px;
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
    background-color: deeppink;
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
    border-radius: 7px;
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
    background-color: deeppink;
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

table {
    border-collapse: collapse;
    width: 436px;
    height: 200px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
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
    background-color: deeppink;
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
    border-radius: 7px;
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
    background-color: deeppink;
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
