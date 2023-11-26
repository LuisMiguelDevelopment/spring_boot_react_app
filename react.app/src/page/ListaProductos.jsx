import React, { useEffect, useState } from 'react';
import { useProductos } from '../context/productoContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../assets/css/ListaProductos.css'
import { MdModeEdit ,MdDelete} from "react-icons/md";


const ListaProductos = () => {
    const { productos, getProductos, crearProducto, eliminarProducto } = useProductos();
    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit((data) => {
        crearProducto(data)
    })


    useEffect(() => {
        getProductos();
    }, [])

    const handleEliminar = (id) => {
        eliminarProducto(id)
    }

    return (
        <>
            <div className="general">
                <form className='form' action="" onSubmit={onSubmit}>
                    <div className="form__header">
                        <h1 className='form__h1'>Agregar <span className='span'>productos</span> </h1>
                    </div>
                    <div className="form__body">
                        <label htmlFor="">Nombre</label>
                        <input className='form__input' {...register("nombre")} type="text" />
                        <label htmlFor="">Precio</label>
                        <input className='form__input'  {...register("precio")} type="number" />
                    </div>
                    <button className='form__button'>Agregar producto</button>
                </form>


                <table className='table' border={1}>
                    <thead className='thead'>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </thead>
                    {productos.map((producto) => (
                        <tbody key={producto.id}>
                            <tr>
                                <th>{producto.id}</th>
                                <th>{producto.nombre}</th>
                                <th>{producto.precio}</th>
                                <th><button className='delete__button' onClick={() => handleEliminar(producto.id)}><MdDelete/></button></th>
                                <th><Link to={`/editar/${producto.id}`}><MdModeEdit/></Link></th>
                                
                                
                            </tr>
                        </tbody>

                    ))}
                </table>
            </div>


        </>
    )
}

export default ListaProductos;
