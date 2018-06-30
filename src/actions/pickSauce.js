export const ADD_SELECTED_SAUCE = 'ADD_SELECTED_SAUCE'

export function addSelectedSauce(sauce) {
  return {
    type: ADD_SELECTED_SAUCE,
    payload: {pizzaSauce: sauce.sauceType, price: sauce.saucePrice}
  }
}
