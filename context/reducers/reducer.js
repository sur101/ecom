const initialState = {
  items: [],
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(state.items);
      console.log(action.payload);
      state.items.push(action.payload);
      console.log("state: ", state);
      localStorage.setItem("cart", state);
      console.log(localStorage.getItem("cart"));
      return state;
    }
    case "REMOVE": {
      console.log("action.payload: ", action.payload);
      console.log("action.items: ", state.items);
      let ind = -1;
      state.items.map((item, index) => {
        if (item === action.payload) {
          ind = index;
        }
      });
      //   const index = state.items.indexOf(action.payload);
      console.log("ind: ", ind);
      if (ind > -1) {
        state.items.splice(ind, 1);
      }
      return { ...state, items: state.items };
    }

    default:
      return state;
  }
};

export default Cart;
