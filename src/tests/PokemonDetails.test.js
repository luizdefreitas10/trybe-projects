import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verificando componente PokemonDetails', () => {
  it('se as informações detalhadas do pokemon são exibidas na tela', () => {
    renderWithRouter(<App />);

    const detailsButton = screen.getByRole('link', { name: /more details/i });

    userEvent.click(detailsButton);

    const pokeHeading = screen.getByRole('heading', {
      name: /pikachu details/i,
      level: 2,
    });

    const summary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });

    const sectionText = screen.getByText(/this intelligent pokémon/i);

    expect(pokeHeading).toHaveTextContent('Pikachu Details');
    expect(detailsButton).not.toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('Summary');
    expect(sectionText).toBeInTheDocument();
  });

  it('se existe uma seção com mapas contendo localizações do pokémon', () => {
    renderWithRouter(<App />);

    const detailsButton = screen.getByRole('link', { name: /more details/i });

    userEvent.click(detailsButton);

    const gameLocations = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
      level: 2,
    });

    expect(gameLocations).toBeInTheDocument();

    const pikachuLocationString = 'Pikachu location';

    const locations = screen.getAllByAltText(pikachuLocationString);
    expect(locations.length).toBe(2);
    expect(locations[0]).toBeInTheDocument();
    expect(locations[1]).toBeInTheDocument();
    expect(locations[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locations[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(locations[0]).toHaveAttribute('alt', pikachuLocationString);
    expect(locations[1]).toHaveAttribute('alt', pikachuLocationString);

    const firstLocation = screen.getByText(/kanto viridian forest/i);
    const secondLocation = screen.getByText(/kanto power plant/i);

    expect(firstLocation).toBeInTheDocument();
    expect(secondLocation).toBeInTheDocument();
  });

  it('se o usuário pode favoritar um pokémon na página de detalhes', () => {
    renderWithRouter(<App />);

    const detailsButton = screen.getByRole('link', { name: /more details/i });

    userEvent.click(detailsButton);

    const pokeFavoritadoString = 'Pokémon favoritado?';

    const favorite = screen.getByLabelText(pokeFavoritadoString);

    userEvent.click(favorite);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toBeInTheDocument();

    userEvent.click(favorite);

    expect(star).not.toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });
});
