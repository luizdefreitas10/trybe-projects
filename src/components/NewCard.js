import React from 'react';
import PropTypes from 'prop-types';

class NewCard extends React.Component {
  render() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <div className="div-card2">
          <span data-testid="name-card">{ cardName }</span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <span data-testid="description-card">{ cardDescription }</span>
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
          <span data-testid="rare-card">{ cardRare }</span>
          { cardTrunfo === true
            ? <span data-testid="trunfo-card">Super Trunfo</span> : null }
        </div>
      </div>
    );
  }
}

NewCard.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default NewCard;
