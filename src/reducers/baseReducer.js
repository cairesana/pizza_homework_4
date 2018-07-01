
export default (state = {
  base: {},

}, action = {}) => {

  switch (action.type) {
  case 'ADD_SELECTED_BASE':
    return {
      ...state,
      base: {type: action.payload.pizzaBase, price: action.payload.price}
    }
  default: return { ...state }
  }
}
