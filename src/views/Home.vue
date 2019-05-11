<template>
  <!-- Arquivo que invoca a home -->
  <div class="home">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/index.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>
