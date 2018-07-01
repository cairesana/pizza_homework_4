import React, {Component} from 'react'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'
import ToppingsForm from './ToppingsForm'
import { connect } from 'react-redux'

class PizzaContainer extends Component {

  render() {
    return (
      <div>
        <BaseForm />

        <SauceForm />

        <ToppingsForm />

        <h3>Totalprice: {this.props.totalPrice}</h3>

        <input type="submit" value="Checkout" />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  totalPrice: state.pizzaReducer.totalPrice,
});

export default connect(mapStateToProps)(PizzaContainer);

// PS: CHECKOUT button is not working YET. For future learning: read material-UI to get to know how to apply
// a "success message" after a "final action", for example create a "thanks for your order" and a real checkout.

// Drone Delivery not implemented yet. Really need to rest now -- REMEMBER TO TRY TO IMPLEMENT THIS LATER! 
