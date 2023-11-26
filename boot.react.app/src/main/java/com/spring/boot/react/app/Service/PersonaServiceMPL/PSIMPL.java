package com.spring.boot.react.app.Service.PersonaServiceMPL;


import com.spring.boot.react.app.Entity.Producto;
import com.spring.boot.react.app.Repository.ProductoRepo;
import com.spring.boot.react.app.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PSIMPL implements ProductoService {
    @Autowired
    private ProductoRepo repo;
    @Override
    public List<Producto> obtenerProducto() {
        return (List<Producto>) this.repo.findAll();
    }

    @Override
    public Producto crearProducto(Producto producto) {
        producto.setNombre(producto.getNombre());
        return this.repo.save(producto);
    }

    @Override
    public Producto editarProducto(Producto producto) {
        return this.repo.save(producto);
    }

    @Override
    public Producto buscarProducto(int id) {
        return this.repo.findById(id).get();
    }

    @Override
    public void eliminarProducto(int id) {
        this.repo.deleteById(id);
    }
}
