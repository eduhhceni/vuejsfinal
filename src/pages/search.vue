<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9 order-2">
          <!-- produtos -->
          <div class="row mb-5">
            <ListaProdutos
              v-for="listaProdutos in produtos"
              :key="listaProdutos.id"
              :title="listaProdutos.title"
              :info="listaProdutos.info"
              :image1="listaProdutos.image1"
              :price="listaProdutos.price"
              :produtos="listaProdutos.produtos"
              :id="listaProdutos.id"
            />
          </div>
          <!-- /produtos -->
        </div>
        <div class="col-md-2 order-1 mb-4 mb-md-0">
          <h3>{{ search }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import ListaProdutos from "./products.vue";

import api from "@/api";

export default {
  name: "listaprodutos",
  components: {
    ListaProdutos
  },
  data: function() {
    return {
      search: this.$route.params.search,
      produtos: []
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    console.log(this.$route.params.search);
    this.produtos = data.filter(function(u) {
      if (
        !u.title
          .toLowerCase()
          .trim()
          .indexOf("corsair".toLowerCase().trim())
        // TODO falta substituir "corsair" pelo parametro da rota
      ) {
        return u;
      }
    });
  }
};
</script>
