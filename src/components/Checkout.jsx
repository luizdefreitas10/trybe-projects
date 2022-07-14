import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend> Informações do Comprador </legend>
          <label htmlFor="checkout-fullname">
            Nome Completo:
            <input
              type="text"
              name="checkout-fullname"
              id="checkout-fullname"
              data-testid="checkout-fullname"
            />
          </label>

          <label htmlFor="checkout-email">
            Email:
            <input
              type="email"
              name="checkout-email"
              id="checkout-email"
              data-testid="checkout-email"
            />
          </label>

          <label htmlFor="checkout-cpf">
            CPF:
            <input
              type="text"
              name="checkout-cpf"
              id="checkout-cpf"
              data-testid="checkout-cpf"
            />
          </label>

          <label htmlFor="checkout-phone">
            Telefone:
            <input
              type="text"
              name="checkout-phone"
              id="checkout-phone"
              data-testid="checkout-phone"
            />
          </label>

          <label htmlFor="checkout-cep">
            CEP:
            <input
              type="text"
              name="checkout-cep"
              id="checkout-cep"
              data-testid="checkout-cep"
            />
          </label>

          <label htmlFor="checkout-address">
            Endereço:
            <input
              type="text"
              name="checkout-address"
              id="checkout-address"
              data-testid="checkout-address"
            />
          </label>
        </fieldset>
        {/* Nome Completo: este elemento deve possuir o atributo data-testid="checkout-fullname";
Email: este elemento deve possuir o atributo data-testid="checkout-email";
CPF: este elemento deve possuir o atributo data-testid="checkout-cpf";
Telefone: este elemento deve possuir o atributo data-testid="checkout-phone";
CEP: este elemento deve possuir o atributo data-testid="checkout-cep";
Endereço: este elemento deve possuir o atributo data-testid="checkout-address". */}
      </form>
    );
  }
}
