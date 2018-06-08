package com.guariento.control.vale;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vale {
	private String id;
	private String empresaId;
	private double value;
}
