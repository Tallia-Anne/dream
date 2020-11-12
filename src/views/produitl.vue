<template>
  <div>
    <myproduitlis :produits="produit" />
  </div>
</template>

<script>
import myproduitlis from "../components/myproduitlis";
export default {
  name: "produitl",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    myproduitlis,
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/all/12/8")
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
