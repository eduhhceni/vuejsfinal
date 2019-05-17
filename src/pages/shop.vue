<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9 order-2">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="float-md-left mb-4">
                <h2 class="text-black h5">Loja</h2>
              </div>
              <!-- novidades (apenas frontend) -->
              <div class="d-flex">
                <div class="dropdown mr-1 ml-md-auto">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    id="dropdownMenuOffset"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Novidades</button>
                  <!-- TODO -->
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a class="dropdown-item" href="#">Mouses</a>
                    <a class="dropdown-item" href="#">Teclados</a>
                    <a class="dropdown-item" href="#">Headsets</a>
                    <a class="dropdown-item" href="#">Mouse Pads</a>
                    <a class="dropdown-item" href="#">Mouse Bungees</a>
                  </div>
                </div>
                <h6>- TODO -</h6>
                <!-- ordenar produtos (apenas frontend) -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    id="dropdownMenuReference"
                    data-toggle="dropdown"
                  >Ordem</button>
                  <!-- TODO -->
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <a class="dropdown-item" href="#">Relevância</a>
                    <a class="dropdown-item" href="#">Nome, A - Z</a>
                    <a class="dropdown-item" href="#">Nome, Z - A</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Preço, crescente</a>
                    <a class="dropdown-item" href="#">Preço, decrescente</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          <!-- número de páginas -->
          <div class="row" data-aos="fade-up">
            <div class="col-md-12 text-center">
              <div class="site-block-27">
                <ul>
                  <li :class="[pageId == 1 ? 'active' : 'inactive']">
                    <a href="/shop/1">1</a>
                  </li>
                  <li :class="[pageId == 2 ? 'active' : 'inactive']">
                    <a href="/shop/2">2</a>
                  </li>
                  <li :class="[pageId == 3 ? 'active' : 'inactive']">
                    <a href="/shop/3">3</a>
                  </li>
                  <li :class="[pageId == 4 ? 'active' : 'inactive']">
                    <a href="/shop/4">4</a>
                  </li>
                  <li :class="[pageId == 5 ? 'active' : 'inactive']">
                    <a href="/shop/5">5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- categorias de produtos -->
        <div class="col-md-3 order-1 mb-5 mb-md-0">
          <div class="border p-4 rounded mb-4" style="background-color: white">
            <h6>-TODO-</h6>
            <h3 class="mb-3 h6 text-uppercase text-black d-block">Categorias</h3>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <router-link to="#" class="d-flex">
                  <span>Mouses</span>
                  <span class="text-black ml-auto">(478)</span>
                </router-link>
              </li>
              <li class="mb-1">
                <router-link to="#" class="d-flex">
                  <span>Teclados</span>
                  <span class="text-black ml-auto">(560)</span>
                </router-link>
              </li>
              <li class="mb-1">
                <router-link to="#" class="d-flex">
                  <span>Headsets</span>
                  <span class="text-black ml-auto">(876)</span>
                </router-link>
              </li>
              <li class="mb-1">
                <router-link to="#" class="d-flex">
                  <span>Mouse Pads</span>
                  <span class="text-black ml-auto">(178)</span>
                </router-link>
              </li>
              <li class="mb-1">
                <router-link to="#" class="d-flex">
                  <span>Mouse Bungees</span>
                  <span class="text-black ml-auto">(28)</span>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="border p-4 rounded mb-4" style="background-color: white">
            <!-- filtro por cor -->
            <div class="mb-4">
              <h6>-TODO-</h6>
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Cor</h3>
              <router-link to="#" class="d-flex color-item align-items-center">
                <span class="bg-danger color d-inline-block rounded-circle mr-2"></span>
                <span class="text-black">Vermelho</span>
              </router-link>
              <router-link to="#" class="d-flex color-item align-items-center">
                <span class="bg-success color d-inline-block rounded-circle mr-2"></span>
                <span class="text-black">Verde</span>
              </router-link>
              <router-link to="#" class="d-flex color-item align-items-center">
                <span class="bg-info color d-inline-block rounded-circle mr-2"></span>
                <span class="text-black">Azul</span>
              </router-link>
              <router-link to="#" class="d-flex color-item align-items-center">
                <span class="bg-warning color d-inline-block rounded-circle mr-2"></span>
                <span class="text-black">RGB</span>
              </router-link>
            </div>
          </div>
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
      pageId: this.$route.params.Pid,
      produtos: []
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    this.produtos = data.filter(function(u) {
      if (u.id > 0 && u.id <= 12) {
        return u;
      }
    });
  }
};
</script>
