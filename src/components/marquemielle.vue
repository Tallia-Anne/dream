<template>
  <div>
    <mymarquemielle :produits="produits" />
  </div>
</template>

<script>
import mymarquemielle from "../components/mymarquemielle";
export default {
  name: "marquemielle",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    mymarquemielle,
  },
  created() {
    this.axios
      .get(this.$apiurl +"produit/findBy/mielle")
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
