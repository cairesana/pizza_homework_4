import React, {Component} from 'react'
import { addSelectedBase } from '../actions/pickBase'
import { connect } from 'react-redux'

class BaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {pizzaBase: '20cm NY Style -- € 6,45'}; //no docs estava value: '..'. Qndo testei, funcionou porem mesmo apos a escolha mantinha a opcao de 20 cm mostrando na caixa, removi pq o user nao sabera qual ele selecionou. No redux estava correta a selecao.
    //dessa forma com pizzaBase, a opcao escolhida se mantem sendo mostrada apos a escolha. Mas inicialmente a de 20cm estara sendo mostrada logo ao acessar.
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const selectedBase = event.target.value.split("-") //no option value dividi a massa do preco com o traco. Fazer split no traco, gera novo array e dai o resultado:
    const base = {baseType: selectedBase[0], basePrice: selectedBase[1]};
    this.props.addSelectedBase(base); //eh o primeiro indice da array q esta a esquerda: a massa; e o segundo indice eh o da direta do traco: o preco.
  }

  render() {
    return (
      <form>
        <label>
          <h3>Please, select your base:</h3>
          <br /> {/*skip line*/}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="20cm NY Style - 6.45">20cm NY Style -- € 6,45</option>
            <option value="25cm NY Style - 8.99">25cm NY Style -- € 8,99</option>
            <option value="30cm NY Style - 11.49">30cm NY Style -- € 11,49</option>
            <option value="35cm NY Style - 13.49">35cm NY Style -- € 13,49</option>
          </select>
          <hr/> {/*add a line*/}
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  base: state.baseReducer.base,     //
});

const mapDispatchToProps = dispatch => ({
  addSelectedBase: (base) => dispatch(addSelectedBase(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseForm);
