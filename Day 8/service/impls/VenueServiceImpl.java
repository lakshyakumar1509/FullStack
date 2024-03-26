package com.java.event.service.impls;

import java.util.List;

import org.springframework.stereotype.Service;

import com.java.event.model.Venue;
import com.java.event.util.Patcher;
import com.java.event.repository.VenueRepo;
import com.java.event.service.VenueService;
import com.java.event.dto.request.VenueReq;
import com.java.event.dto.response.BasicRes;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class VenueServiceImpl implements VenueService {
    private final VenueRepo venueRepo;

    @Override
    public BasicRes<String> add(VenueReq request) {
        Venue venue = Venue.builder()
                .venueName(request.getVenueName())
                .venueLocation(request.getVenueLocation())
                .charges(request.getVenueCharge())
                .maxCapacity(request.getMaxCapacity())
                .suitableFor(request.getSuitableFor())
                .build();

        venueRepo.save(venue);

        return BasicRes.<String>builder()
                .message("Venue added successfully")
                .build();
    }

    @Override
    public BasicRes<List<Venue>> all() {
        List<Venue> venues = venueRepo.findAll();

        return BasicRes.<List<Venue>>builder()
                .message("All venues data retrieved successfully")
                .data(venues)
                .build();
    }

    @Override
    public BasicRes<Venue> get(String id) {
        var venue = venueRepo.findById(id).orElse(null);

        return BasicRes.<Venue>builder()
                .message("Venue data retrieed successfully")
                .data(venue)
                .build();
    }

    @Override
    public BasicRes<String> patch(Venue newVenue) throws IllegalArgumentException, IllegalAccessException {
        Venue oldVenue = venueRepo.findById(newVenue.getVenueId()).orElseThrow();
        oldVenue = Patcher.patcher(oldVenue, newVenue);

        venueRepo.save(oldVenue);
        return BasicRes.<String>builder()
                .message("venue details updated successfullt")
                .data("true")
                .build();
    }
}
