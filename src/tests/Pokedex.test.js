import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

describe('Verificando o componente Pokedex', () => {
  it('se a página contém o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  it('se o botão Próximo pokémon tem o texto correto', () => {
    renderWithRouter(<App />);

    const nextPokeButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokeButton).toBeInTheDocument();
  });

  it('se os próximos pokémons da lista são exibidos ao clicar no botão', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /próximo pokémon/i });

    data.forEach((pokemon, index) => {
      if (index === 0) {
        const poke = screen.getByText(pokemon.name);
        return expect(poke).toBeInTheDocument();
      }
      userEvent.click(button);
      const newPoke = screen.getByText(pokemon.name);
      expect(newPoke).toBeInTheDocument();
      if (index === data.length - 1) {
        userEvent.click(button);
        const pikachu = screen.getByText('Pikachu');
        return expect(pikachu).toBeInTheDocument();
      }
    });
  });

  it('se é mostrado apenas 1 pokemon por vez', () => {
    renderWithRouter(<App />);

    const onePokeByTurn = screen.getAllByRole('img');
    expect(onePokeByTurn.length).toBe(1);
  });

  it('verifica se a pokedex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const numerOfButtons = 7;

    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons.length).toBe(numerOfButtons);
  });

  it('ao clicar no botão de tipo, a pokédex mostrará os pokemons daquele tipo', () => {
    renderWithRouter(<App />);

    const fireButton = screen.getByRole('button', { name: /fire/i });
    const nextPokeButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(fireButton);
    const pokemonType = screen.getByTestId('pokemon-name');
    // console.log(pokemonType.innerHTML);
    expect(pokemonType.innerHTML).toBe('Charmander');
    userEvent.click(nextPokeButton);
    const newPokeType = screen.getByTestId('pokemon-name');
    expect(newPokeType.innerHTML).toBe('Rapidash');
  });

  it('o texto do botão deve correpsonder ao nome do tipo', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /psychic/i });
    // console.log(button.innerHTML);
    expect(button.innerHTML).toBe('Psychic');
    userEvent.click(button);
    const pokeType = screen.getByTestId('pokemon-type');
    // console.log(pokeType.innerHTML);
    expect(pokeType.innerHTML).toBe('Psychic');
  });

  it('verifica o botão all', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toHaveTextContent('All');
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);

    const pikachu = screen.getByAltText('Pikachu sprite');
    expect(pikachu).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });

    userEvent.click(nextButton);

    const charmander = screen.getByAltText('Charmander sprite');
    expect(charmander).toBeInTheDocument();

    userEvent.click(nextButton);
    const caterpie = screen.getByAltText('Caterpie sprite');
    expect(caterpie).toBeInTheDocument();

    userEvent.click(nextButton);
    const ekans = screen.getByAltText('Ekans sprite');
    expect(ekans).toBeInTheDocument();

    userEvent.click(nextButton);
    const alakazam = screen.getByAltText('Alakazam sprite');
    expect(alakazam).toBeInTheDocument();

    userEvent.click(nextButton);
    const mew = screen.getByAltText('Mew sprite');
    expect(mew).toBeInTheDocument();

    userEvent.click(nextButton);
    const rapidash = screen.getByAltText('Rapidash sprite');
    expect(rapidash).toBeInTheDocument();

    userEvent.click(nextButton);
    const snorlax = screen.getByAltText('Snorlax sprite');
    expect(snorlax).toBeInTheDocument();

    userEvent.click(nextButton);

    const dragonair = screen.getByAltText('Dragonair sprite');
    expect(dragonair).toBeInTheDocument();
  });
});
