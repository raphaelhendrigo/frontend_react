import React, {Component} from 'react';
import UsuarioSaida from './UsuarioSaida';
class UsuarioEntrada extends Component {
    constructor (props) {
        super(props);
        this.state = {recebeState: ''};
        this.alteraState = this.alteraState.bind(this);
    }
    
    render () { return (
        <div>
            <input type="text"
            onChange = {this.alteraState}
            value = {this.state.state}
            />
            <UsuarioSaida usuario = {this.state.state}/>
        </div>
    );
    }

        alteraState(event) {
            this.setState({state: event.target.value});
        }
        }



export default UsuarioEntrada;