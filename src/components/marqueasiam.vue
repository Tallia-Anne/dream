<template>
  <div>
    <mymarqueasiam :produits="produit" />
  </div>
</template>

<script>
import mymarqueasiam from "../components/mymarqueasiam";
export default {
  name: "marqueasiam",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    mymarqueasiam,
  },
  created() {
    this.axios
      .get(this.$apiurl +"/produit/all/4/7")
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

<style></style>
