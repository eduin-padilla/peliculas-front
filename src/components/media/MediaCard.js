import React from 'react';

export const MediaCard = ({ media, onEdit, onDelete, isDeleting }) => {
    return (
        <div className="col mt-1">
            <div className="card custom-card h-100">
                <img 
                    src={media.imagenPortada} 
                    className="card-img-top img-fluid"
                    alt={`Portada de ${media.titulo}`}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0 text-truncate">{media.titulo}</h5>
                        
                    </div>
                    
                    <div className="card-text flex-grow-1">
                        <p><strong>Serial:</strong> {media.serial}</p>
                        <p><strong>Sinopsis:</strong> {media.sinopsis.substring(0, 1000000)}</p>
                        <p><strong>Año:</strong> {media.añoEstreno}</p>
                    </div>

                    
                    
                    <div className="mt-auto">
                        <hr />
                        <div className="d-flex flex-column justify-content-between small">
                            <span><strong>Género:</strong> {media.genero?.nombre ||media.genero}</span>
                            <span><strong>Tipo:</strong> {media.tipo?.nombre || media.tipo}</span>
                        </div>
                    </div>

                    <div>
                        <span>
                            
                        </span>
                    </div>

                    <div>
                            <button 
                                className="btn btn-outline-primary btn-sm me-9"
                                onClick={() => onEdit(media)}
                                title="Editar medio"
                                disabled={isDeleting}
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onDelete(media._id)}
                                title="Eliminar medio"
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
            </div>
        </div>
    );
};