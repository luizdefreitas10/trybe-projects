import React from "react";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import { screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";

describe('Teste as funcionalidades do componente Login', () => {
  it('se os inputs funcionam da maneira correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const emailInput = screen.getByTestId(/email-input/i);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId(/password-input/i);
    expect(passwordInput).toBeInTheDocument();
  });
  it('se o botão de entrar habilita e desabilita corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const buttonInput = screen.getByRole('button');
    expect(buttonInput).toBeInTheDocument();
    expect(buttonInput).toBeDisabled();
    const emailInput = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    userEvent.type(emailInput, 'alguem@email.com');
    userEvent.type(passwordInput, '1234567');
    expect(buttonInput).not.toBeDisabled();
  });
  it('se o botão de entrar redireciona o usuário para a rota carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonInput = screen.getByRole('button', { name: /entrar/i, });
    const emailInput = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    userEvent.type(emailInput, 'alguem@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonInput);
    expect(history.location.pathname).toBe('/carteira');
  });
});
