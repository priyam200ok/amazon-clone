import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./stateTypes";
export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.basket],
      };
    case REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      index > 0 ? newBasket.splice(index, 1) : console.warn("not possible");
      console.log(newBasket);
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
export default reducer;
