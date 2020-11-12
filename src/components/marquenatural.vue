<template>
  <div>
    <mymarquenatural :produits="produits" />
  </div>
</template>

<script>
import mymarquenatural from "../components/mymarquenatural";
export default {
  name: "marquenatural",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    mymarquenatural,
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/findBy/naturalong")
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
