// import { } from 'redux'

const redux = require("redux");
const createStore = redux.createStore;

const initilState = {
  value: 0,
  age: 17,
};

// Reducer

const rootReducer = (state = initilState, action) => {
  // console.log(action);
  // if (action.type == "ADD_AGE") {
  //   return {
  //     ...state,
  //     age: state.age + 1,
  //   };
  // }
  // if (action.type === "CHANGE_VALUE") {
  //   return {
  //     ...state,
  //     value: state.value + action.newValue,
  //   };
  // }

  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Sabscribsion
store.subscribe(() => {
  console.log("store Change:", store.getState());
});

// Dispatch & Acction
store.dispatch({
  type: "ADD_AGE",
});
store.dispatch({
  type: "CHANGE_VALUE",
  newValue: 10,
});
console.log(store.getState());
