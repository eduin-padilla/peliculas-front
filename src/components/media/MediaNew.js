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
    const [valoresFrom, setValoresFrom] = useState({});
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


    const handleOnChange = (e) => {
        setValoresFrom(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!Serial || !Titulo || !fechaDeEstreno || !Director || !Productora || !Genero || !Tipo || !Sinopsis) {
            Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
            return;
        }
    
        const media = {
            Serial, imagen, Titulo, fechaDeEstreno, Director, Productora, Genero, Tipo, Sinopsis,
            director: { _id: Director },
            genero: { _id: Genero },
            productora: { _id: Productora },
            tipo: { _id: Tipo }
        };
    
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
            Swal.showLoading();
            await createMedia(media);
            handleOpenModal();
            listMedia();
            Swal.close();
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'No se pudo guardar la película', 'error');
        }
    };
    

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='sidebear-header'>
                                <h3 > Nueva Pelicula </h3>
                                <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                            </div>
                            <hr className="hr"/>

                            <form onSubmit={(e) => handleOnSubmit (e)}>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="serial" className="form-label">Serial:</label>
                                    <input
                                        type="text"
                                        id="serial"
                                        name="serial"
                                        className="form-control"
                                        value={valoresFrom.Serial}
                                        onChange={ e => handleOnChange (e)}
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
                                        value={valoresFrom.Titulo}
                                        onChange={ e => handleOnChange (e)}
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
                                        onChange={ e => handleOnChange (e)}
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
                                            value={valoresFrom.Sinopsis}
                                            onChange={ e => handleOnChange (e)}
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
                                            value={valoresFrom.fechaDeEstreno}
                                            onChange={ e => handleOnChange (e)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="genero" className="form-label">Género:</label>
                                        <select className='form-select'
                                            required
                                            name='Genero'
                                            value={Genero}  // Cambiado de "genero" a "Genero"
                                            onChange={e => handleOnChange(e)}>
                                            <option value="">Seleccione un género</option>
                                            {genero.map((g) => (
                                                <option key={g._id} value={g._id}>{g.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="director" className="form-label">Director:</label>
                                        <select className='form-select'
                                            required
                                            name='Director'
                                            value={Director}  // Cambiado de "director" a "Director"
                                            onChange={e => handleOnChange(e)}>
                                            <option value="">Seleccione un Director</option>
                                            {director.map((d) => (
                                                <option key={d._id} value={d._id}>{d.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="productora" className="form-label">Productora:</label>
                                        <select className='form-select'
                                            required
                                            name='Productora'
                                            value={Productora}  // Cambiado de "productora" a "Productora"
                                            onChange={e => handleOnChange(e)}>
                                            <option value="">Seleccione una productora</option>
                                            {productora.map((p) => (
                                                <option key={p._id} value={p._id}>{p.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="tipo" className="form-label">Tipo:</label>
                                        <select className='form-select'
                                            required
                                            name='Tipo'
                                            value={Tipo}  // Cambiado de "tipo" a "Tipo"
                                            onChange={e => handleOnChange(e)}>
                                            <option value="">Seleccione un tipo de película</option>
                                            {tipo.map((t) => (
                                                <option key={t._id} value={t._id}>{t.nombre}</option>
                                            ))}
                                        </select>
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

