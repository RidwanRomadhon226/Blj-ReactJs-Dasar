import React, { Children, Component, createContext } from "react";

const RootContex = createContext();

// Untuk Provider

const Provider = RootContex.Provider;

const GlobalProvider = (Children) => {
  return class ParentComponent extends Component {
    state = {
      totalOrder: 5,
    };

    dispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MUNIS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    };
    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// Consumer nya

const Consumer = RootContex.Consumer;

export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
