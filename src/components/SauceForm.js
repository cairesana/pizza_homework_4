// White sauce
// Red sauce
// Double red sauce € 1,00
// Mix it up € 1,50
import React, {Component} from 'react'
import { addSelectedSauce } from '../actions/pickSauce'
import { updateTotalPrice } from '../actions/updateTotalPrice'
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
    this.props.updateTotalPrice();
  }

  render() {
    return(
      <form>
        <label>
          <h3>Now, select your prefered sauce:</h3>
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="White sauce - 0.00">White Sauce -- free</option>
            <option value="Red sauce - 0.00">Red Sauce -- free</option>
            <option value="Double Red sauce - 1.00">Double Red Sauce -- € 1,00</option>
            <option value="Mix it up - 1.50">Mix it up -- € 1.50</option>
          </select>
          <hr />
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  sauce: state.pizzaReducer.sauce,
  totalPrice: state.pizzaReducer.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  addSelectedSauce: (sauce) => dispatch(addSelectedSauce(sauce)),
  updateTotalPrice: () => dispatch(updateTotalPrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(SauceForm);
