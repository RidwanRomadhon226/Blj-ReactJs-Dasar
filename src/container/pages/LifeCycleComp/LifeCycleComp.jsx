import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css";
import { connect } from "react-redux";

class LifeCycleComp extends Component {
  render() {
    return (
      <Fragment>
        <button className="btn">Componen Button</button>
        <hr />
        <p>Total Order : {this.props.order} </p>
      </Fragment>
    );
  }
}

const mapsToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapsToProps)(LifeCycleComp);
