import React, { useState, useEffect } from 'react';
import {getProductora} from '../../services/productoraService';


export const ProductoraView = () => {

    const [productora, setProductora] = useState([]);

    const listProductora = async () => {
        
        try {
            const{ data } = await getProductora();
            console.log(data);
            setProductora(data);
            
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listProductora();
    }, []);

    return (
        <div>
            ProductoraView
        </div>
    )
}
