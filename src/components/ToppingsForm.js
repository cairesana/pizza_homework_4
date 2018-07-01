// Pineapple, Corn, Olives (green), Red union, Spinach, Cherry tomatoes, Chicken.
// -- Rules: max. 3 toppings, toppings cost € 0,50 apiece --

import React, {Component} from 'react'
import { addSelectedTopping1, addSelectedTopping2, addSelectedTopping3  } from '../actions/pickToppings'
import { connect } from 'react-redux'

class ToppingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {pizzaTopping: 'Spinach -- € 0.50'};

    this.handleChangeTop1 = this.handleChangeTop1.bind(this)
    this.handleChangeTop2 = this.handleChangeTop2.bind(this)
    this.handleChangeTop3 = this.handleChangeTop3.bind(this)
  }

  handleChangeTop1(event) {
    const selectedTopping1 = event.target.value.split("-")
    const topping1 = {toppingType: selectedTopping1[0], toppingPrice: selectedTopping1[1]};
    this.props.addSelectedTopping1(topping1);
  }

  handleChangeTop2(event) {
    const selectedTopping2 = event.target.value.split("-")
    const topping2 = {toppingType: selectedTopping2[0], toppingPrice: selectedTopping2[1]};
    this.props.addSelectedTopping2(topping2);
  }

  handleChangeTop3(event) {
    const selectedTopping3 = event.target.value.split("-")
    const topping3 = {toppingType: selectedTopping3[0], toppingPrice: selectedTopping3[1]};
    this.props.addSelectedTopping3(topping3);
  }

  render() {
    return (
      <div>
        <form>
          <h3>Finally, select the most delicious toppings!</h3>
          <p>{'\n'}Rules of the House: maximum of 3 toppings, please.</p>

          <div>
            <p>Choose topping 1:</p>
            <label>
              <select value={this.state.value} onChange={this.handleChangeTop1}>
                <option value="Pineapple - 0.50">Pineapple -- € 0,50</option>
                <option value="Corn - 0.50">Corn -- € 0,50</option>
                <option value="Green Olives - 0.50">Green Olives -- € 0,50</option>
                <option value="Red onions - 0.50">Red Onions -- € 0,50</option>
                <option value="Spinach - 0.50">Spinach -- € 0,50</option>
                <option value="Cherry tomatoes - 0.50">Cherry Tomatoes -- € 0,50</option>
                <option value="Chicken - 0.50">Chicken -- € 0,50</option>
              </select>
            </label>
          </div>

          <div>
            <p>Choose topping 2:</p>
            <label>
              <select value={this.state.value} onChange={this.handleChangeTop2}>
                <option value="Pineapple - 0.50">Pineapple -- € 0,50</option>
                <option value="Corn - 0.50">Corn -- € 0,50</option>
                <option value="Green Olives - 0.50">Green Olives -- € 0,50</option>
                <option value="Red onions - 0.50">Red Onions -- € 0,50</option>
                <option value="Spinach - 0.50">Spinach -- € 0,50</option>
                <option value="Cherry tomatoes - 0.50">Cherry Tomatoes -- € 0,50</option>
                <option value="Chicken - 0.50">Chicken -- € 0,50</option>
              </select>
            </label>
          </div>

          <div>
            <p>Choose topping 3:</p>
            <label>
              <select value={this.state.value} onChange={this.handleChangeTop3}>
                <option value="Pineapple - 0.50">Pineapple -- € 0,50</option>
                <option value="Corn - 0.50">Corn -- € 0,50</option>
                <option value="Green Olives - 0.50">Green Olives -- € 0,50</option>
                <option value="Red onions - 0.50">Red Onions -- € 0,50</option>
                <option value="Spinach - 0.50">Spinach -- € 0,50</option>
                <option value="Cherry tomatoes - 0.50">Cherry Tomatoes -- € 0,50</option>
                <option value="Chicken - 0.50">Chicken -- € 0,50</option>
              </select>
            </label>
          </div>

          <hr />

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topping1: state.toppingsReducer.topping1,
  topping2: state.toppingsReducer.topping2,
  topping3: state.toppingsReducer.topping3,
});

const mapDispatchToProps = dispatch => ({
  addSelectedTopping1: (topping1) => dispatch(addSelectedTopping1(topping1)),
  addSelectedTopping2: (topping2) => dispatch(addSelectedTopping2(topping2)),
  addSelectedTopping3: (topping3) => dispatch(addSelectedTopping3(topping3)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ToppingsForm);
