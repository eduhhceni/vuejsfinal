<template>
  <div class="site-section shop-single">
    <div class="container" v-for="(product,index) in products" :key="index">
      <div class="row" v-if="proId == product.productId">
        <div class="col-md-6">
          <carousel :per-page="1">
            <slide v-for="image in product.images" :key="image">
              <div class="block-6 text-center">
                <figure class="block-6-image">
                  <img :src="image" alt="Image placeholder" style="width: 538px;">
                </figure>
              </div>
            </slide>
          </carousel>
        </div>
        <div>
          <div class="col-md-6 tamanho">
            <h2 class="text-black">{{product.productTitle}}</h2>
            <p>{{product.productInfo}}</p>
            <strong class="text-primary h4">R$ {{product.productPrice}}</strong>
            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px;">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                </div>
                <input
                  type="text"
                  class="form-control text-center"
                  value="1"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                >
                <div class="input-group-append">
                  <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                </div>
              </div>
            </div>
            <p>
              <router-link to="/cart" class="buy-now btn btn-sm btn-primary">Adicionar ao carrinho</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
      products: [
        {
          productTitle: "Thermaltake Nemesis",
          productInfo: "Mouse Gamer Thermaltake Nemesis Switch RGB 120000DPI",
          productPrice: "291,90",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/m/o/mo-nms-wdoobk-014.jpg",
            image2:
              "https://www.terabyteshop.com.br/img/produtos/m/mouse-thermaltake-tt-esports-nemesis-optical-rgb-mo-nms-wdoobk-01_67103.jpg",
            image3:
              "https://www.terabyteshop.com.br/img/produtos/m/mouse-thermaltake-tt-esports-nemesis-optical-rgb-mo-nms-wdoobk-01_67105.jpg"
          },
          productId: 1
        },
        {
          productTitle: "Thermaltake X1",
          productInfo:
            "Teclado Mecânico Thermaltake X1 RGB Switch Cherry MX Blue",
          productPrice: "776,92",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/k/b/kb-tpx-blbrpb-015.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/k/b/kb-tpx-blbrpb-012.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/k/b/kb-tpx-blbrpb-011.jpg"
          },
          productId: 2
        },
        {
          productTitle: "Corsair K63",
          productInfo: "Teclado Corsair K63 Compacto LED Azul Cherry MX Red",
          productPrice: "571,91",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/c/h/ch-9145030-br6.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/c/h/ch-9145030-na3.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/c/h/ch-9145030-na4.jpg"
          },
          productId: 3
        },
        {
          productTitle: "Corsair K70",
          productInfo:
            "Teclado Mecânico Corsair K70 MK.2 RapidFire RGB Switch MX Cherry Black",
          productPrice: "834,64",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/c/a/ca-9011153-na1_1.jpg",
            image2:
              "https://www.corsair.com/medias/sys_master/images/images/h3e/h4b/9171333316638/-CH-9109014-BR-Gallery-K70-RGB-MK2-BR-04.png",
            image3:
              "https://www.corsair.com/medias/sys_master/images/images/h58/he8/9171424935966/-CH-9109014-BR-Gallery-K70-RGB-MK2-BR-01.png"
          },
          productId: 4
        },
        {
          productTitle: "Steelseries Qck Edge XL",
          productInfo: "Mousepad Steelseries Qck Edge XL 900X300X2MM",
          productPrice: "158,30",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/6/3/63824.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/6/3/638242.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/6/3/638241.jpg"
          },
          productId: 5
        },
        {
          productTitle: "Steelseries Rival 710",
          productInfo: "Mouse Steelseries Rival 710",
          productPrice: "539,92",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/6/2/62334.jpg",
            image2:
              "https://images0.kabum.com.br/produtos/fotos/99090/mouse-gamer-steelseries-rival-710-rgb-12000dpi-preto-62334__1541764688_gg.jpg",
            image3:
              "https://images0.kabum.com.br/produtos/fotos/99090/mouse-gamer-steelseries-rival-710-rgb-12000dpi-preto-62334_1541764678_gg.jpg"
          },
          productId: 6
        },
        {
          productTitle: "C3Tech MB-200SI",
          productInfo: "Mouse Bungee C3Tech com Hub USB/MicroSD MB-200SI",
          productPrice: "77,99",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/m/b/mb-200si.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/m/b/mb-200si1.jpg",
            image3:
              "http://www.c3technology.com.br/fotos/460x460/413020190100_02_MOUSE%20BUNGEE%20C-HUB%20LEITOR%20MICROSD%20MB-200SI%20C3.jpg"
          },
          productId: 7
        },
        {
          productTitle: "Havit HV-MS837",
          productInfo: "Mouse Gamer Havit RGB 7000DPI HV-MS837",
          productPrice: "100,10",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/h/v/hv-ms8374.jpg",
            image2:
              "https://images8.kabum.com.br/produtos/fotos/100728/mouse-gamer-havit-rgb-7-botoes-7000dpi-hv-ms837_mouse-gamer-havit-rgb-7-botoes-7000dpi-hv-ms837_1552319104_gg.jpg",
            image3:
              "https://images8.kabum.com.br/produtos/fotos/100728/mouse-gamer-havit-rgb-7-botoes-7000dpi-hv-ms837_mouse-gamer-havit-rgb-7-botoes-7000dpi-hv-ms837_1552319106_gg.jpg"
          },
          productId: 8
        },
        {
          productTitle: "Logitech G332",
          productInfo: "Headset Gamer Logitech G332 Stereo Preto/Vermelho",
          productPrice: "294,90",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/8/981-0007556.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/8/981-0007555.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/8/981-0007551.jpg"
          },
          productId: 9
        },
        {
          productTitle: "Asus Rog Claymore",
          productInfo:
            "Teclado Mecânico Asus Rog Claymore RGB Switch Cherry MX Red",
          productPrice: "1.629,94",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/0/90mp00e0-b0ua0033.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/0/90mp00i0-b0ua005.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/0/90mp00i0-b0ua004.jpg"
          },
          productId: 10
        },
        {
          productTitle: "Logitech G Pro",
          productInfo: "Mouse Gamer Logitech G Pro Hero RGB 16000DPI USB",
          productPrice: "239,90",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/9/1/910-005536.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/1/910-0055361.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/9/1/910-0055363.jpg"
          },
          productId: 11
        },
        {
          productTitle: "PCYES! FPS KNIFE",
          productInfo: "Mousepad PCYES! FPS KNIFE 500X400X3MM",
          productPrice: "39,90",
          images: {
            image1:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/89197d5dca145b4b8bae0bd39c25e653/f/k/fk50x401.jpg",
            image2:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/f/k/fk50x402.jpg",
            image3:
              "https://9d5b198e653b6aea.cdn.gocache.net/catalog/product/cache/a931fab3436c8de63f3cc480a85799ce/f/k/fk50x40.jpg"
          },
          productId: 12
        }
      ]
    };
  }
};
</script>
