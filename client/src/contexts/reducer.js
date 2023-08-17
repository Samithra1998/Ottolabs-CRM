import { VIEW_CUSTOMER_DATA } from "./actions";

const reducer = (state, action) => {
  if (action.type === VIEW_CUSTOMER_DATA) {
    return {
      ...state,
      customers: action.payload.customers,
    };
  }
  return state;
};

export default reducer;
