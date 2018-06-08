package com.guariento.control.empresa;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.guariento.control.exception.NotFoundException;
import com.guariento.control.mongo.EmpresaMongo;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {
	@Autowired
	private EmpresaRepository empresaRepository;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List<Empresa>> list() {
		return new ResponseEntity<List<Empresa>>(empresaRepository.findAll().stream().map(e -> e.toDomain()).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Empresa> get(@PathVariable String id) {
		Optional<EmpresaMongo> empresa = empresaRepository.findById(id);
		if(!empresa.isPresent()) {
			throw new NotFoundException("Empresa não cadastrada!");
		}
		return new ResponseEntity<Empresa>(empresa.get().toDomain(), HttpStatus.OK);
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Empresa> save(@RequestBody Empresa empresa) {
		return new ResponseEntity<Empresa>(empresaRepository.save(new EmpresaMongo(empresa)).toDomain(), HttpStatus.CREATED);
	}
}
