import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = { objCategory: [] };

  componentDidMount() {
    this.categoryFecth();
  }

  categoryFecth = async () => {
    const response = await getCategories();
    this.setState({ objCategory: response });
  };

  render() {
    const { objCategory } = this.state;
    return (
      <div>
        {objCategory.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor="categories" data-testid="category">
              <input type="radio" id="categories" />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}
