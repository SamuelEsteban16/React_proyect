import React, {Component} from "react";
import Contenedor from "./Contenedor";

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state ={
            nombre:"nombre state"

        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
        let elemento = document.getElementById("contenedor");
        console.log(elemento);
    
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value

        })
    }
    render(){
        return(
            <div id="contenedor">
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
    componentDidMount(){
        let elemento= document.getElementById("contenedor");
        console.log(elemento);

    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
        console.log("-------------------");

    }

}
export default Formulario;