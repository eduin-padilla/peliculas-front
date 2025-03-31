import React, { useState, useEffect } from 'react';
import { getDirector } from '../../services/directorService';
import { getGenero } from '../../services/generoService';
import { getProductora } from '../../services/productoraService';
import { getTipo } from '../../services/tipoService';
import { getMediaById, updateMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';

const MediaUpdate = ({ handleOpenModal, listMedia, media }) => {
    const [directores, setDirectores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);
    
    const [valoresForm, setValoresForm] = useState({
        serial: '',
        titulo: '',
        sinopsis: '',
        url: '',
        imagenPortada: '',
        añoEstreno: '',
        genero: '',
        director: '',
        productora: '',
        tipo: '',
        moduloDirector: '',
        moduloGenero: '',
        moduloProductora: '',
        moduloTipo: ''
    });

    // Cargar datos del medio y opciones para selects
    useEffect(() => {
        const fetchData = async () => {
            try {
                Swal.fire({
                    allowOutsideClick: false,
                    text: "Cargando...",
                    didOpen: () => Swal.showLoading()
                });

                // Cargar opciones para selects
                const [directoresRes, generosRes, productorasRes, tiposRes] = await Promise.all([
                    getDirector(),
                    getGenero(),
                    getProductora(),
                    getTipo()
                ]);
                
                setDirectores(directoresRes.data);
                setGeneros(generosRes.data);
                setProductoras(productorasRes.data);
                setTipos(tiposRes.data);

                // Si recibimos el media como prop, establecer los valores
                if (media) {
                    setValoresForm({
                        serial: media.serial,
                        titulo: media.titulo,
                        sinopsis: media.sinopsis,
                        url: media.url,
                        imagenPortada: media.imagenPortada,
                        añoEstreno: media.añoEstreno.toString(),
                        genero: media.genero._id || media.genero,
                        director: media.director._id || media.director,
                        productora: media.productora._id || media.productora,
                        tipo: media.tipo._id || media.tipo,
                        moduloDirector: media.moduloDirector,
                        moduloGenero: media.moduloGenero,
                        moduloProductora: media.moduloProductora,
                        moduloTipo: media.moduloTipo
                    });
                }

                Swal.close();
            } catch(error) {
                console.error("Error cargando datos:", error);
                Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
                handleOpenModal();
            }
        };
        
        fetchData();
    }, [media, handleOpenModal]);

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: "Actualizando...",
                didOpen: () => Swal.showLoading()
            });

            // Preparar datos para enviar
            const mediaData = {
                ...valoresForm,
                moduloDirector: valoresForm.director,
                moduloGenero: valoresForm.genero,
                moduloProductora: valoresForm.productora,
                moduloTipo: valoresForm.tipo,
                añoEstreno: Number(valoresForm.añoEstreno)
            };

            await updateMedia(media._id, mediaData);
            
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Medio actualizado correctamente'
            });
            
            listMedia();
            handleOpenModal();
        } catch(error) {
            console.error("Error completo:", error);
            let errorMessage = 'No se pudo actualizar el medio';
            
            if (error.response?.data) {
                if (error.response.data.message) {
                    errorMessage += `: ${error.response.data.message}`;
                } else if (Array.isArray(error.response.data)) {
                    errorMessage += `:<br>${error.response.data.map(err => err.msg).join('<br>')}`;
                } else {
                    errorMessage += `: ${JSON.stringify(error.response.data)}`;
                }
            } else if (error.message) {
                errorMessage += `: ${error.message}`;
            }
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: errorMessage
            });
        }
    }

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebear-header'>
                            <h3>Editar {valoresForm.titulo || 'Película/Serie'}</h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>
                
                <form onSubmit={handleOnSubmit}>
                    {/* Mantén el mismo formulario que ya tienes */}
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="number" name='serial'
                                    value={valoresForm.serial}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' />
                            </div>
                        </div>
            
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Título</label>
                                <input type="text" name='titulo'
                                    value={valoresForm.titulo}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">URL</label>
                                <input type="url" name='url'
                                    value={valoresForm.url}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' />
                            </div>
                        </div>
            
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Imagen de Portada</label>
                                <input type="text" name='imagenPortada'
                                    value={valoresForm.imagenPortada}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Sinopsis</label>
                                <textarea name='sinopsis'
                                    value={valoresForm.sinopsis}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' 
                                    rows="3" />
                            </div>
                        </div>
                    </div>
            
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Año de Estreno</label>
                                <input type="number" name='añoEstreno'
                                    value={valoresForm.añoEstreno}
                                    onChange={handleOnChange}
                                    min="1900"
                                    max={new Date().getFullYear() + 5}
                                    required
                                    className='form-control' />
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Género</label>
                                <select className='form-select'
                                    required
                                    name='genero'
                                    value={valoresForm.genero}
                                    onChange={handleOnChange}>
                                    <option value="">--SELECCIONE--</option>
                                    {generos.map((g) => (
                                        <option key={g._id} value={g._id}>{g.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
            
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Director</label>
                                <select className='form-select'
                                    required
                                    name='director'
                                    value={valoresForm.director}
                                    onChange={handleOnChange}>
                                    <option value="">--SELECCIONE--</option>
                                    {directores.map((d) => (
                                        <option key={d._id} value={d._id}>{d.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Productora</label>
                                <select className='form-select'
                                    required
                                    name='productora'
                                    value={valoresForm.productora}
                                    onChange={handleOnChange}>
                                    <option value="">--SELECCIONE--</option>
                                    {productoras.map((p) => (
                                        <option key={p._id} value={p._id}>{p.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Tipo</label>
                                <select className='form-select'
                                    required
                                    name='tipo'
                                    value={valoresForm.tipo}
                                    onChange={handleOnChange}>
                                    <option value="">--SELECCIONE--</option>
                                    {tipos.map((t) => (
                                        <option key={t._id} value={t._id}>{t.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col'>
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MediaUpdate;