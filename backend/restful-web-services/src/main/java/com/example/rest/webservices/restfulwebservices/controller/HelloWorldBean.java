package com.example.rest.webservices.restfulwebservices.controller;

public class HelloWorldBean {

	
	
	private String message;

	public HelloWorldBean(String message) {
		super();
		// TODO Auto-generated constructor stub
		this.message = message;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	@Override
	public String toString() {
		return "HelloWorldBean [getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

	
}
