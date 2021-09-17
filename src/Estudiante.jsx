import React from "react";
import PropTypes from 'prop-types';
const Estudiante = ({nombre,edad,genero,imagen,descripcion}) =>(
    <>
    <div className="card col-md-4" style={{width: '18rem'}}>
    <div className="card-body">
    <img src={imagen} class="card-img-top" alt="imagen"/>
    <p className="card-title">{nombre ? nombre : "nombre no asignado"}</p>
    <p className="card-text">Edad:{edad}</p>
    <p className="card-text">Genero:{genero}</p>
    <p className="card-text">Descripcion:{descripcion}</p><br/><br/>

     </div>
    </div>
    </>

);

Estudiante.prototype = {

    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string

}
Estudiante.defaultProps ={
    nombre:"nombre no asignado",
    edad: 0,

}
export default Estudiante;