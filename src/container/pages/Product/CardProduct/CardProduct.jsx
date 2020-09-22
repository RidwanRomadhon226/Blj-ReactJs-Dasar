import React, { Component } from "react";
import Conter from "./Conter";

class CardProduct extends Component {
  // state = {
  //   order: 4,
  // };

  // heandelConterChange = (newValue) => {
  //   this.props.onConterChange(newValue);
  // };

  // headelPlus = () => {
  //   console.log("plus", this);
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.heandelConterChange(this.state.order);
  //     }
  //   );
  // };

  // heandlMinus = () => {
  //   console.log("Munis", this);
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.heandelConterChange(this.state.order);
  //       }
  //     );
  //   } else {
  //     alert("Barang Habis");
  //   }
  // };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <p className="product-title">Baju</p>
        <p className="product-price">Rp. 40.000,-</p>
        {/* <div className="conter">
          <button className="minus" onClick={this.heandlMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.headelPlus}>
            +
          </button>
        </div> */}
        <Conter />
      </div>
    );
  }
}

export default CardProduct;
