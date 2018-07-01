
export default (state = {
  base: {type: '', price: 0},
  sauce: {type: '', price: 0},
  topping1: {type: '', price: 0},
  topping2: {type: '', price: 0},
  topping3: {type: '', price: 0},
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
      totalPrice: parseFloat(state.base.price)
                  + parseFloat(state.sauce.price)
                  + parseFloat(state.topping1.price)
                  + parseFloat(state.topping2.price)
                  + parseFloat(state.topping3.price)
    }

  case 'GET_TOTAL_PRICE':
    return state.totalPrice

  default:
    return {
      ...state
    }
  }
}
