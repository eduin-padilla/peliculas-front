import React, { useState } from 'react';
import { createGenero } from '../../services/generoService';
import Swal from 'sweetalert2';

export const GeneroNew = ({ handleOpenModal, listGeneros }) => {
    const [valoresForm, setValoresForm] = useState({
        nombre: '',
        estado: 'activo',
        descripcion: ''
    });

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: "Guardando...",
                didOpen: () => Swal.showLoading()
            });
    
            const { success, data, error } = await createGenero(valoresForm);
            
            if (!success) {
                throw new Error(error);
            }
            
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Género creado correctamente',
                timer: 2000
            });
            
            listGeneros();
            handleOpenModal();
        } catch(error) {
            console.error("Error completo:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'No se pudo crear el género'
            });
        }
    };

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebear-header'>
                            <h3>Nuevo Género</h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>
                
                <form onSubmit={handleOnSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label">Nombre*</label>
                                <input 
                                    type="text" 
                                    name='nombre'
                                    value={valoresForm.nombre}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' 
                                />
                            </div>
                        </div>
                        
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label">Estado*</label>
                                <select 
                                    className='form-select'
                                    name='estado'
                                    value={valoresForm.estado}
                                    onChange={handleOnChange}
                                    required
                                >
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea 
                                    name='descripcion'
                                    value={valoresForm.descripcion}
                                    onChange={handleOnChange}
                                    className='form-control'
                                    rows="3"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col'>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};