import React, { useEffect, useState } from 'react';
import { useProductos } from '../context/productoContext';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import '../assets/css/ListaProductos.css'
import {useNavigate} from 'react-router-dom'

const EditarProducto = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const { productos, getProductos, editarProducto } = useProductos();
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        // Llamar a la función de edición del contexto
        editarProducto({ id, ...data });
        navigate('/');
        
    });

    useEffect(() => {
        // Cargar los detalles del producto al montar el componente
        getProductos();
        const producto = productos.find((producto) => producto.id === id);
        if (producto) {
            // Establecer los valores iniciales del formulario con los detalles del producto
            setValue('nombre', producto.nombre);
            setValue('precio', producto.precio);
        }
    }, [getProductos, id, productos, setValue]);

    return (
        <div>
            <div className="general">
                <h1 className='form__h1'>Editar <span className='span'>Producto</span> </h1>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form__body'>
                        <label htmlFor="nombre">Nombre</label>
                        <input className='form__input' {...register('nombre')} type="text" />
                        <label htmlFor="precio">Precio</label>
                        <input className='form__input' {...register('precio')} type="number" />
                    </div>
                 
                    <button  className='form__button'  type="submit">Guardar cambios</button>
                </form>
                <Link  className='link' to="/">Volver </Link>
            </div>

        </div>
    );
};

export default EditarProducto;
