<template>
  <!-- Arquivo que invoca a página de checkout -->
  <div class="checkout">
    <Checkout msg="Welcome to Your Checkout"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Checkout from "../pages/checkout.vue";

export default {
  name: "checkout",
  components: {
    Checkout
  }
};
</script>