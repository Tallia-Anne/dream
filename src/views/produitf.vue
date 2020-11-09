<template>
  <div>
    <myproduitfris :produits="produit" />
  </div>
</template>

<script>
import myproduitfris from "../components/myproduitfris";
export default {
  name: "produitf",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    myproduitfris,
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/all/12/15")
      .then((res) => {
        console.log(res);
        this.produit = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style>
</style>
