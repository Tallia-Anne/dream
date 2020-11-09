<template>
  <div>
    <mymarquecreme :produits="produit" />
  </div>
</template>

<script>
import mymarquecreme from "../components/mymarquecreme";
export default {
  name: "marquecreme",
  data() {
    return {
      produit: {},
    };
  },
  components: {
    mymarquecreme,
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/all/8/23")
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
