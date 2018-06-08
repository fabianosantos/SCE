package com.guariento.control.vale;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guariento.control.exception.NotFoundException;
import com.guariento.control.mongo.ValeMongo;

@RestController
@RequestMapping("/vale")
public class ValeController {
	@Autowired
	private ValeRepository valeRepository;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List<Vale>> list(@RequestParam(name="empresaId", required=false) String empresaId) {
		if(empresaId != null) {
			return new ResponseEntity<List<Vale>>(valeRepository.findAllByEmpresaId(empresaId).stream().map(v -> v.toDomain()).collect(Collectors.toList()), HttpStatus.OK);
		}
		return new ResponseEntity<List<Vale>>(valeRepository.findAll().stream().map(v -> v.toDomain()).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Vale> get(@PathVariable String id) {
		Optional<ValeMongo> vale = valeRepository.findById(id);
		if(!vale.isPresent()) {
			throw new NotFoundException("Vale não encontrado!");
		}
		return new ResponseEntity<Vale>(vale.get().toDomain(), HttpStatus.OK);
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Vale> save(@RequestBody Vale vale) {
		return new ResponseEntity<Vale>(valeRepository.save(new ValeMongo(vale)).toDomain(), HttpStatus.CREATED);
	}
}
