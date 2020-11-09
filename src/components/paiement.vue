<template>
  <div class="wrap">
    <myprogress />
    <div class="wrapper">
      <h2>Paiement</h2>
      <!--Formulaire de paiement -->
      <form>
        <!--Nom du titulaire -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="text"
              placeholder="Titulaire de la carte"
              required
              class="name"
            />
            <i class="fa fa-user icon"></i>
          </div>
        </div>
        <!--Nom du titulaire -->
        <!-- Email -->
        <div class="input-group">
          <div class="input-box">
            <input
              type="email"
              placeholder="Adresse email"
              required
              class="name"
            />
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>
        <!-- Email -->
        <div class="input-group">
          <div class="input-box">
            <h4>Date de naissance</h4>
            <input type="text" placeholder="DD" class="dob" />
            <input type="text" placeholder="MM" class="dob" />
            <input type="text" placeholder="YYYY" class="dob" />
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <h4>Detailes du paiement</h4>
            <input type="radio" name="pay" id="bc1" checked class="radio" />
            <label for="bc1"
              ><span
                ><i class="fa fa-cc-visa"></i> Carte de Credit
              </span></label
            >
            <input type="radio" name="pay" id="bc2" class="radio" />
            <label for="bc2"
              ><span><i class="fa fa-cc-paypal"></i> Paypal</span></label
            >
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input
              type="tel"
              placeholder="Numéro de la carte"
              required
              class="name"
            />
            <i class="fa fa-credit-card icon"></i>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input type="tel" placeholder="Card CVC" required class="name" />
            <i class="fa fa-user icon"></i>
          </div>
          <div class="input-box">
            <h4>Date d'expiration</h4>
            <select>
              <option>janvier</option>
              <option>fevrier</option>
              <option>mars</option>
              <option>avril</option>
              <option>mai</option>
              <option>juin</option>
              <option>juillet</option>
              <option>août</option>
              <option>septembre</option>
              <option>octobre</option>
              <option>novembre</option>
              <option>décembre</option>
            </select>
            <select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <button type="submit">Valider</button>
          </div>
        </div>
      </form>
      <!--Fin du Formulaire de paiement -->
    </div>
  </div>
</template>

<script>
import myprogress from "@/components/myprogress.vue";
export default {
  components: { myprogress },
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
  /* le titre du formation */
  h4 {
    padding-bottom: 5px;
    color: black;
    font-family: "Playfair Display", serif;
  }
  /* positionnement du input */
  .input-group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  /* la taille des input */
  .input-box {
    width: 100%;
    margin-right: 12px;
    position: relative;
  }
  .input-box:last-child {
    margin-right: 0;
  }
  /* interieur du formulaire */
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
  /* les contours des inputs et les mois, année et jour */
  .name:focus,
  .dob:focus {
    box-shadow: 0 0 2px 1px #ffcc99;
    border: 1px solid #ffcc99;
  }
  /* les icones */
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
  /* les animation des icones */
  .name:focus + .icon {
    background-color: pink;
    color: #fff;
    border-right: 1px solid pink;
    border: none;
    transition: 1s;
  }
  /* Les mois: couleur et positionnemnt */
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
  /* label  */
  .input-box label {
    width: 50%;
    padding: 13px;
    background-color: #fcfcfc;
    display: inline-block;
    text-align: center;
    border: 1px solid #c0bfbf;
    font-family: "Playfair Display", serif;
  }
  /* la contoures tes label  */
  .input-box label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  /* la contoures tes label  */
  .input-box label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .radio:checked + label {
    background-color: pink;
    color: #fff;
    transition: 0.5s;
  }
  /* select */
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
  /* animation des select */
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
    background-image: linear-gradient(
      to right,
      #dd5e89 0%,
      #f7bb97 51%,
      #dd5e89 100%
    );
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* animation du bouton */
  button:hover {
    cursor: pointer;
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
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
  button {
    border: none;
    outline: none;
    height: 52px;
    width: 287px;
    background-image: linear-gradient(
      to right,
      #dd5e89 0%,
      #f7bb97 51%,
      #dd5e89 100%
    );
    color: white;
    font-weight: bold;
    border-radius: 7px;
    font-family: "Playfair Display", serif;
    font-size: 29px;
  }
  /* animation du bouton */
  button:hover {
    cursor: pointer;
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
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
