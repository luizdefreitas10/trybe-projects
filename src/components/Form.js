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
      onSaveButtonClick,
      handleSaveButton } = this.props;

    return (
      <div className="div-form">
        <form
          className="form-class"
          onSubmit={ handleSaveButton }
        >
          <label htmlFor="nameCard">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              placeholder="Digite o nome da carta"
              id="nameCard"
              name="nameCard"
              value={ cardName }
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
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="firstAtt">
            Atributo 01:
            <input
              min={ 0 }
              max={ 90 }
              type="number"
              data-testid="attr1-input"
              id="firstAtt"
              name="firstAtt"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="secondAtt">
            Atributo 02:
            <input
              min={ 0 }
              max={ 90 }
              type="number"
              data-testid="attr2-input"
              id="secondAtt"
              name="secondAtt"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="thirdAtt">
            Atributo 03:
            <input
              min={ 0 }
              max={ 90 }
              type="number"
              data-testid="attr3-input"
              id="thirdAtt"
              name="thirdAtt"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
            <h5> Pontos disponíveis: 210</h5>
          </label>
          <label htmlFor="imageInput">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="imageInput"
              name="imageInput"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareInput">
            Raridade da carta:
            <select
              id="rareInput"
              name="rareInput"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <div>
            { hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="trunfoInput">
                  Super trunfo:
                  <input
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfoInput"
                    name="trunfoInput"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>) }
          </div>
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  handleSaveButton: PropTypes.func,
}.isRequired;

export default Form;
