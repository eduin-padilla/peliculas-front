import React from 'react';

export const GeneroCard = ({ genero, onEdit, onDelete, isDeleting }) => {
    return (
        <div className="col mt-1">
            <div className="card custom-card h-100">
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0">{genero.nombre}</h5>
                        <div>
                            <button 
                                className="btn btn-outline-primary btn-sm me-2"
                                onClick={() => onEdit(genero)}
                                title="Editar género"
                                disabled={isDeleting}
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onDelete(genero._id)}
                                title="Eliminar género"
                                disabled={isDeleting}
                            >
                                {isDeleting ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    <i className="fas fa-trash-alt"></i>
                                )}
                            </button>
                        </div>
                    </div>
                    
                    <div className="card-text">
                        <p><strong>Descripción:</strong> {genero.descripcion || 'N/A'}</p>
                    </div>
                    
                    <div className="mt-auto">
                        <hr />
                        <span className={`badge ${genero.estado === 'activo' ? 'bg-success' : 'bg-secondary'}`}>
                            {genero.estado}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};