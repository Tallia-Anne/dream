<template>
<!-- Inserer du fichier mybrocher -->
  <div>
    <mybrocher :produits="produits" />
  </div>
</template>

<script>
/* importation du fichier mybricher */
import mybrocher from "../components/mybrocher";
export default {
  name: "brocher",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    mybrocher,
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/findBy/brocher")
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

<style></style>
