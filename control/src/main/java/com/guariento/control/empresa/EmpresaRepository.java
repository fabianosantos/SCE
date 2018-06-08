package com.guariento.control.empresa;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.guariento.control.mongo.EmpresaMongo;

@Repository
public interface EmpresaRepository extends MongoRepository<EmpresaMongo, String> {
}
