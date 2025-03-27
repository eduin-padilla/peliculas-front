import React, {useState, useEffect} from 'react';
import { getDirector } from '../../services/directorService';
import { getGenero } from '../../services/generoService';
import { getProductora } from '../../services/productoraService';
import { getTipo } from '../../services/tipoService';
import { createMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';


export const MediaNew = ({ handleOpenModal, listMedia }) => {

    const [director, setDirector]= useState([]);
    const [genero, setGenero] = useState([]);
    const [productora, setProductora] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [valoresForm, setValoresForm] =useState([]);
    const {Serial='',
        Titulo='',
        Sinopsis='',
        Url='',
        Imagen='',
        FechaEstreno='',
        Genero='',
        Director='',
        Productora='',
        Tipo=''
    } = valoresForm

    const listDirector = async () =>{
        try{
            const { data } = await getDirector();
            setDirector(data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listDirector();
    }, []);

    const listGenero = async () => {
        try{
            const { data } = await getGenero();
            setGenero(data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listGenero();
    }, []);

    const listProductora = async () => {
        try{
            const { data } = await getProductora();
            setProductora(data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listProductora();
    }, []);

    const listTipo = async () => {
        try{
            const { data } = await getTipo();
            setTipo(data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listTipo();
    }, []);


    const handleOnChange = ({ target })  =>{
        const {name, value } = target ;
        setValoresForm({ ...valoresForm, [name]: value });
    }


    const handleOnSubmit  = async(e) => {
        e.preventDefault();
        const media = {
            Serial,Titulo,Sinopsis,Url,Imagen,FechaEstreno,Genero,Director,Productora,Tipo,
            director: {_id: director},
            genero:{_id: genero},
            productora:{_id: productora},
            tipo:{_id: tipo},
        } 
        console.log(media);

        try{
            Swal.fire({
                allowOutsideClick: false,
                text: "cargando...."
            });
            Swal.showLoading();
            const { data } = await createMedia( media );
            handleOpenModal();
            listMedia();
            Swal.close();
        }catch(error){
            console.log(error);
            Swal.close();
        }

        

    }


    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebear-header'>
                            <h3>Nueva Pelicula</h3>
                            <i className="fa-solid fa-xmark" onClick={ handleOpenModal }></i>
                        </div >
                        <hr className='hr'/>
                    </div>
                </div>
                
                <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Serial</label>
                            <input type="num" name='serial'
                            value={Serial}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>
        
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input type="text" name='titulo'
                            value={Titulo}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>

                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Url</label>
                            <input type="url" name='url'
                            value={Url}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>
        
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">imagen</label>
                            <input type="text" name='imagen'
                            value={Imagen}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>
        
                </div>

                <div>
                <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Sinopsis</label>
                            <textarea type="text" name='sinopsis'
                            value={Sinopsis}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>
                </div>
        
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Fecha De Estreno</label>
                            <input type="date" name='Fecha De Estreno'
                            value={FechaEstreno}
                            onChange={e => handleOnChange(e)}
                            required
                            className='form-control' />
                        </div>
                    </div>
                    
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Genero</label>
                            <select className='form-select'
                            required
                            name='genero'
                            value={Genero}
                            onChange={e => handleOnChange(e)}>
                            <option value="">--SELECCIONE--</option>
                            {genero.map((g) => (
                                <option key={g._id} value={g._id}>{g.nombre}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>
        
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Director</label>
                            <select className='form-select'
                            required
                            name='director'
                            value={Director}
                            onChange={e => handleOnChange(e)}>
                            <option value="">--SELECCIONE--</option>
                            {director.map((g) => (
                                <option key={g._id} value={g._id}>{g.nombre}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Productora</label>
                            <select className='form-select'
                            required
                            name='productora'
                            value={Productora}
                            onChange={e => handleOnChange(e)}>
                            <option value="">--SELECCIONE--</option>
                            {productora.map((g) => (
                                <option key={g._id} value={g._id}>{g.nombre}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Tipo</label>
                            <select className='form-select'
                            required
                            name='tipo'
                            value={Tipo}
                            onChange={e => handleOnChange(e)}>
                            <option value="">--SELECCIONE--</option>
                            {tipo.map((g) => (
                                <option key={g._id} value={g._id}>{g.nombre}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <button className="btn btn-primary">Guardar</button>
                    </div>
        
                </div>
                </form>
            </div>
        </div>
    )
}


