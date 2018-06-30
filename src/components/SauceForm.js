// White sauce
// Red sauce
// Double red sauce € 1,00
// Mix it up € 1,50
import React, {Component} from 'react'


class SauceForm extends Component {

  render() {
    return(
      <form>
        <label>
        Now, select your prefered sauce:
          <select >
            <option value="White sauce - 0.00">White Sauce -- free</option>
            <option value="Red sauce - 0.00">Red Sauce -- free</option>
            <option value="Double Red sauce - 1.00">Double Red Sauce -- € 1,00</option>
            <option value="Mix it up - 1.50">Mix it up -- € 1.50</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SauceForm
