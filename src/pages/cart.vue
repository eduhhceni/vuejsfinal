<template>
  <!-- Carrinho -->
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <form class="col-md-12" method="post">
          <div class="site-blocks-table">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="product-thumbnail">Foto</th>
                  <th class="product-name">Produto</th>
                  <th class="product-price">Preço</th>
                  <th class="product-quantity">
                    Quantidade
                    <br>
                  </th>
                  <th class="product-total">Total</th>
                  <th class="product-remove">
                    Remover
                    <br>
                  </th>
                </tr>
              </thead>
              <tbody>
                <ListaCarrinho
                  v-for="listaCarrinho in carrinho"
                  :key="listaCarrinho.id"
                  :title="listaCarrinho.title"
                  :info="listaCarrinho.info"
                  :image1="listaCarrinho.image1"
                  :price="listaCarrinho.price"
                  :quantity="listaCarrinho.quantity"
                  :carrinho="listaCarrinho.carrinho"
                  :id="listaCarrinho.id"
                />
                <!-- @deletar="deletarItem"
                />-->
              </tbody>
            </table>
          </div>
        </form>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="row mb-5">
            <div class="col-md-6 mb-3 mb-md-0">
              <a href="/cart">
                <button class="btn btn-primary btn-sm btn-block">Atualizar Carrinho</button>
              </a>
            </div>
            <div class="col-md-6">
              <router-link to="/shop/1">
                <button class="btn btn-outline-primary btn-sm btn-block">Continuar Compra</button>
              </router-link>
            </div>
          </div>
          <!-- TODO cupom -->
          <!-- <div class="row">
            <div class="col-md-12">
              <label class="text-black h4" for="coupon">Cupom</label>
              <p>Digite seu cupom.</p>
            </div>
            <div class="col-md-8 mb-3 mb-md-0">
              <input
                type="text"
                class="form-control py-3"
                id="coupon"
                placeholder="Código do cupom"
              >
            </div>
            <div class="col-md-4">
              <button class="btn btn-primary btn-sm">Aplicar Cupom</button>
            </div>
          </div>-->
        </div>
        <div class="col-md-6 pl-5">
          <div class="row justify-content-end">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Totais</h3>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <span class="text-black">Subtotal</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">R$ {{ total }}</strong>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-md-6">
                  <span class="text-black">Frete</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">Grátis</strong>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-6">
                  <span class="text-black">Total</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">R$ 469,80</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-primary btn-lg py-3 btn-block"
                    onclick="window.location='checkout'"
                  >Finalizar Compra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import ListaCarrinho from "./cartitem.vue";

import api from "@/api";

export default {
  name: "listacarrinho",
  components: {
    ListaCarrinho
  },
  data: function() {
    return {
      carrinho: []
    };
  },
  async created() {
    const { data } = await api.get(`/carrinho`);
    this.carrinho = data;
    api
      .get(`/carrinho`)
      .then(
        response => {
          this.carrinho = response.data;
          return "Axios";
        },
        error => {
          console.log("Erro capturado no then: ", error);
          return Promise.reject(error);
        }
      )
      .catch(error => {
        console.log("Erro capturado no catch: ", error);
        if (error.response) {
          this.mensagemErro = `Servidor retornou um erro: ${error.message} ${
            error.response.statusText
          }`;
          console.log("Erro [resposta]: ", error.response);
        } else if (error.request) {
          this.mensagemErro = `Erro ao tentar comunicar com o servidor: ${
            error.message
          }`;
          console.log("Erro [requisição]: ", error.request);
        } else {
          this.mensagemErro = `Erro ao fazer requisição ao servidor: ${
            error.message
          }`;
        }
        return "Carrinho";
      });
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "detalhes", params: { Pid: proId } });
    }

    // TODO remover item do carrinho
    // async deletarItem(item) {
    //   const confirmar = window.confirm(`Deseja remover o item?`);
    //   if (confirmar) {
    //     console.log("chegou em confirmar");
    // api.delete(`/carrinho/${id}`).then(response => {
    //   console.log(`DELETE /carrinho/${id}`, response);
    //   const indice = this.carrinho.findIndex(t => t.id === id);
    //   this.carrinho.splice(indice, 1);
    // });
    //   }
    // }
  }
};
</script>
