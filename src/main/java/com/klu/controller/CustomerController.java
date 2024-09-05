package com.klu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.entity.Customer;
import com.klu.model.CustomerManager;


@RestController
@RequestMapping("/customer")
public class CustomerController 
{

	// no need initialize object m=new CourseManager
    @Autowired
	CustomerManager m;
    
	// @PostMapping for insertion 
    // @RequestBody : it will take the format in json and converts into java object
    @PostMapping("/register")
    public String save(@RequestBody Customer c)
    {
     return  m.saveData(c);	
    }
    
    @GetMapping("/send")
	public String send()
	{
		return m.sendEmail("21000030731cseh@gmail.com","yaswanthichyaswanthi@gmail.com", "Testing","This is a test email");
	}
}
