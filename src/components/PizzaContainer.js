import React, {Component} from 'react'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'
import ToppingsForm from './ToppingsForm'


class PizzaContainer extends Component {

  render() {
    return (
      <div>
        <BaseForm />

        <SauceForm />

        <ToppingsForm />
        
        <input type="submit" value="Submit" />
      </div>
    )
  }
}

export default PizzaContainer;
