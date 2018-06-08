package com.guariento.control.empenho;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Empenho {
	private String id;
	private String empresaId;
	private double value;
	@JsonFormat(pattern = "dd/MM/yyyy")	private LocalDate date;
}
