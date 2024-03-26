package com.java.event.config;

import org.springframework.stereotype.Service;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.event.model.User;
import com.java.event.enumerated.Role;
import com.java.event.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepo.count() > 0)
            return;

        var admin = User.builder()
                .name("admin")
                .verified(true)
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("admin@123"))
                .role(Role.ADMIN)
                .build();
        userRepo.save(admin);
    }
}
