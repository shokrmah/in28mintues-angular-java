package com.example.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<Todo>();

	private static long idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "mahmoud", "Learn", new Date(), false));
		todos.add(new Todo(++idCounter, "mahmoud2", "Learn2", new Date(), false));
		todos.add(new Todo(++idCounter, "mahmoud3", "Learn3", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		todos.remove(todo);
		return todo;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

}
