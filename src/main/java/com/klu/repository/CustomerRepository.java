package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klu.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String>
{

}
