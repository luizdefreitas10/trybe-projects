import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      firstAtt: '',
      secondAtt: '',
      thirdAtt: '',
      imageInput: '',
      rareInput: '',
      trunfoInput: false,
      saveButton: true,
      savedCardsList: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value }, () => this.validateFormButton());
  }

  handleSaveButton = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      savedCardsList: [...prevState.savedCardsList, prevState],
      nameCard: '',
      descriptionCard: '',
      firstAtt: '0',
      secondAtt: '0',
      thirdAtt: '0',
      imageInput: '',
      rareInput: '',
      trunfoInput: false,
      saveButton: true,
    }));
  }

  validateFormButton = () => {
    const { nameCard,
      descriptionCard,
      imageInput,
      rareInput,
      firstAtt,
      secondAtt,
      thirdAtt,
    } = this.state;
    const min = 0;
    const max = 90;
    const total = 210;
    if (nameCard !== ''
    && descriptionCard !== ''
    && imageInput !== ''
    && rareInput !== ''
    && ((Number(firstAtt) + Number(secondAtt) + Number(thirdAtt)) <= total)
    && (Number(firstAtt) <= max && Number(firstAtt) >= min)
    && (Number(secondAtt) <= max && Number(secondAtt) >= min)
    && (Number(thirdAtt) <= max && Number(thirdAtt) >= min)) {
      this.setState({ saveButton: false });
    } else {
      this.setState({ saveButton: true });
    }
  }

  verifyCheckbox = () => {
    const { savedCardsList } = this.state;
    return savedCardsList.some((c) => c.trunfoInput === true);
  }

  render() {
    const { nameCard,
      descriptionCard,
      firstAtt,
      secondAtt,
      thirdAtt,
      imageInput,
      rareInput,
      trunfoInput,
      saveButton,
    } = this.state;
    return (
      <div className="div-app-form">
        <div className="div-titulo-form">
          <div className="div-titulo">
            <h1>Adicione uma nova carta</h1>
          </div>
          <div className="div-app-form2">
            <Form
              cardName={ nameCard }
              cardDescription={ descriptionCard }
              cardAttr1={ firstAtt }
              cardAttr2={ secondAtt }
              cardAttr3={ thirdAtt }
              cardImage={ imageInput }
              cardRare={ rareInput }
              cardTrunfo={ trunfoInput }
              hasTrunfo={ this.verifyCheckbox() }
              isSaveButtonDisabled={ saveButton }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.handleSaveButton }
            />
          </div>
          <Card
            cardName={ nameCard }
            cardDescription={ descriptionCard }
            cardAttr1={ firstAtt }
            cardAttr2={ secondAtt }
            cardAttr3={ thirdAtt }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
          />
        </div>
      </div>
    );
  }
}

export default App;
