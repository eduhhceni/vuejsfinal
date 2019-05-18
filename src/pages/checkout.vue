<template>
  <!-- página de checkout -->
  <div class="site-section">
    <div class="container">
      <!-- TODO login -->
      <!-- <div class="row mb-5">
        <div class="col-md-12">
          <div class="border p-4 rounded" role="alert">
            Possui Conta?
            <router-link to="#">Login</router-link>
          </div>
        </div>
      </div>-->
      <div class="row">
        <!-- TODO detalhes cadastro-->
        <!-- <div class="col-md-6 mb-5 mb-md-0">
          <h2 class="h3 mb-3 text-black">Detalhes da compra</h2>
          <div class="p-3 p-lg-5 border">
            <div class="form-group">
              <label for="c_country" class="text-black">
                País
                <span class="text-danger">*</span>
              </label>
              <select id="c_country" class="form-control">
                <option value="1">Selecione seu País</option>
                <option value="2">Bangladesh</option>
                <option value="3">Algeria</option>
                <option value="4">Afeganistão</option>
                <option value="5">Ghana</option>
                <option value="6">Albania</option>
                <option value="7">Brasil</option>
                <option value="8">Colombia</option>
                <option value="9">República Dominicana</option>
              </select>
            </div>
            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_fname" class="text-black">
                  Primeiro Nome
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="c_fname" name="c_fname">
              </div>
              <div class="col-md-6">
                <label for="c_lname" class="text-black">
                  Sobrenome
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="c_lname" name="c_lname">
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_companyname" class="text-black">Empresa</label>
                <input type="text" class="form-control" id="c_companyname" name="c_companyname">
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black">
                  Endereço
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="c_address"
                  name="c_address"
                  placeholder="Endereço"
                >
              </div>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Complementos (opcional)">
            </div>

            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_state_country" class="text-black">
                  Estado
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="c_state_country" name="c_state_country">
              </div>
              <div class="col-md-6">
                <label for="c_postal_zip" class="text-black">
                  CEP
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="c_postal_zip" name="c_postal_zip">
              </div>
            </div>

            <div class="form-group row mb-5">
              <div class="col-md-6">
                <label for="c_email_address" class="text-black">
                  E-mail
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="c_email_address" name="c_email_address">
              </div>
              <div class="col-md-6">
                <label for="c_phone" class="text-black">
                  Telefone
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="c_phone"
                  name="c_phone"
                  placeholder="Telefone"
                >
              </div>
            </div>

            <div class="form-group">
              <label
                for="c_create_account"
                class="text-black"
                data-toggle="collapse"
                href="#create_an_account"
                role="button"
                aria-expanded="false"
                aria-controls="create_an_account"
              >
                <input type="checkbox" value="1" id="c_create_account"> Criar conta?
              </label>
              <div class="collapse" id="create_an_account">
                <div class="py-2">
                  <p class="mb-3">
                    Cria uma conta abaixo. Caso ja possua uma, faça
                    <router-link to="/#">login</router-link>.
                  </p>
                  <div class="form-group">
                    <label for="c_account_password" class="text-black">Senha</label>
                    <input
                      type="email"
                      class="form-control"
                      id="c_account_password"
                      name="c_account_password"
                      placeholder
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label
                for="c_ship_different_address"
                class="text-black"
                data-toggle="collapse"
                href="#ship_different_address"
                role="button"
                aria-expanded="false"
                aria-controls="ship_different_address"
              >
                <input type="checkbox" value="1" id="c_ship_different_address"> Enviar para outro endereço?
              </label>
              <div class="collapse" id="ship_different_address">
                <div class="py-2">
                  <div class="form-group">
                    <label for="c_diff_country" class="text-black">
                      País
                      <span class="text-danger">*</span>
                    </label>
                    <select id="c_diff_country" class="form-control">
                      <option value="1">Selecione seu País</option>
                      <option value="2">Bangladesh</option>
                      <option value="3">Algeria</option>
                      <option value="4">Afeganistão</option>
                      <option value="5">Ghana</option>
                      <option value="6">Albania</option>
                      <option value="7">Brasil</option>
                      <option value="8">Colombia</option>
                      <option value="9">República Dominicana</option>
                    </select>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_diff_fname" class="text-black">
                        Primeiro Nome
                        <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control" id="c_diff_fname" name="c_diff_fname">
                    </div>
                    <div class="col-md-6">
                      <label for="c_diff_lname" class="text-black">
                        Sobrenome
                        <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control" id="c_diff_lname" name="c_diff_lname">
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_diff_companyname" class="text-black">Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_companyname"
                        name="c_diff_companyname"
                      >
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_diff_address" class="text-black">
                        Endereço
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_address"
                        name="c_diff_address"
                        placeholder="Endereço"
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Complementos (opcional)">
                  </div>

                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_diff_state_country" class="text-black">
                        Estado
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_state_country"
                        name="c_diff_state_country"
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="c_diff_postal_zip" class="text-black">
                        CEP
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_postal_zip"
                        name="c_diff_postal_zip"
                      >
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <div class="col-md-6">
                      <label for="c_diff_email_address" class="text-black">
                        E-mail
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_email_address"
                        name="c_diff_email_address"
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="c_diff_phone" class="text-black">
                        Telefone
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_diff_phone"
                        name="c_diff_phone"
                        placeholder="Telefone"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="c_order_notes" class="text-black">Anotações</label>
              <textarea
                name="c_order_notes"
                id="c_order_notes"
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Escreva suas anotações..."
              ></textarea>
            </div>
          </div>
        </div>-->
        <div class="col-md-12">
          <!-- TODO cupom -->
          <!-- <div class="row mb-5">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Cupom</h2>
              <div class="p-3 p-lg-5 border">
                <label for="c_code" class="text-black mb-3">Digite seu cupom</label>
                <div class="input-group w-75">
                  <input
                    type="text"
                    class="form-control"
                    id="c_code"
                    placeholder="Cupom"
                    aria-label="Cupom"
                    aria-describedby="button-addon2"
                  >
                  <div class="input-group-append">
                    <button class="btn btn-primary btn-sm" type="button" id="button-addon2">Salvar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>-->

          <div class="row mb-5">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Seu Pedido</h2>
              <div class="p-3 p-lg-5 border">
                <table class="table site-block-order-table mb-5">
                  <thead>
                    <th>Produto</th>
                    <th>Total</th>
                  </thead>
                  <tbody v-for="(produto,index) in carrinho" :key="index">
                    <tr>
                      <td>
                        {{ produto.title }}
                        <strong class="mx-2">x</strong>
                        {{ produto.quantity }}
                      </td>
                      <td>R$ {{ produto.price }}</td>
                    </tr>
                  </tbody>
                </table>

                <!-- <div class="border p-3 mb-3">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-toggle="collapse"
                      href="#collapsebank"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsebank"
                    >Transferência direta</a>
                  </h3>

                  <div class="collapse" id="collapsebank">
                    <div class="py-2">
                      <p class="mb-0">Realize seu pagamento direto utilizando seu ID de compra.</p>
                    </div>
                  </div>
                </div>-->

                <!-- <div class="border p-3 mb-3">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-toggle="collapse"
                      href="#collapsecheque"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsecheque"
                    >Cartão de crédito</a>
                  </h3>

                  <div class="collapse" id="collapsecheque">
                    <div class="py-2">
                      <p class="mb-0">Preencha suas informações do cartão.</p>
                    </div>
                  </div>
                </div>-->
                <!-- 
                <div class="border p-3 mb-5">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-toggle="collapse"
                      href="#collapsepaypal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsepaypal"
                    >Paypal</a>
                  </h3>

                  <div class="collapse" id="collapsepaypal">
                    <div class="py-2">
                      <p class="mb-0">Prossiga para o site do paypal.</p>
                    </div>
                  </div>
                </div>-->

                <div class="form-group">
                  <button
                    class="btn btn-primary btn-lg py-3 btn-block"
                    onclick="window.location='thankyou'"
                  >Finalizar Pedido</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data: function() {
    return {
      carrinho: []
    };
  },
  async created() {
    const { data } = await api.get(`/carrinho`);
    this.carrinho = data;
  }
};
</script>
