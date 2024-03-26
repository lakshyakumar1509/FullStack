package com.java.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.Event;

public interface EventRepo extends JpaRepository<Event, String> {

}
