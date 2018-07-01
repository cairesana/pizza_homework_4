
export default (state = {
  base: {},
  sauce: {},
  topping1: {},
  topping2: {},
  topping3: {},
  totalPrice: 0,

}, action = {}) => {

  switch (action.type) {
  case 'ADD_SELECTED_BASE':
    return {
      ...state,
      base: {type: action.payload.pizzaBase, price: action.payload.price}
    }

  case 'ADD_SELECTED_SAUCE':
    return {
      ...state,
      sauce: {type: action.payload.pizzaSauce, price: action.payload.price}
    }

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

  case 'UPDATE_TOTAL_PRICE':
    return {
      ...state,
      totalPrice: parseFloat(state.base.price
                  + state.sauce.price
                  + state.topping1.price
                  + state.topping2.price
                  + state.topping3.price)
    }

  default: return { ...state }
  }
}
