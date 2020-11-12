<template>
  <div>
    <myproduitkids :produits="produit" />
  </div>
</template>

<script>
import myproduitkids from "../components/myproduitkids";
export default {
  name: "produitkids",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    myproduitkids,
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/all/12/32")
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
