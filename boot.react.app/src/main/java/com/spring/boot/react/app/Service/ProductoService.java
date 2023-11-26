package com.spring.boot.react.app.Service;

import com.spring.boot.react.app.Entity.Producto;

import java.util.List;

public interface ProductoService {

    public List<Producto>obtenerProducto();

    public Producto crearProducto(Producto producto);

    public Producto editarProducto(Producto producto);

    public Producto buscarProducto(int id);


    public void eliminarProducto(int id);

}
