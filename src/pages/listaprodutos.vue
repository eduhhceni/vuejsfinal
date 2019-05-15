<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Produtos</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right">
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>
    <ListaProdutos
      v-for="listaProdutos in produtos"
      :key="listaProdutos.id"
      :title="listaProdutos.title"
      :info="listaProdutos.info"
      :price="listaProdutos.price"
      :produtos="listaProdutos.produtos"
    />
  </div>
</template>

<script>
import ListaProdutos from "./products.vue";

import api from "@/api";

export default {
  name: "listaprodutos",
  components: {
    ListaProdutos
  },
  data: function() {
    return {
      produtos: []
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    this.produtos = data;
  }
};
</script>
