package com.guariento.control.vale;

import java.util.Collection;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.guariento.control.mongo.ValeMongo;

@Repository
public interface ValeRepository extends MongoRepository<ValeMongo, String> {
	Collection<ValeMongo> findAllByEmpresaId(String empresaId);
}
