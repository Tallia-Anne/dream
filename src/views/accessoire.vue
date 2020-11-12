<template>
  <div>
    <myaccessoire :produits="produit" />
  </div>
</template>

<script>
import myaccessoire from "../components/myaccessoire";
export default {
  name: "accessoire",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    myaccessoire,
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/all/12/56")
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
