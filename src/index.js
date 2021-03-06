import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import HelloComponent from "./component/HelloComponent";
// import StateFullComponent from "./container/StateFullComponent";
// import YouTubeComp from "./component/YouTubeComp/YouTubeComp";
import Home from "./container/Home/Home";
// const HelloComponent = () => {};

//Redux
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./redux/reducer/globalReducer";

// const createStore = redux.createStore;

// Store
// const store = createStore(rootReducer);

//Redux

// ReactDOM.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>,
//   document.getElementById("root")
// );

// Contex

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
