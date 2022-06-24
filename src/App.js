import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>- Tryunfo -</h1>
        <Form
          cardName="uma string"
          cardDescription="uma string"
          cardAttr1="string"
          cardAttr2="uma string"
          cardAttr3="uma string"
          cardImage="uma string"
          cardRare="uma string"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ () => console.log('inputChange acionado') }
          onSaveButtonClick={ () => console.log('saveButtonClick acionado') }
        />
      </div>
    );
  }
}

export default App;
