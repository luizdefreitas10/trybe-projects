import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Favorite Pokemons', () => {
  it('se é exibido na tela o texto No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavText = screen.getByText(/no favorite pokemon found/i);
    expect(noFavText).toBeInTheDocument();
  });
});
