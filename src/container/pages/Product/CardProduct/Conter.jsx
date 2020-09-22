import React, { Component } from "react";
import { connect } from "react-redux";
import { GlobalConsumer } from "../../../../contex/contex";
import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContex } from "../../../../contex/contex";

class Conter extends Component {
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
    console.log(this);
    return (
      <div className="conter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MUNIS_ORDER" })}
        >
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     headelPlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     heandlMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Conter);
export default GlobalConsumer(Conter);
