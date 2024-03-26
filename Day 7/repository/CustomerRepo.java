package com.java.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, String> {

}
