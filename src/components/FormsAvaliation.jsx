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
  this.setState({
    [name]: value,
  });
}

componentDidMount = () => {
  // this.setState((prev) => (({
  //   saveForm: [
  //     ...prev.saveForm,
  //     // localStorage.getItem('productCart')
  //   ],
  // })));
  console.log(localStorage.getItem('productCart'));
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
  const { saveForm } = this.state;
  localStorage.setItem('productCart', JSON.stringify(saveForm));
}

render() {
  const { saveForm } = this.state;
  localStorage.setItem('productCart', JSON.stringify(saveForm));
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

      {/* {saveForm} */}

      {JSON.parse(localStorage.getItem('productCart')).map((commit, index) => (
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
