<template>
  <div>
    <mycompte :clients="clients" />
  </div>
</template>

<script>
import mycompte from "../components/mycompte";
export default {
  name: "compte",
  created() {
    this.axios
      .get("http://localhost:3000/client/profile")
      .then((res) => {
        console.log(res.data);
        this.clients = res.data.client;
      })
      .catch((err) => {
        alert(err);
      });
  },
  data() {
    return {
      client: {},
    };
  },
  components: {
    mycompte,
  },
};
</script>

<style>
</style>