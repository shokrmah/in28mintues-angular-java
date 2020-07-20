package com.example.rest.webservices.restfulwebservices.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.rest.webservices.restfulwebservices.controller.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	
	@GetMapping(path="/hello")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/helloBean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("error happend");
		return new HelloWorldBean("Hello World");
	}
}
