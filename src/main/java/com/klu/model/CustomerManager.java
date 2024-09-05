package com.klu.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.klu.entity.Customer;
import com.klu.repository.CustomerRepository;

@Service
public class CustomerManager {
	@Autowired
	CustomerRepository cr;
	public String saveData(Customer c)
	{
		cr.save(c);
		//save operation can used to insert the values in the Course table
		return "Data Inserted Successfully";
	}
	
	public String loginData(Customer c)
	{
		
		//save operation can used to insert the values in the Course table
		return "Login successfully";
	}
	//by creating object it allocates the size for the class
	  
	    @Autowired
		JavaMailSender mailSender;
	    public String sendEmail(String senderEmail,String toEmail,String subject,String msg)
	    {
	    	try
	    	{
	    		SimpleMailMessage mailMessage= new SimpleMailMessage();
	        	mailMessage.setFrom(senderEmail);
	        	mailMessage.setTo(toEmail);
	        	mailMessage.setSubject(subject);
	        	mailMessage.setText(msg);
	        	
	        	mailSender.send(mailMessage);
	        	return "Email Sent Successfully";
	    	}
	    	catch(Exception e)
	    	{
	    		return e.getMessage();
	    	}
	    
	    }
}