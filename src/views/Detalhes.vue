<template>
  <!-- Arquivo que invoca a página de um produto -->
  <div class="detalhes">
    <Detalhes msg="Welcome to Your Vue.js Details page"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Detalhes from "@/components/pages/detalhes.vue";

export default {
  name: "detalhes",
  components: {
    Detalhes
  }
};
</script>