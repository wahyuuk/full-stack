package com.soal.testictindo.services.message;

import org.springframework.web.server.ResponseStatusException;

public interface ThrowMessage {

    ResponseStatusException dataNotFound();
    ResponseStatusException datAlreadyExist();
}
