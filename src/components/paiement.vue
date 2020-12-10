<template>
<div class="wrap">
  <div class="container">
    <div class="col-6 offset-3">
      <div class="card  wrapper">
        <div class="card-header">
          <h1>Détail de paiement</h1>
          </div>
        <div class="card-body">
          <div class="alert alert-success" v-if="nonce">
            Successfully generated nonce.
          </div>
          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>
          <form>
            <div class="form-group">
              <label for="amount">Prix</label>
              <div class="input-group">
                
                <input
                  type="number"
                  id="amount"
                  v-model="amount"
                  class="form-control"
                  placeholder="Prix"
                />
              </div>
            </div>
            <div class="form-group">
              
              <label>Numéro de la carte</label>
              
              <div id="creditCardNumber" class="form-control">
                
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label>Date d'expiration</label>
                  <div id="expireDate" class="form-control"></div>
                </div>
                <div class="col-6">
                  <label>CVV</label>
                  <div id="cvv" class="form-control"></div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-primary btn-block"
              @click.prevent="payWithCreditCard"
            ><i class="fa fa-check"></i>
              Valider
            </button>
            <hr />
            <div id="paypalButton"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import braintree from "braintree-web";
import paypal from "paypal-checkout";
export default {
  data() {
    return {
      hostedFieldInstance: false,
      nonce: "",
      error: "",
      amount: "",
    };
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("this.$route.params.total", this.$route.params.total);
    if (this.$route.params.total !== undefined) {
      this.amount = this.$route.params.total;
    } else {
      this.$router.push("/panier");
    }
  },
  methods: {
    payWithCreditCard() {
      if (this.hostedFieldInstance) {
        this.error = "";
        this.nonce = "";
        this.hostedFieldInstance
          .tokenize()
          .then((payload) => {
            // eslint-disable-next-line no-console
            console.log(payload);
            this.nonce = payload.nonce;
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
            this.error = err.message;
          });
      }
    },
  },
  mounted() {
    braintree.client
      .create({
        authorization: "sandbox_38vhwqb5_xry6c9v3j8x7x5vg",
      })
      .then((clientInstance) => {
        let options = {
          client: clientInstance,
          styles: {
            input: {
              "font-size": "14px",
              "font-family": "Open Sans",
            },
          },
          fields: {
            number: {
              selector: "#creditCardNumber",
              placeholder: "Enter Credit Card",
            },
            cvv: {
              selector: "#cvv",
              placeholder: "Enter CVV",
            },
            expirationDate: {
              selector: "#expireDate",
              placeholder: "00 / 0000",
            },
          },
        };
        return Promise.all([
          braintree.hostedFields.create(options),
          braintree.paypalCheckout.create({ client: clientInstance }),
        ]);
      })
      .then((instances) => {
        const hostedFieldInstance = instances[0];
        const paypalCheckoutInstance = instances[1];
        // Use hostedFieldInstance to send data to Braintree
        this.hostedFieldInstance = hostedFieldInstance;

        // Setup PayPal Button
        return paypal.Button.render(
          {
            env: "sandbox",
            style: {
              label: "paypal",
              size: "responsive",
              shape: "rect",
            },
            payment: () => {
              return paypalCheckoutInstance.createPayment({
                flow: "checkout",
                intent: "sale",
                amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                displayName: "Braintree Testing",
                currency: "USD",
              });
            },
            // eslint-disable-next-line no-unused-vars
            onAuthorize: (data, options) => {
              return paypalCheckoutInstance
                .tokenizePayment(data)
                .then((payload) => {
                  // eslint-disable-next-line no-console
                  console.log(payload);
                  this.error = "";
                  this.nonce = payload.nonce;
                });
            },
            onCancel: (data) => {
              // eslint-disable-next-line no-console
              console.log(data);
              // eslint-disable-next-line no-console
              console.log("Payment Cancelled");
            },
            onError: (err) => {
              // eslint-disable-next-line no-console
              console.error(err);
              this.error =
                "An error occurred while processing the paypal payment.";
            },
          },
          "#paypalButton"
        );
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {});
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  /* arrière-plan */
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  /* le bloc du formulaire */
  .wrapper {
    background-color: #fff;
    width: 500px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  /* le titre du formulaire */
   h1 {
    background-color: pink;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px dotted #333;
    font-family: "Playfair Display", serif;
  }
  .card-header {
    background-color: white;
    border: none;
  } 
  .form-group {
    border: none!important;
  }
  
  /* l'apparence du bouton */
   button {
   background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 143vh;
    position: absolute;
  }
  .wrapper {
    background-color: #fff;
    width: 500px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  .card-header h1 {
    background-color: pink;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center; 
    border: none;
    font-family: "Playfair Display", serif;
  }

   /* l'apparence du bouton */
   button {
  background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    box-shadow: 0 9px 25px -5px #D41872;
    font-family: "Abel", sans-serif;
    padding: 0.5em 1.9em;
    margin: 39px 0 0 0;
    border-radius: 7px;
    font-size: 1.4em;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    border: none;
    transition: 0.3s linear;
  }
   button:hover {
    transform: translatey(2px);
  }
   button:active {
    transform: translatey(5px);
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .wrapper {
    background-color: #fff;
    width: 500px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
  .wrapper h2 {
    background-color: pink;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: none;
    font-family: "Playfair Display", serif;
  }
  h4 {
    padding-bottom: 5px;
    color: black;
    font-family: "Playfair Display", serif;
  }
  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  .name:focus,
  .dob:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  .dob {
    width: 30%;
    padding: 14px;
    text-align: center;
    background-color: #fcfcfc;
    transition: 0.3s;
    outline: none;
    border: 1px solid #c0bfbf;
    border-radius: 3px;
  }
  .radio {
    display: none;
  }
  .input-box label {
    width: 50%;
    padding: 13px;
    background-color: #fcfcfc;
    display: inline-block;

    text-align: center;
    border: 1px solid #c0bfbf;
    font-family: "Playfair Display", serif;
  }
  .input-box label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  .input-box label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .radio:checked + label {
    background-color: pink;
    color: #fff;
    transition: 0.5s;
  }
  .input-box select {
    display: inline-block;
    width: 50%;
    padding: 12px;
    background-color: #fcfcfc;

    text-align: center;
    font-size: 16px;
    outline: none;
    border: 1px solid #c0bfbf;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .input-box select:focus {
    background-color: pink;
    color: #fff;
    text-align: center;
  }
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(pink, orange 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  button:hover {
    cursor: pointer;
    background: #5eb105;
  }
}
@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .wrapper {
    background-color: #fff;
    width: 411px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .wrapper h2 {
    background-color: pink;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px dotted #333;
    font-family: "Playfair Display", serif;
  }
  h4 {
    padding-bottom: 5px;
    color: black;
    font-family: "Playfair Display", serif;
  }
  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  .name:focus,
  .dob:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  .dob {
    width: 30%;
    padding: 14px;
    text-align: center;
    background-color: #fcfcfc;
    transition: 0.3s;
    outline: none;
    border: 1px solid #c0bfbf;
    border-radius: 3px;
  }
  .radio {
    display: none;
  }
  .input-box label {
    width: 50%;
    padding: 13px;
    background-color: #fcfcfc;
    display: inline-block;
    text-align: center;
    border: 1px solid #c0bfbf;
    font-family: "Playfair Display", serif;
  }
  .input-box label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  .input-box label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .radio:checked + label {
    background-color: pink;
    color: #fff;
    transition: 0.5s;
  }
  .input-box select {
    display: inline-block;
    width: 50%;
    padding: 12px;
    background-color: #fcfcfc;

    text-align: center;
    font-size: 16px;
    outline: none;
    border: 1px solid #c0bfbf;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .input-box select:focus {
    background-color: pink;
    color: #fff;
    text-align: center;
  }
  /* le bouton */
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(pink, orange 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* animation du bouton  */
  button:hover {
    cursor: pointer;
    background: #5eb105;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .wrap {
    background-image: url("../assets/fond.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .wrapper {
    background-color: #fff;
    width: 278px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .wrapper h2 {
    background-color: pink;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px dotted #333;
    font-family: "Playfair Display", serif;
  }
  /* le titre du formulaire */
  h4 {
    padding-bottom: 5px;
    color: black;
    font-family: "Playfair Display", serif;
  }
  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #00000033;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
  }
  .name:focus,
  .dob:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  .input-box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000033;
    border-right: none;
  }
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  .dob {
    width: 30%;
    padding: 14px;
    text-align: center;
    background-color: #fcfcfc;
    transition: 0.3s;
    outline: none;
    border: 1px solid #c0bfbf;
    border-radius: 3px;
  }
  .radio {
    display: none;
  }
  .input-box label {
    width: 50%;
    padding: 13px;
    font-size: 11px;
    background-color: #fcfcfc;
    display: inline-block;

    text-align: center;
    border: 1px solid #c0bfbf;
    font-family: "Playfair Display", serif;
  }
  .input-box label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  .input-box label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .radio:checked + label {
    background-color: pink;
    color: #fff;
    transition: 0.5s;
  }
  .input-box select {
    display: inline-block;
    width: 50%;
    padding: 12px;
    background-color: #fcfcfc;

    text-align: center;
    font-size: 16px;
    outline: none;
    border: 1px solid #c0bfbf;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .input-box select:focus {
    background-color: pink;
    color: #fff;
    text-align: center;
  }
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 162px;
    background-image: linear-gradient(pink, orange 70px);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 23px;
  }
  button:hover {
    cursor: pointer;
    background: #5eb105;
  }
}
</style>
