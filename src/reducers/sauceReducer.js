export default (state = {
  sauce: {},
}, action = {}) => {

  switch (action.type) {
  case 'ADD_SELECTED_SAUCE':
    return {
      ...state,
      sauce: {type: action.payload.pizzaSauce, price: action.payload.price}
    }
  default: return { ...state }
  }
}
