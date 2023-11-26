package com.spring.boot.react.app.Repository;

import com.spring.boot.react.app.Entity.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoRepo extends CrudRepository<Producto , Integer> {
}
