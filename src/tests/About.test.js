import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verificando o componente About', () => {
  it('se a página contém as informações sobre a pokédex', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutTitle).toHaveTextContent('About Pokédex');
  });

  it('se a página renderiza 2 parágrafos e a imagem da pokédex', () => {
    renderWithRouter(<About />);

    const firstP = screen.getByText(/this application/i);
    const secondP = screen.getByText(/one can filter/i);
    const pokedexImg = screen.getByRole('img');
    expect(firstP).toBeInTheDocument();
    expect(secondP).toBeInTheDocument();
    expect(pokedexImg).toBeInTheDocument();
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
