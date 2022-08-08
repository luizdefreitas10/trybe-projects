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
      filterName: [],
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
    this.setState((prevState) => ({
      filterName: [...prevState.filterName, prevState],
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

  deleteButton = (param) => {
    this.setState((prevState) => ({
      savedCardsList: prevState.savedCardsList.filter((c) => c.nameCard !== param),
    }));
  }

  handleFilterName = (event) => {
    const { value } = event.target;
    const { savedCardsList, filterName } = this.state;
    if (event.target.value !== '') {
      this.setState({
        savedCardsList: savedCardsList
          .filter((c) => c.nameCard.toLowerCase().includes(value.toLowerCase())),
      });
    } else {
      this.setState({
        savedCardsList,
      });
    }
  }

  handleRareFilter =(event) => {
    const { savedCardsList, filterName } = this.state;
    const { value } = event.target;
    if (value !== 'todas') {
      this.setState({
        savedCardsList: savedCardsList.filter((c) => c.rareInput === value),
      });
    } else {
      this.setState({
        savedCardsList: filterName,
      });
    }
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
      savedCardsList,
    } = this.state;
    return (
      <div className="div-app-form">
        {/* { console.log(savedCardsList) } */}
        <div className="div-titulo">
          <h1>Trunfo: adicione uma nova carta</h1>
        </div>
        <div className="div-titulo-form">
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
        <div className="div-app-form">
          <div className="div-titulo">
            <h2>Todas as cartas:</h2>
          </div>
          Filtros de busca:
          <label htmlFor="name-filter">
            <input
              type="text"
              id="name-filter"
              data-testid="name-filter"
              placeholder="Nome da carta"
              onChange={ this.handleFilterName }
            />
          </label>
          <label htmlFor="select-filter">
            <select
              id="select-filter"
              data-testid="rare-filter"
              onChange={ this.handleRareFilter }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <div className="div-card-button">
            { savedCardsList.map((c) => (
              <div
                key={ c.nameCard }
                className="div-h1-card"
              >
                <Card
                  cardName={ c.nameCard }
                  cardDescription={ c.descriptionCard }
                  cardAttr1={ c.firstAtt }
                  cardAttr2={ c.secondAtt }
                  cardAttr3={ c.thirdAtt }
                  cardImage={ c.imageInput }
                  cardRare={ c.rareInput }
                  cardTrunfo={ c.trunfoInput }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.deleteButton(c.nameCard) }
                >
                  Excluir
                </button>
              </div>)) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
