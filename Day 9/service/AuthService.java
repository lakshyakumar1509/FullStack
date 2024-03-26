package com.java.event.service;

import com.java.event.dto.request.LoginReq;
import com.java.event.dto.response.LoginRes;
import com.java.event.dto.response.BasicRes;
import com.java.event.dto.request.PasswordReq;
import com.java.event.dto.request.RegisterReq;
import com.java.event.dto.request.PasswordPatchReq;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {
    BasicRes<LoginRes> login(LoginReq request);

    BasicRes<String> register(RegisterReq request);

    BasicRes<String> verify(String token);

    BasicRes<String> forgotPassword(PasswordReq request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    BasicRes<String> patchPassword(String token, PasswordPatchReq request) throws IllegalArgumentException, IllegalAccessException;
}
