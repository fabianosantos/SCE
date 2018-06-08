package com.guariento.control.empenho;

import java.util.Collection;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.guariento.control.mongo.EmpenhoMongo;

@Repository
public interface EmpenhoRepository extends MongoRepository<EmpenhoMongo, String> {
	Collection<EmpenhoMongo> findAllByEmpresaId(String empresaId);
}
