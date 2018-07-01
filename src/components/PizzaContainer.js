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

        <input type="submit" value="Submit" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  totalPrice: state.pizzaReducer.totalPrice,
});

export default connect(mapStateToProps)(PizzaContainer);
