package com.java.event.controller;

import org.springframework.web.bind.annotation.RestController;

import com.java.event.service.AuthService;
import com.java.event.dto.request.LoginReq;
import com.java.event.dto.response.BasicRes;
import com.java.event.dto.response.LoginRes;
import com.java.event.dto.request.RegisterReq;
import com.java.event.dto.request.PasswordReq;
import com.java.event.dto.request.PasswordPatchReq;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequiredArgsConstructor
@RequestMapping("/event/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReq request) {
        BasicRes<LoginRes> response = new BasicRes<>();

        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setData(LoginRes.builder()
                    .message("Token generation failed!")
                    .accessToken("")
                    .build());

            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> register(@RequestBody RegisterReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/verify-account")
    public ResponseEntity<?> confirmAccount(@RequestParam String token) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.verify(token);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody PasswordReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.forgotPassword(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/reset-password")
    public ResponseEntity<?> patchPassword(@RequestParam String token, @RequestBody PasswordPatchReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.patchPassword(token, request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}