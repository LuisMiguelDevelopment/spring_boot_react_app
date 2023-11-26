package com.spring.boot.react.app.Controller;

import com.spring.boot.react.app.Entity.Producto;
import com.spring.boot.react.app.Service.PersonaServiceMPL.PSIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("CRUDRepo")
public class Controlador {

    @Autowired
    private PSIMPL impl;

    //GET CONSULTAR LOS PRODUCTOS
    @GetMapping
    @RequestMapping(value = "ConsultarProductos", method = RequestMethod.GET)
    public ResponseEntity<?>ConsultarProductos(){
        List<Producto> listaProducto = this.impl.obtenerProducto();
        return  ResponseEntity.ok(listaProducto);
    }
    //POST CREAR LOS PRODUCTOS
    @PostMapping
    @RequestMapping(value = "CrearProductos", method = RequestMethod.POST)
    public ResponseEntity<?>CrearProductos(@RequestBody Producto producto){
        Producto ProductoCreado = this.impl.crearProducto(producto);
        return  ResponseEntity.status(HttpStatus.CREATED).body(ProductoCreado);
    }


    @PutMapping
    @RequestMapping(value = "EditarProductos", method = RequestMethod.PUT)
    public ResponseEntity<?>EditarProductos(@RequestBody Producto producto){
        Producto ProductoEditado = this.impl.editarProducto(producto);
        return  ResponseEntity.status(HttpStatus.CREATED).body(ProductoEditado);
    }


    @GetMapping
    @RequestMapping(value = "BuscarProducto/{id}", method = RequestMethod.GET)
    public ResponseEntity<?>BuscarProducto(@PathVariable int id){
        Producto producto = this.impl.buscarProducto(id);
        return  ResponseEntity.ok(producto);
    }


    @DeleteMapping
    @RequestMapping(value = "EliminarProducto/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?>EliminarProducto(@PathVariable int id){
       this.impl.eliminarProducto(id);
        return  ResponseEntity.ok().build();
    }




}
