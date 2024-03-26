package com.java.event.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.event.model.User;
import com.java.event.util.Patcher;
import com.java.event.repository.UserRepo;
import com.java.event.service.UserService;
import com.java.event.dto.request.PasswordPatchReq;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public final class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void patchPassword(PasswordPatchReq request, User user) throws IllegalArgumentException, IllegalAccessException {
        User updatedUser = User.builder()
                .verified(user.isVerified())
                .password(passwordEncoder.encode(request.getNewPassword()))
                .build();
        user = Patcher.patcher(user, updatedUser);

        userRepo.save(user);
    }
}
