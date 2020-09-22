import React, { Component, Fragment } from "react";
import CardProduct from "../Product/CardProduct/CardProduct";
import "./Product.css";
import { connect } from "react-redux";

class Product extends Component {
  // state = {
  //   order: 4,
  // };

  // hendelConterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

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
            <div className="count">{this.props.order}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

const mapStateToPropps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToPropps)(Product);
