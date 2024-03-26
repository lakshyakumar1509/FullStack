package com.java.event.service;

import com.java.event.util.MailBody;

public interface MailService {
    void sendSimpleMail(MailBody details);
}
