import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../img/testimonio-${props.imagen}.${props.extension}`)}
        alt= {`Foto de ${props.imagen}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        {/* <p className='texto-testimonio'>"{props.testimonio}"</p> */}
        <p dangerouslySetInnerHTML={{ __html: props.testimonio }} />
      </div>
    </div>
  );  
}

export default Testimonio;