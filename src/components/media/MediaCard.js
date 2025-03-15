import React from 'react'

export const MediaCard = (props) => {

    const { Media } = props;

    return (
        <div className="col mt-3">
            <div className="card">
                <img src={Media.imagenPortada} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"  >Caracteristicas</h5>
                    <hr/>
                    <p className="card-text ">Serial: {Media.serial}</p>
                    <p className="card-text">Titulo: {Media.titulo}</p>
                    <p className="card-text">Sinopsis: {Media.sinopsis}</p>
                    <p className="card-text">Fecha de estreno: {Media.añoEstreno}</p>
                    <p className='card-text'>Genero: {Media.genero}</p>
                    <p className='card-text'>Director: {Media.director}</p>
                    <p className='card-text'>Productora: {Media.productora}</p>
                    <p className='card-text'>Tipo: {Media.tipo}</p>
                </div>
            </div>
        </div>
    )
}


