<template>
  <div>
    <myproduitbouc :produits="produit" />
  </div>
</template>

<script>
import myproduitbouc from "../components/myproduitbouc";
export default {
  name: "produitb",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    myproduitbouc,
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/all/12/15")
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
