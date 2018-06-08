package com.guariento.control.mongo;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.guariento.control.empenho.Empenho;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="empenho")
public class EmpenhoMongo {
	@Id
	private String id;
	private String empresaId;
	private double value;
	private LocalDate date;
	
	public EmpenhoMongo(Empenho empenho) {
		setId(empenho.getId());
		setEmpresaId(empenho.getEmpresaId());
		setValue(empenho.getValue());
		setDate(empenho.getDate());
	}

	public Empenho toDomain() {
		return new Empenho(id, empresaId, value, date);
	}
}
