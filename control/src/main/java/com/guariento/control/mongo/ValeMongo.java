package com.guariento.control.mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.guariento.control.vale.Vale;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="vale")
public class ValeMongo {
	@Id private String id;
	private String empresaId;
	private double value;
	
	public ValeMongo(Vale vale) {
		setId(vale.getId());
		setEmpresaId(vale.getEmpresaId());
		setValue(vale.getValue());
	}
	
	public Vale toDomain() {
		return new Vale(id, empresaId, value);
	}
}
