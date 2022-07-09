import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getAddToCart } from './Cart';

export default class ProductList extends Component {
  // state = {
  //   productList: [],
  //   addToCart: [],
  // }

  handleCartButton = () => {
    // const { propObj } = this.props;
    // const { productList } = this.state;
    // // const { productName, productPrice } = this.props;
    // // console.log(propObj);
    // this.setState({
    //   productList: propObj,
    // });
    // this.setState((prevState) => ({
    //   addToCart: prevState.productList,
    // }));
    // console.log(productList);
    // getAddToCart();
  }

  render() {
    // const { productName, productPrice, productImage, productId } = this.props;
    const { propObj } = this.props;
    // const { productList, addToCart } = this.state;
    // console.log(addToCart);
    return (
      <div data-testid="product">
        <Link to={ `/product/${propObj.id}` } data-testid="product-detail-link">
          <h3>{ propObj.title }</h3>
          <img
            src={ propObj.thumbnail }
            alt={ propObj.title }
          />
          <h4>{ propObj.price }</h4>
        </Link>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.handleCartButton }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

ProductList.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
}.isRequired;
