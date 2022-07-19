import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Verificando o componente Pokemon', () => {
  it('se é renderizado um card com as informações do pokemon', () => {
    renderWithRouter(<App />);

    const pokeName = screen.getByTestId('pokemon-name');
    expect(pokeName).toBeInTheDocument();
    expect(pokeName).toHaveTextContent('Pikachu');

    const pokeType = screen.getByTestId('pokemon-type');
    expect(pokeType).toBeInTheDocument();
    expect(pokeType).toHaveTextContent('Electric');

    const pokeWeight = screen.getByTestId('pokemon-weight');
    expect(pokeWeight).toBeInTheDocument();
    expect(pokeWeight).toHaveTextContent('Average weight: 6.0 kg');

    const pokeImg = screen.getByAltText('Pikachu sprite');
    expect(pokeImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeImg).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('se o card contém link nav para detalhes do pokemon', () => {
    renderWithRouter(<App />);

    const navLink = screen.getByRole('link', { name: /more details/i });
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute('href', '/pokemons/25');
  });

  it('se ao clicar no link nav, redireciona para página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const detailsButton = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);

    const detailsButton = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsButton);

    const favorite = screen.getByLabelText(/pokémon favoritado?/i);
    expect(favorite).toBeInTheDocument();

    userEvent.click(favorite);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
    expect(star).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
