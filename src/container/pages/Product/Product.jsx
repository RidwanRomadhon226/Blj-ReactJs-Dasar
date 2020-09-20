import React, { Component, Fragment } from "react";
import CardProduct from "../Product/CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  hendelConterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <p>Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <p>Test</p>
          </div>
          <div className="troley">
            <img src="https://picsum.photos/200/300" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onConterChange={(value) => this.hendelConterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
