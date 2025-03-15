import React, { useState, useEffect } from 'react';
import {getMedia} from '../../services/mediaService';
import { MediaCard } from './MediaCard';

export const MediaView = () => {

    const [moduloMedia, setMedia] = useState([]);

    const listMedia = async () => {

        try {
            const{ data } = await getMedia();
            console.log(data);
            setMedia(data);
            
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listMedia();
    }, []);

    return (
        <div className='container-fluid'>
            <div className="mt-2 mb-2 row row-cols-1 row-cols-md-6 g-4">
                {
                    moduloMedia.map((Media) => {
                        return <MediaCard key={Media.id} Media={Media}/>
                    })
                }
            </div>
        </div>
    )
}


