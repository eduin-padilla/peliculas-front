import React from 'react';

export const ProductoraCard = ({ productora, onEdit, onDelete, isDeleting }) => {
    return (
        <div className="col mt-1">
            <div className="card custom-card h-100">
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0">{productora.nombre}</h5>
                        <div>
                            {/* Botón de Editar */}
                            <button
                                className="btn btn-outline-primary btn-sm me-2"
                                onClick={() => onEdit(productora)}
                                title="Editar productora"
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            
                            {/* Botón de Eliminar */}
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onDelete(productora._id)}
                                title="Eliminar productora"
                                disabled={isDeleting}
                            >
                                {isDeleting ? (
                                    <span className="spinner-border spinner-border-sm" role="status"></span>
                                ) : (
                                    <i className="fas fa-trash-alt"></i>
                                )}
                            </button>
                        </div>
                    </div>
                    
                    
                    
                    <div className="mt-auto">
                        <hr />
                        <span className={`badge ${productora.estado === 'activo' ? 'bg-success' : 'bg-secondary'}`}>
                            {productora.estado}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
