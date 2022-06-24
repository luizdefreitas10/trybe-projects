import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>- Tryunfo -</h1>
        <Form
          cardName="string"
          cardDescription="string"
          cardAttr1="string"
          cardAttr2="string"
          cardAttr3="string"
          cardImage="string"
          cardRare="string"
          cardTrunfo
          hasTrunfo
          isSaveButtonDisabled
          onInputChange={ () => console.log('inputChange acionado') }
          onSaveButtonClick={ () => console.log('saveButtonClick acionado') }
        />
        <Card
          cardName="string"
          cardDescription="string"
          cardAttr1="string"
          cardAttr2="string"
          cardAttr3="string"
          cardImage="string"
          cardRare="string"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
