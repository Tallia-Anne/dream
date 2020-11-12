<template>
  <div>
    <myproduit :produits="produits" />
  </div>
</template>

<script>
import myproduit from "../components/myproduit";
export default {
  name: "produit",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    myproduit,
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/limit/32")
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
