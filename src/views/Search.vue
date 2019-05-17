<template>
  <!-- Arquivo que invoca a pesquisa -->
  <div class="search">
    <Search msg="Welcome to Your Vue.js Search page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "../pages/search.vue";

export default {
  name: "search",
  components: {
    Search
  }
};
</script>