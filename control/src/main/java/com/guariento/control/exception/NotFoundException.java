package com.guariento.control.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Recurso não encontrado.")
public class NotFoundException extends RuntimeException {
	private static final long serialVersionUID = -8606893020153760683L;

	private String message;
}
