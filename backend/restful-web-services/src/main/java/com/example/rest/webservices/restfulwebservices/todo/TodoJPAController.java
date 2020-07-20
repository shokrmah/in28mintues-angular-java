package com.example.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJPAController {
	 
	
	@Autowired
	private TodoHardCodedService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaService;
	
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaService.findByUsername(username);
//		return todoService.findAll();
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username, @PathVariable long id){
		return todoJpaService.findById(id).get();
//		return todoService.findById(id);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public  ResponseEntity<Void> createTodo(@PathVariable String username,
			@RequestBody Todo todo){
		todo.setId((long)-1);
		todo.setUsername(username);
		Todo insertedTodo= todoJpaService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(insertedTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public  ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
			@RequestBody Todo todo){
		Todo updatedTodo= todoJpaService.save(todo);
		return new ResponseEntity<Todo>(updatedTodo,HttpStatus.OK);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		//Todo todo = todoService.deleteById(id);
		todoJpaService.deleteById(id);
		return ResponseEntity.notFound().build();
	}
	
		
	
}
