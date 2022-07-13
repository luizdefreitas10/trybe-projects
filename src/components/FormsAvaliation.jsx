import React, { Component } from 'react';

export default class FormsAvaliation extends Component {
state = {
  emailForms: '',
  rating: '',
  avaliation: '',
  saveForm: [],
}

onChange = ({ target }) => {
  const { name, value } = target;
  // const { rating, emailForms, avaliation } = this.state;
  this.setState({
    [name]: value,
  });
  // , () => this.setState({
  //   saveForm: {
  //     rating,
  //     emailForms,
  //     avaliation,
  //   },
  // })
  // );
}

getLocal = () => {

}

saveAvaliation = (event) => {
  event.preventDefault();
  const { rating, emailForms, avaliation } = this.state;
  const obj = {
    rating,
    emailForms,
    avaliation,
  };
  this.setState((prev) => (({
    saveForm: [...prev.saveForm, obj],
  })));
//   localStorage.setItem('productCart', JSON.stringify(obj));
}

render() {
  const { saveForm } = this.state;
  return (
    <div>
      <form>
        <fieldset>
          <legend>Avaliação</legend>
          <label htmlFor="emailForms">
            Email:
            <input
              placeholder="E-mail"
              type="email"
              data-testid="product-detail-email"
              name="emailForms"
              id="emailForms"
              onChange={ this.onChange }
            />
          </label>
          <br />
          <br />
          Nota:
          <input
            type="button"
            value="1"
            name="rating"
            data-testid="1-rating"
            onClick={ this.onChange }
          />
          <input
            type="button"
            value="2"
            name="rating"
            data-testid="2-rating"
            onClick={ this.onChange }
          />
          <input
            type="button"
            value="3"
            name="rating"
            data-testid="3-rating"
            onClick={ this.onChange }
          />
          <input
            type="button"
            value="4"
            name="rating"
            data-testid="4-rating"
            onClick={ this.onChange }
          />
          <input
            type="button"
            value="5"
            name="rating"
            data-testid="5-rating"
            onClick={ this.onChange }
          />
          <br />
          <br />
          <label htmlFor="avaliation">
            <textarea
              placeholder="Sobre o Produto"
              data-testid="product-detail-evaluation"
              name="avaliation"
              id="avaliation"
              onChange={ this.onChange }
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.saveAvaliation }
          >
            Salvar
          </button>
        </fieldset>
      </form>

      {saveForm.map((commit, index) => (
        <div key={ index }>
          <h3>{commit.emailForms}</h3>
          <p>{commit.rating}</p>
          <p>{commit.avaliation}</p>
        </div>
      ))}
    </div>
  );
}
}
