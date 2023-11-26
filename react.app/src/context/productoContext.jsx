import { createContext , useContext, useState , useEffect } from "react";
import {addProducto, getProductos , deleteProducto , updateProducto} from '../api/productos';


const ProductoContext = createContext();

export const useProductos = ()=>{
    const context = useContext(ProductoContext);

    if(!context){
        throw new Error (`useProductos debe de ser usado dentro de ProductosProvider`);
    }
    return context;
};

export  function ProductosProvider({children}){
    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        const obteberProductos = async ()=>{
            const res = await getProductos();
            setProductos(res.data);
            console.log(res.data);
        }
        obteberProductos();

    },[]);


    const crearProducto = async (formData)=>{
        try {
            const res = await addProducto(formData);
            setProductos([...productos ,res.data])
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }


    const editarProducto = async (formData) => {
        try {
            // Envia todos los datos del producto al backend para la edición
            const res = await updateProducto(formData);
    
            // Actualiza la lista de productos en el estado
            setProductos(productos.map(producto => (producto.id === res.data.id ? res.data : producto)));
    
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    const eliminarProducto = async(id)=>{
        try {
            const res = await deleteProducto(id);
            setProductos(productos.filter(producto=>producto.id !== id));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ProductoContext.Provider value={{
            productos,
            getProductos,
            crearProducto,
            eliminarProducto,
            editarProducto
        }}>
            {children}
        </ProductoContext.Provider>
    )
    
}
