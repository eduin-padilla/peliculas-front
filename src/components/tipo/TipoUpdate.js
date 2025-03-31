import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { updateTipo } from '../../services/tipoService';

export const TipoUpdate = ({ handleOpenModal, listTipos, tipo }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        estado: 'activo'
    });

    useEffect(() => {
        if (tipo) {
            setFormData({ nombre: tipo.nombre, estado: tipo.estado });
        }
    }, [tipo]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTipo(tipo._id, formData);
            Swal.fire('Éxito', 'Tipo actualizado correctamente', 'success');
            listTipos();
            handleOpenModal();
        } catch (error) {
            Swal.fire('Error', 'No se pudo actualizar el tipo', 'error');
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content p-4" style={{ backgroundColor: '#d7e8f4' }}>
                    <div className="modal-header border-bottom">
                        <h4 className="modal-title">Editar Tipo</h4>
                        <button type="button" className="close" onClick={handleOpenModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label><strong>Nombre*</strong></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="nombre" 
                                            value={formData.nombre} 
                                            onChange={handleChange} 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label><strong>Estado*</strong></label>
                                        <select 
                                            className="form-control" 
                                            name="estado" 
                                            value={formData.estado} 
                                            onChange={handleChange}
                                        >
                                            <option value="activo">Activo</option>
                                            <option value="inactivo">Inactivo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipoUpdate;
