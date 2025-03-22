// import React, { useState } from 'react';

const DirectorView = () => {
  // const [formData, setFormData] = useState({
  //   serial: '',
  //   titulo: '',
  //   sinopsis: '',
  //   fechaEstreno: '',
  //   genero: '',
  //   director: '',
  //   productora: '',
  //   tipo: ''
  }; //)
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Agregar Pelicula</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row mb-3">
//           <div className="col-12 col-md-6">
//             <label htmlFor="serial" className="form-label">Serial:</label>
//             <input
//               type="text"
//               id="serial"
//               name="serial"
//               className="form-control"
//               value={formData.serial}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="titulo" className="form-label">Título:</label>
//             <input
//               type="text"
//               id="titulo"
//               name="titulo"
//               className="form-control"
//               value={formData.titulo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12">
//             <label htmlFor="sinopsis" className="form-label">Sinopsis:</label>
//             <textarea
//               id="sinopsis"
//               name="sinopsis"
//               className="form-control"
//               value={formData.sinopsis}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12 col-md-6">
//             <label htmlFor="fechaEstreno" className="form-label">Fecha de estreno:</label>
//             <input
//               type="date"
//               id="fechaEstreno"
//               name="fechaEstreno"
//               className="form-control"
//               value={formData.fechaEstreno}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="genero" className="form-label">Género:</label>
//             <input
//               type="text"
//               id="genero"
//               name="genero"
//               className="form-control"
//               value={formData.genero}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12 col-md-6">
//             <label htmlFor="director" className="form-label">Director:</label>
//             <input
//               type="text"
//               id="director"
//               name="director"
//               className="form-control"
//               value={formData.director}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="productora" className="form-label">Productora:</label>
//             <input
//               type="text"
//               id="productora"
//               name="productora"
//               className="form-control"
//               value={formData.productora}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12 col-md-6">
//             <label htmlFor="tipo" className="form-label">Tipo:</label>
//             <input
//               type="text"
//               id="tipo"
//               name="tipo"
//               className="form-control"
//               value={formData.tipo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-auto">
//               <button type="submit" className="btn btn-primary">Enviar</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );

export default DirectorView;