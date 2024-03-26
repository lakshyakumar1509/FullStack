package com.java.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, String> {

}
