export const ADD_SELECTED_TOPPING1 = 'ADD_SELECTED_TOPPING1'
export const ADD_SELECTED_TOPPING2 = 'ADD_SELECTED_TOPPING2'
export const ADD_SELECTED_TOPPING3 = 'ADD_SELECTED_TOPPING3'

export function addSelectedTopping1(topping1) {
  return {
    type: ADD_SELECTED_TOPPING1,
    payload: {pizzaTopping: topping1.toppingType, price: topping1.toppingPrice}
  }
}

export function addSelectedTopping2(topping2) {
  return {
    type: ADD_SELECTED_TOPPING2,
    payload: {pizzaTopping: topping2.toppingType, price: topping2.toppingPrice}
  }
}

export function addSelectedTopping3(topping3) {
  return {
    type: ADD_SELECTED_TOPPING3,
    payload: {pizzaTopping: topping3.toppingType, price: topping3.toppingPrice}
  }
}
