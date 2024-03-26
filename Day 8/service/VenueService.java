package com.java.event.service;

import java.util.List;

import com.java.event.model.Venue;
import com.java.event.dto.request.VenueReq;
import com.java.event.dto.response.BasicRes;

public interface VenueService {
    BasicRes<String> add(VenueReq request);

    BasicRes<List<Venue>> all();

    BasicRes<Venue> get(String id);

    BasicRes<String> patch(Venue request) throws IllegalArgumentException, IllegalAccessException;
}
