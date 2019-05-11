
<template>
  <!-- Arquivo que invoca a página about -->
  <div class="about">
    <About msg="Welcome to Your Vue.js About page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/pages/about.vue";

export default {
  name: "about",
  components: {
    About
  }
};
</script>