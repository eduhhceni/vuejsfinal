<template>
  <!-- Arquivo que invoca a página de um produto -->
  <div class="details">
    <Details msg="Welcome to Your Vue.js Details page"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Details from "@/components/pages/details.vue";

export default {
  name: "details",
  components: {
    Details
  }
};
</script>