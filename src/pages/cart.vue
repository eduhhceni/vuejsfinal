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
                  <th class="product-quantity">Quantidade</th>
                  <th class="product-total">Total</th>
                  <th class="product-remove">Remover</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="product-thumbnail">
                    <img
                      src="https://images1.kabum.com.br/produtos/fotos/84441/84441_index_g.jpg"
                      alt="Image"
                      class="img-fluid"
                    >
                  </td>
                  <td class="product-name">
                    <h2 class="h5 text-black">Mouse Razer DeathAdder Elite</h2>
                  </td>
                  <td>R$ 349,90</td>
                  <td>
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
                  </td>
                  <td>R$ 349,90</td>
                  <td>
                    <router-link to="#" class="btn btn-primary btn-sm">X</router-link>
                  </td>
                </tr>

                <tr>
                  <td class="product-thumbnail">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/61%2B7sSXmZkL._SX466_.jpg"
                      alt="Image"
                      class="img-fluid"
                    >
                  </td>
                  <td class="product-name">
                    <h2 class="h5 text-black">MousePad Corsair MM300 Extendido</h2>
                  </td>
                  <td>R$ 119,90</td>
                  <td>
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
                  </td>
                  <td>R$ 119,90</td>
                  <td>
                    <router-link to="#" class="btn btn-primary btn-sm">X</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="row mb-5">
            <div class="col-md-6 mb-3 mb-md-0">
              <router-link to="/cart">
                <button class="btn btn-primary btn-sm btn-block">Atualizar Carrinho</button>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/shop">
                <button class="btn btn-outline-primary btn-sm btn-block">Continuar Compra</button>
              </router-link>
            </div>
          </div>
          <div class="row">
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
          </div>
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
                  <strong class="text-black">R$ 469,80</strong>
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

