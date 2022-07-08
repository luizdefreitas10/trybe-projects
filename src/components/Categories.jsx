import React, { Component } from 'react';
import { getCategories } from '../services/api';

import './Categories.css';

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
      <div className="categories-container">
        {objCategory.map((list) => (
          <label
            key={ list.id }
            htmlFor={ list.id }
            data-testid="category"
          >
            <input
              type="radio"
              name="category"
              id={ list.id }
            />
            { list.name }
          </label>
        ))}
      </div>
    );
  }
}
