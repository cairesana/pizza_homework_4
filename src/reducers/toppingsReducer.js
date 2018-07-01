
export default (state = {
  topping1: {},
  topping2: {},
  topping3: {},

}, action = {}) => {

  switch (action.type) {
  case 'ADD_SELECTED_TOPPING1':
    return {
      ...state,
      topping1: {type: action.payload.pizzaTopping, price: action.payload.price}
    }

  case 'ADD_SELECTED_TOPPING2':
    return {
      ...state,
      topping2: {type: action.payload.pizzaTopping, price: action.payload.price}
    }

  case 'ADD_SELECTED_TOPPING3':
    return {
      ...state,
      topping3: {type: action.payload.pizzaTopping, price: action.payload.price}
    }

  default: return { ...state }
  }
}
