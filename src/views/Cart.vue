<template>
  <!-- Arquivo que invoca a página carrinho -->
  <div class="cart">
    <Cart msg="Welcome to Your Cart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/pages/cart.vue";

export default {
  name: "cart",
  components: {
    Cart
  }
};
</script>