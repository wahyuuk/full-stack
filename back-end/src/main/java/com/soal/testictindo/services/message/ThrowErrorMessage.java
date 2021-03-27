package com.soal.testictindo.services.message;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public abstract class ThrowErrorMessage implements ThrowMessage, ErrorMessage {

    @Override
    public ResponseStatusException dataNotFound() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, dataNotFoundMessage());
    }

    @Override
    public ResponseStatusException datAlreadyExist() {
        return new ResponseStatusException(HttpStatus.CONFLICT, dataAlreadyExistMessage());
    }
}
