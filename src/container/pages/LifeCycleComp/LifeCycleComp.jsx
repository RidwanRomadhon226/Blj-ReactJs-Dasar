import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css";
import { connect } from "react-redux";
import { GlobalConsumer } from "../../../contex/contex";

class LifeCycleComp extends Component {
  render() {
    return (
      <Fragment>
        <button className="btn">Componen Button</button>
        <hr />
        <p>Total Order : {this.props.state.totalOrder} </p>
      </Fragment>
      // <RootContex.Consumer>
      //   {(value) => {
      //     return (
      //     );
      //   }}
      // </RootContex.Consumer>
    );
  }
}

// const mapsToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapsToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
