package com.java.event.service;

import com.java.event.model.User;
import com.java.event.dto.request.PasswordPatchReq;

public interface UserService {
    void patchPassword(PasswordPatchReq request, User user) throws IllegalArgumentException, IllegalAccessException;
}
