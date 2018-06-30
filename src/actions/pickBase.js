export const ADD_SELECTED_BASE = 'ADD_SELECTED_BASE'

export function addSelectedBase(base) {
  return {
    type: ADD_SELECTED_BASE,
    payload: {pizzaBase: base.baseType, price: base.basePrice}
  }
}
