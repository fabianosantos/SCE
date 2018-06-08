package com.guariento.control.mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.guariento.control.empresa.Empresa;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="empresa")
public class EmpresaMongo {
	@Id String id;
	String name;
	
	public EmpresaMongo(Empresa empresa) {
		setId(empresa.getId());
		setName(empresa.getName());
	}
	
	public Empresa toDomain() {
		return new Empresa(id, name);
	}
}
