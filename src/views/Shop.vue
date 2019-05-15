<template>
  <!-- Arquivo que invoca a loja -->
  <div class="shop">
    <Shop msg="Welcome to Your Vue.js Shop page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Shop from "../pages/shop.vue";

export default {
  name: "shop",
  components: {
    Shop
  }
};
</script>