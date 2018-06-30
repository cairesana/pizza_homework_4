import React, {Component} from 'react'
import BaseForm from './BaseForm'


class PizzaContainer extends Component {

  render() {
    return (
      <div>
        <BaseForm />
        <input type="submit" value="Submit" />
      </div>
    )
  }
}

export default PizzaContainer;
