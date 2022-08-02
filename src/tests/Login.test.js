import React from "react";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import { screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { editExpenseAction } from "../redux/actions";
// import { renderIntoDocument } from "react-dom/test-utils";

describe('Teste as funcionalidades do componente Login', () => {
  it('se os inputs funcionam da maneira correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;

    expect(pathname).toBe('/');

    const emailInput = screen.getByRo
  })
});
