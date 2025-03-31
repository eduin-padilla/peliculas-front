import React, { useState } from 'react';
import { createProductora } from '../../services/productoraService';
import Swal from 'sweetalert2';

const ProductoraNew = ({ handleOpenModal, listProductoras }) => {
    const [valoresForm, setValoresForm] = useState({
        nombre: '',
        pais: '',
        estado: 'activo'
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
    
            const { success, data, error } = await createProductora(valoresForm);
            
            if (!success) {
                throw new Error(error);
            }
            
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Productora creada correctamente',
                timer: 2000
            });
            
            listProductoras();
            handleOpenModal();
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'No se pudo crear la productora'
            });
        }
    };

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebear-header'>
                            <h3>Nueva Productora</h3>
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
                                <label className="form-label">País*</label>
                                <input 
                                    type="text" 
                                    name='pais'
                                    value={valoresForm.pais}
                                    onChange={handleOnChange}
                                    required
                                    className='form-control' 
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
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
                        <div className='col'>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductoraNew;