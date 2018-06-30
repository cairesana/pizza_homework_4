export const ADD_SELECTED_BASE = 'ADD_SELECTED_BASE'

export function addSelectedBase(baseType, basePrice) {
  return {
    type: ADD_SELECTED_BASE,
    payload: {pizzaBase: baseType, price: basePrice}
  }
}
