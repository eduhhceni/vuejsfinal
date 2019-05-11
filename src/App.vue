<template>
  <!-- arquivo que junta todas as peças do site (cabeçalho, conteudo e rodapé) -->
  <div id="app">
    <div class="site-wrap" style="background-color: rgb(249, 251, 254);">
      <nav-bar/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>


<style>
</style>
