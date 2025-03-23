import React, { useState, useEffect } from 'react'
import {getDirector} from '../../services/directorService';
import { getGenero } from '../../services/generoService';
import { getProductora } from '../../services/productoraService';   
import { getTipo } from '../../services/tipoService';
import { createMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';



export const MediaNew = ( {handleOpenModal, listMedia} ) => {
    
    const [director, setDirector] = useState([]);   
    const [genero, setGenero] = useState([]);
    const [productora, setProductora] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [valoresFrom, setValoresFrom] = useState([]);
    const {
        Serial ="",
        imagen ="",
        Titulo = "",
        fechaDeEstreno="",
        Director = "",
        Productora = "",
        Genero = "",
        Tipo = "",
        Sinopsis = "",
        } = valoresFrom;


    const listDirector = async () => {
        try{
            const{ data } = await getDirector();
            setDirector(data);
        }catch (error) {
            console.log(error)
        }
    }


    const listGenero = async () => {
        try{
            const{ data } = await getGenero();
            setGenero(data);
        }catch (error) {
            console.log(error)
        }
    }

    const listProductora = async () => {
        try{
            const{ data } = await getProductora();
            setProductora(data);
        }catch (error) {
            console.log(error)
        }
    }

    const listTipo = async () => {
        try{
            const{ data } = await getTipo();
            setTipo(data);
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listDirector();
        listGenero();
        listProductora();
        listTipo();
    }, []);


    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresFrom({ ...valoresFrom, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const media = {
            Serial,
            imagen,
            Titulo,
            fechaDeEstreno,
            Director,
            Productora,
            Genero,
            Tipo,
            Sinopsis,

            director:{
                _id: Director
            },

            genero:{
                _id: Genero
            },

            productora:{
                _id: Productora
            }, 

            tipo:{
                _id: Tipo
            }
        }
        console.log(media);

        try{
            Swal.fire({
                allowOutsideClick: false,
                text:'cargando....'
            });
            Swal.showLoading();
            const { data } = await createMedia(media);
            handleOpenModal();
            listMedia();
            Swal.close();
        }catch (error) {
            console.log(error);
            Swal.close();
        }
    }

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='sidebear-header'>
                                <h3 > Nueva Pelicula </h3>
                                <i class="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                            </div>
                            <hr class="hr"/>

                            <form onSubmit={handleOnSubmit}>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="serial" className="form-label">Serial:</label>
                                    <input
                                        type="text"
                                        id="serial"
                                        name="serial"
                                        className="form-control"
                                        value={valoresFrom.serial}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="titulo" className="form-label">Título:</label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="titulo"
                                        className="form-control"
                                        value={valoresFrom.titulo}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="titulo" className="form-label">Imagen:</label>
                                    <input
                                        type="url"
                                        id="imagen"
                                        name="imagen"
                                        className="form-control"
                                        value={valoresFrom.imagen}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label htmlFor="Sinopsis" className="form-label">Sinopsis:</label>
                                        <textarea
                                            id="sinopsis"
                                            name="sinopsis"
                                            className="form-control"
                                            value={valoresFrom.serial}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="fechaEstreno" className="form-label">Fecha de estreno:</label>
                                        <input
                                            type="date"
                                            id="fechaEstreno"
                                            name="fechaEstreno"
                                            className="form-control"
                                            value={valoresFrom.fechaEstreno}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="genero" className="form-label">Género:</label>
                                        <input
                                            type="text"
                                            id="genero"
                                            name="genero"
                                            className="form-control"
                                            value={valoresFrom.genero}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="director" className="form-label">Director:</label>
                                        <input
                                            type="text"
                                            id="director"
                                            name="director"
                                            className="form-control"
                                            value={valoresFrom.director}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="productora" className="form-label">Productora:</label>
                                        <input
                                            type="text"
                                            id="productora"
                                            name="productora"
                                            className="form-control"
                                            value={valoresFrom.productora}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="tipo" className="form-label">Tipo:</label>
                                        <input
                                            type="text"
                                            id="tipo"
                                            name="tipo"
                                            className="form-control"
                                            value={valoresFrom.tipo}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

