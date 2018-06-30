import React, {Component} from 'react'

class BaseForm extends Component {
  initialState = ''

  render() {
    return (
      <form>
        <label>
          Please, select your base:
          <select >
            <option value="20cm NY Style, 6.45">20cm NY Style -- € 6,45</option>
            <option value="25cm NY Style, 8.99">25cm NY Style -- € 8,99</option>
            <option value="30cm NY Style, 11,49">30cm NY Style -- € 11,49</option>
            <option value="35cm NY Style, 13,49">35cm NY Style -- € 13,49</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default BaseForm;
