import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verificando o componente Not Found', () => {
  it('se a página contém o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  it('se a imagem mostrada possui o src correto', () => {
    renderWithRouter(<NotFound />);

    const pikachuImg = screen.getByAltText(/pikachu crying/i);
    expect(pikachuImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
