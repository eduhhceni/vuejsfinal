<template>
  <tr>
    <td class="product-thumbnail">
      <a @click="goTodetail(id)">
        <img :src="image1" alt="Image" class="img-fluid">
      </a>
    </td>
    <td class="product-name">
      <a @click="goTodetail(id)">
        <h2 class="h5 text-black">{{ title }}</h2>
      </a>
    </td>
    <td>R$ {{ price }}</td>
    <td>
      <div class="input-group mb-3" style="max-width: 120px;">
        <div class="input-group-prepend">
          <button
            class="btn btn-outline-primary js-btn-minus"
            type="button"
            @click="quantity > 1 ? minus() : null"
          >&minus;</button>
        </div>
        <input
          id="quantidade"
          type="text"
          class="form-control text-center"
          :value="quantity"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        >
        <div class="input-group-append">
          <button
            class="btn btn-outline-primary js-btn-plus"
            type="button"
            @click="quantity < 9 ? plus() : null"
          >&plus;</button>
        </div>
      </div>
    </td>
    <td>R$ {{ total.toFixed(2) }}</td>
    <td>
      <button class="btn btn-primary btn-sm" title="Deletar" @click="$emit('deletar', id)">
        <i class="fa fa-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ListaCarrinho",
  props: ["id", "title", "price", "info", "image1", "quantity"],
  data: function() {
    return {
      listaCarrinho: this.carrinho,
      total: parseFloat(this.price) * parseFloat(this.quantity)
    };
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "detalhes", params: { Pid: proId } });
    },
    // TODO plus e minus faltam alterar no banco e limitar > 0 e < itens disponíveis
    plus() {
      this.quantity = this.quantity + 1;
      this.total = parseFloat(this.price) * parseFloat(this.quantity);
    },
    minus() {
      this.quantity = this.quantity - 1;
      this.total = parseFloat(this.price) * parseFloat(this.quantity);
    }
  }
};
</script>