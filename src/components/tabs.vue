<template>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical v-model="tabIndex">
        <b-tab title="Tab 1" :title-link-class="linkClass(0)"
          ><b-card-text>Tab contents 1</b-card-text></b-tab
        >
        <b-tab title="Tab 2" :title-link-class="linkClass(1)"
          ><b-card-text>Tab contents 2</b-card-text></b-tab
        >
        <b-tab title="Tab 3" :title-link-class="linkClass(2)"
          ><b-card-text>Tab contents 3</b-card-text></b-tab
        >
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>

<style scoped>
.text-info {
  color: black !important;
  background-color: red !important;
}
</style>