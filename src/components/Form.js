import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="div-form">
        <form className="form-class">
          <label htmlFor="nameCard">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              placeholder="Digite o nome da carta"
              id="nameCard"
              name="nameCard"
              defaultValue={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descriptionCard">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              id="descriptionCard"
              name="descriptionCard"
              placeholder="Digite uma descrição"
              defaultValue={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="firstAtt">
            Atributo 01:
            <input
              type="number"
              data-testid="attr1-input"
              id="firstAtt"
              name="firstAtt"
              defaultValue={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="secondAtt">
            Atributo 02:
            <input
              type="number"
              data-testid="attr2-input"
              id="secondAtt"
              name="secondAtt"
              defaultValue={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="thirdAtt">
            Atributo 03:
            <input
              type="number"
              data-testid="attr3-input"
              id="thirdAtt"
              name="thirdAtt"
              defaultValue={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="imageInput">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="imageInput"
              name="imageInput"
              defaultValue={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareInput">
            Raridade da carta:
            <select
              id="rareInput"
              name="rareInput"
              data-testid="rare-input"
              defaultValue={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoInput">
            Super trunfo:
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfoInput"
              name="trunfoInput"
              defaultChecked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
            id="saveButton"
            name="saveButton"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
