<template>
  <div>
    <mymarquenatu :produits="produits" />
  </div>
</template>

<script>
import mymarquenatu from "../components/mymarquenatu";
export default {
  name: "marquenatu",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    mymarquenatu,
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/findBy/shea-moisture")
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
