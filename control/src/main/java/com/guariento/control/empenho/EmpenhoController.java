package com.guariento.control.empenho;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guariento.control.exception.NotFoundException;
import com.guariento.control.mongo.EmpenhoMongo;

@RestController
@RequestMapping("/empenho")
public class EmpenhoController {
	@Autowired
	private EmpenhoRepository empenhoRepository;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List<Empenho>> list(@RequestParam(name="empresaId", required=false) String empresaId) {
		if(!StringUtils.isEmpty(empresaId)) {
			return new ResponseEntity<List<Empenho>>(empenhoRepository.findAllByEmpresaId(empresaId).stream().map(m -> m.toDomain()).collect(Collectors.toList()), HttpStatus.OK);
		}
		return new ResponseEntity<List<Empenho>>(empenhoRepository.findAll().stream().map(m -> m.toDomain()).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public Empenho get(@PathVariable String id) throws NotFoundException {
		Optional<EmpenhoMongo> empenho = empenhoRepository.findById(id);
		if(!empenho.isPresent()) {
			throw new NotFoundException("Empenho não encontrado");
		}
		return empenho.get().toDomain();
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Empenho> save(@RequestBody Empenho empenho) {
		return new ResponseEntity<Empenho>(empenhoRepository.save(new EmpenhoMongo(empenho)).toDomain(), HttpStatus.CREATED);
	}
}
