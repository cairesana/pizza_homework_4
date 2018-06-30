// White sauce
// Red sauce
// Double red sauce € 1,00
// Mix it up € 1,50
import React, {Component} from 'react'
import { addSelectedSauce } from '../actions/pickSauce'
import { connect } from 'react-redux'



class SauceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {pizzaSauce: 'White Sauce -- free'};
    //essa linha de cima da erro para nao mutar o estado diretamente, para usar setState. Adicionado value e onChange no render - select tag resolve isso.
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
    const selectedSauce = event.target.value.split("-")
    const sauce = {sauceType: selectedSauce[0], saucePrice: selectedSauce[1]};
    this.props.addSelectedSauce(sauce);
}

  render() {
    return(
      <form>
        <label>
        Now, select your prefered sauce:
          <select value={this.state.value} onChange={this.handleChange}>
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

const mapStateToProps = state => ({
  base: state.baseReducer.base,     //
});

const mapDispatchToProps = dispatch => ({
  addSelectedSauce: (base) => dispatch(addSelectedSauce(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(SauceForm);
