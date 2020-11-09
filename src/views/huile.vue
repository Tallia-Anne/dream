<template>
  <div>
    <myhuile :produits="produits" />
  </div>
</template>

<script>
import myhuile from "../components/myhuile";
export default {
  name: "huile",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    myhuile,
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/findBy/vegetale")
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

<style>
</style>
