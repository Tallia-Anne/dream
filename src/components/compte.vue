<template>
  <div class="wrap">
    <mynavbar />
    <div class="container emp-profile">
      <form>
        <div class="row">
          <div class="col-md-4">
            <!-- Parti1 -->
            <div class="profile-img">
              <img src="../assets/0.jpg" alt />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <!-- permet d'inserer la photo  -->
                <input type="file" name="file" />
              </div>
            </div>
            <!--  fin de Parti1 -->
          </div>
          <!-- Parti2 -->
          <div class="col-md-6">
            <div v-for="client in client" :key="client.id" class="profile-head">
              <h5>{{ client.prenom }}</h5>

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <i class="fa fa-user icon"></i> Profil
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Fin de Parti2 -->
          <!-- Parti3 -->
          <div class="col-md-2">
            <button class="profile-edit-btn" name="btnAddMore">
              <a href="/profile">Modifier son profil</a>
            </button>
          </div>
        </div>
        <!-- Parti4 -->
        <div class="row">
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Prénom:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.prenom }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Nom:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.nom }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Ville:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.ville }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Adresse:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.adresse }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>2eme Adresse:</label>
                  </div>
                  <div class="col-md-6">
                    <p>......</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Adresse email:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.email }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Téléphone:</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ client.tel }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Parti4 -->
      </form>
    </div>
  </div>
</template>

<script>
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
      .get(this.$apiurl +"/client/profile/" + this.client.id)
      .then((res) => {
        console.log(res);
        this.client = res.data.client;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* ----------------------------------------------------   Parti1   ------------------------------------------------------------------------- */
  /* l'image du fond: arrière-plan */
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  /* le bloc */
  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  /* l'emplacement file(inserer une photo) */
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  /* ----------------------------------------------------   Fin de Parti1   ------------------------------------------------------------------------- */

  /* ----------------------------------------------------   Fin de Parti2   ------------------------------------------------------------------------- */
  /* Le nom de l'utilisateur */
  .profile-head h5 {
    font-family: "Playfair Display", serif;
    color: #333;
  }
  /* ----------------------------------------------------   Fin de Parti2   ------------------------------------------------------------------------- */
  /* ----------------------------------------------------   Parti3   ------------------------------------------------------------------------- */
  /*le bouton */
  .profile-edit-btn {
    border: none;
    border-radius: 7px;
    width: 78%;
    height: 30%;
    font-size: 16px;
    background: #740040;
    font-weight: 600;
    cursor: pointer;
  }
  /* le lien du bouton */
  .profile-edit-btn a {
    color: white;
    font-size: 15px;
  }
  /* ----------------------------------------------------   Fin de Parti3   ------------------------------------------------------------------------- */
  /* ----------------------------------------------------   Parti4   ------------------------------------------------------------------------- */

  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 4px solid #740040;
  }

  .profile-tab label {
    font-weight: 600;
  }

  .profile-tab p {
    font-weight: 600;
    color: black;
  }

  /* ----------------------------------------------------   Fin de Parti4   ------------------------------------------------------------------------- */
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /* ----------------------------------------------------   Parti1   ------------------------------------------------------------------------- */
  /* l'image du fond: arrière-plan */
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 642px;
    position: absolute;
  }
  /* bloc de blanc  */
  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }

  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  /* placement input:file  */
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  /* ----------------------------------------------------   Fin de Parti1   ------------------------------------------------------------------------- */
  .profile-head h5 {
    font-family: "Playfair Display", serif;
    color: #333;
  }
  /* ----------------------------------------------------   Parti3   ------------------------------------------------------------------------- */
  /* le bouton */
  .profile-edit-btn {
    border: none;
    border-radius: 7px;
    width: 78%;
    height: 33%;
    font-size: 16px;
    background: #740040;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  /* le lien du  bouton */
  .profile-edit-btn a {
    color: white;
  }
  /* ----------------------------------------------------   Fin de Parti3   ------------------------------------------------------------------------- */
  /* ----------------------------------------------------   Parti4   ------------------------------------------------------------------------- */

  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 4px solid #740040;
  }

  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: black;
  }
  /* ----------------------------------------------------   Parti4   ------------------------------------------------------------------------- */
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    font-family: "Playfair Display", serif;
    color: #333;
  }

  .profile-edit-btn {
    border: none;
    border-radius: 7px;
    width: 88%;
    height: 43%;
    font-size: 16px;
    background: #740040;
    font-weight: 600;
    cursor: pointer;
  }
  .profile-edit-btn a {
    color: white;
  }
  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 4px solid #740040;
  }

  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: black;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
    height: 798px;
    width: 56%;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    font-family: "Playfair Display", serif;
    color: #333;
  }

  .profile-edit-btn {
    border: none;
    border-radius: 7px;
    width: 78%;
    height: 33%;
    font-size: 16px;
    background: #740040;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }

  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 4px solid #740040;
  }

  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: black;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
    height: 798px;
    width: 56%;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    font-family: "Playfair Display", serif;
    color: #333;
  }

  .profile-edit-btn {
    border: none;
    border-radius: 7px;
    width: 88%;
    height: 49px;
    font-size: 16px;
    background: #740040;
    font-weight: 600;
    cursor: pointer;
  }
  .profile-edit-btn a {
    color: white;
  }

  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 4px solid #740040;
  }

  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: black;
    font-size: 12px;
  }
}
</style>
