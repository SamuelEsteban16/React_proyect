import React, {Component} from "react";

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state ={
            nombre:"nombre state"

        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value

        })
    }
    render(){
        return(
            <div>
                <h1>
                    <form action="">
                <label htmlFor="">Nombre</label><br />
                    <input type="text" onChange={ this.cambiarNombre}
                     /><br />
                    <input type="submit" value="enviar" name="" id="" />
                    </form>
            <h3>{ `Hola ${this.state.nombre}`}</h3>
                </h1>
            </div>

        )
    }

}
export default Formulario;