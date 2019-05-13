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
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a class="dropdown-item" href="#">Mouses</a>
                    <a class="dropdown-item" href="#">Teclados</a>
                    <a class="dropdown-item" href="#">Headsets</a>
                    <a class="dropdown-item" href="#">Mouse Pads</a>
                    <a class="dropdown-item" href="#">Mouse Bungees</a>
                  </div>
                </div>
                <!-- ordenar produtos (apenas frontend) -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    id="dropdownMenuReference"
                    data-toggle="dropdown"
                  >Ordem</button>
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
            <div
              class="col-sm-6 col-lg-4 mb-4"
              data-aos="fade-up"
              v-for="(data,index) in products"
              :key="index"
            >
              <div class="block-4 text-center border produto">
                <figure class="block-4-image">
                  <transition name="fade" mode="out-in" appear>
                    <a @click="goTodetail(data.productId)">
                      <img :src="data.image" alt="Image placeholder" class="img-fluid shop-image">
                    </a>
                  </transition>
                </figure>
                <div class="block-4-text p-4">
                  <a @click="goTodetail(data.productId)">
                    <h3>{{data.productTitle}}</h3>
                  </a>
                  <p class="mb-0">{{data.productInfo}}</p>
                  <p class="text-primary font-weight-bold">R$ {{ data.productPrice }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- /produtos -->

          <!-- número de páginas -->
          <div class="row" data-aos="fade-up">
            <div class="col-md-12 text-center">
              <div class="site-block-27">
                <ul>
                  <li>
                    <router-link to="#">&lt;</router-link>
                  </li>
                  <li class="active">
                    <span>1</span>
                  </li>
                  <li>
                    <router-link to="#">2</router-link>
                  </li>
                  <li>
                    <router-link to="#">3</router-link>
                  </li>
                  <li>
                    <router-link to="#">4</router-link>
                  </li>
                  <li>
                    <router-link to="#">5</router-link>
                  </li>
                  <li>
                    <router-link to="#">&gt;</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- categorias de produtos -->
        <div class="col-md-3 order-1 mb-5 mb-md-0">
          <div class="border p-4 rounded mb-4" style="background-color: white">
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
            <!-- filtro por tamanho -->
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Tamanho</h3>
              <label for="s_sm" class="d-flex">
                <input type="checkbox" id="s_sm" class="mr-2 mt-1">
                <span class="text-black">Pequeno</span>
              </label>
              <label for="s_md" class="d-flex">
                <input type="checkbox" id="s_md" class="mr-2 mt-1">
                <span class="text-black">Medio</span>
              </label>
              <label for="s_lg" class="d-flex">
                <input type="checkbox" id="s_lg" class="mr-2 mt-1">
                <span class="text-black">Grande</span>
              </label>
            </div>

            <!-- filtro por cor -->
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Color</h3>
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
export default {
  data() {
    return {
      title: "Home",
      products: [
        {
          productTitle: "Thermaltake Nemesis",
          productInfo: "Mouse Gamer Thermaltake Nemesis Switch RGB 120000DPI",
          productPrice: "291,90",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/m/o/mo-nms-wdoobk-014.jpg",
          productId: 1
        },
        {
          productTitle: "Thermaltake X1",
          productInfo:
            "Teclado Mecânico Thermaltake X1 RGB Switch Cherry MX Blue",
          productPrice: "776,92",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/k/b/kb-tpx-blbrpb-015.jpg",
          productId: 2
        },
        {
          productTitle: "Corsair K63",
          productInfo: "Teclado Corsair K63 Compacto LED Azul Cherry MX Red",
          productPrice: "571,91",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/c/h/ch-9145030-br6.jpg",
          productId: 3
        },
        {
          productTitle: "Corsair K70",
          productInfo:
            "Teclado Mecânico Corsair K70 MK.2 RapidFire RGB Switch MX Cherry Black",
          productPrice: "834,64",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/c/a/ca-9011153-na1_1.jpg",
          productId: 4
        },
        {
          productTitle: "Steelseries Qck Edge XL",
          productInfo: "Mousepad Steelseries Qck Edge XL 900X300X2MM",
          productPrice: "158,30",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/6/3/63824.jpg",
          productId: 5
        },
        {
          productTitle: "Steelseries Rival 710",
          productInfo: "Mouse Steelseries Rival 710",
          productPrice: "539,92",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/6/2/62334.jpg",
          productId: 6
        },
        {
          productTitle: "C3Tech MB-200SI",
          productInfo: "Mouse Bungee C3Tech com Hub USB/MicroSD MB-200SI",
          productPrice: "77,99",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/m/b/mb-200si.jpg",
          productId: 7
        },
        {
          productTitle: "Havit HV-MS837",
          productInfo: "Mouse Gamer Havit RGB 7000DPI HV-MS837",
          productPrice: "100,10",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/h/v/hv-ms8374.jpg",
          productId: 8
        },
        {
          productTitle: "Logitech G332",
          productInfo: "Headset Gamer Logitech G332 Stereo Preto/Vermelho",
          productPrice: "294,90",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/8/981-0007556.jpg",
          productId: 9
        },
        {
          productTitle: "Asus Rog Claymore",
          productInfo:
            "Teclado Mecânico Asus Rog Claymore RGB Switch Cherry MX Red",
          productPrice: "1.629,94",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/0/90mp00e0-b0ua0033.jpg",
          productId: 10
        },
        {
          productTitle: "Logitech G Pro",
          productInfo: "Mouse Gamer Logitech G Pro Hero RGB 16000DPI USB",
          productPrice: "239,90",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/1/910-005536.jpg",
          productId: 11
        },
        {
          productTitle: "PCYES! FPS KNIFE",
          productInfo: "Mousepad PCYES! FPS KNIFE 500X400X3MM",
          productPrice: "39,90",
          image:
            "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/f/k/fk50x401.jpg",
          productId: 12
        }
      ]
    };
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "detalhes", params: { Pid: proId } });
    }
  }
};
</script>
