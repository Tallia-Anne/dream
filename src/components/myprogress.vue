<template>
  <div class="container my-5">
    <ul id="progressbar" class="text-center">
      <li class="active" id="step1">
        <div class="d-none d-md-block">Panier</div>
      </li>
      <li class="active" id="step2">
        <div class="d-none d-md-block">Confirmation de la commande</div>
      </li>
      <li class="" id="step3"><div class="d-none d-md-block">Paiement</div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "progress",
};
</script>

<style scoped>
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  color: #455a64;
  padding-left: 0px;
  margin-top: 30px;
}

#progressbar li {
  list-style-type: none;
  width: 16.66%;
  float: left;
  position: relative;
  font-weight: 400;
}

#progressbar #step1:before {
  content: "1";
}

#progressbar #step2:before {
  content: "2";
}

#progressbar #step3:before {
  content: "3";
}
#progressbar #step4:before {
  content: "4";
}

#progressbar li:before {
  width: 40px;
  height: 40px;
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #455a64;
  border-radius: 50%;
  margin: auto;
  color: #fff;
}

#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: #455a64;
  position: absolute;
  left: 0;
  top: 21px;
  z-index: -1;
}

#progressbar li:last-child:after {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  left: -50%;
}

#progressbar li:first-child:after {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  left: 50%;
}

#progressbar li:last-child:after {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#progressbar li:first-child:after {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

#progressbar li.active:before,
#progressbar li.active:after {
  background: red;
}
</style>