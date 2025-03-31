import React, { useState, useEffect } from 'react';
import { getProductora, deleteProductora } from '../../services/productoraService';
import { ProductoraCard } from './ProductoraCard';
import { ProductoraUpdate } from './ProductoraUpdate';

import Swal from 'sweetalert2';

export const ProductoraView = () => {
    const [productoraList, setProductoraList] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedProductora, setSelectedProductora] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const listProductoras = async () => {
        try {
            const { data } = await getProductora();
            setProductoraList(data);
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudieron cargar las productoras', 'error');
        }
    };

    useEffect(() => {
        listProductoras();
    }, []);

    const handleOpenEditModal = (productora) => {
        setSelectedProductora(productora);
        setOpenEditModal(!openEditModal);
    };

    const handleDeleteProductora = async (id) => {
        const result = await Swal.fire({
            title: '¿Confirmar eliminación?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        });

        if (result.isConfirmed) {
            setIsDeleting(true);
            try {
                const { success, error } = await deleteProductora(id);
                
                if (!success) {
                    throw new Error(error);
                }
                
                await listProductoras();
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'Productora eliminada correctamente',
                    timer: 2000
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message || 'No se pudo eliminar la productora'
                });
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-4 g-4">
                {productoraList.map((productora) => (
                    <ProductoraCard 
                        key={productora._id} 
                        productora={productora}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteProductora}
                        isDeleting={isDeleting}
                    />
                ))}
            </div>

            {/* Modal para editar */}
            {openEditModal && (
                <ProductoraUpdate 
                    handleOpenModal={() => setOpenEditModal(false)}
                    listProductoras={listProductoras}
                    productora={selectedProductora}
                />
            )}
        </div>
    );
};

export default ProductoraView;
