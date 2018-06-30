import React, {Component} from 'react'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'


class PizzaContainer extends Component {

  render() {
    return (
      <div>
        <BaseForm />
        
        <SauceForm />
        <input type="submit" value="Submit" />
      </div>
    )
  }
}

export default PizzaContainer;
