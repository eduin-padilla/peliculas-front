import React, { useState, useEffect } from 'react';
import { updateDirector } from '../../services/directorService';
import Swal from 'sweetalert2';

const DirectorUpdate = ({ handleOpenModal, listDirectores, director }) => {
    const [valoresForm, setValoresForm] = useState({
        nombre: '',
        estado: 'activo'
    });

    useEffect(() => {
        if (director) {
            setValoresForm({
                nombre: director.nombre,
                estado: director.estado
            });
        }
    }, [director]);

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: "Actualizando...",
                didOpen: () => Swal.showLoading()
            });

            await updateDirector(director._id, valoresForm);
            
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Director actualizado correctamente'
            });
            
            listDirectores();
            handleOpenModal();
        } catch(error) {
            console.error("Error completo:", error);
            let errorMessage = 'No se pudo actualizar el director';
            
            if (error.response?.data) {
                errorMessage += `: ${JSON.stringify(error.response.data)}`;
            }
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: errorMessage
            });
        }
    };

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebear-header'>
                            <h3>Editar Director</h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>
                
                <form onSubmit={handleOnSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" name='nombre'
                                    value={valoresForm.nombre}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' />
                            </div>
                        </div>
                        
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select className='form-select'
                                    required
                                    name='estado'
                                    value={valoresForm.estado}
                                    onChange={handleOnChange}>
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
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
    );
};

export default DirectorUpdate;