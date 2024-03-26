package com.java.event.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.ResetPasswordToken;

public interface ResetPasswordTokenRepo extends JpaRepository<ResetPasswordToken, String> {
    List<ResetPasswordToken> findAllByUser_userIdAndRevokedFalseAndExpiredFalse(String id);

    Optional<ResetPasswordToken> findByResetToken(String token);
}
