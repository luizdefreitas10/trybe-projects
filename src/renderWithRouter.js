import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  const renderRouter = render(<Router history={ history }>{ component }</Router>);

  return ({
    ...renderRouter,
    history,
  });
};

export default renderWithRouter; 
