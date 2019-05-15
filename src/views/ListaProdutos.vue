<template>
  <div class="listaprodutos">
    <ListaProdutos msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaProdutos from "../pages/listaprodutos.vue";

export default {
  name: "listaprodutos",
  components: {
    ListaProdutos
  }
};
</script>
