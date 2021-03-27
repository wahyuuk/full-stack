package com.soal.testictindo.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

/**
 *
 * @param <E> type of response
 */

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseData <E> {
    E data;
    String message;

    public ResponseData(String message) {
        this.message = message;
    }

    public ResponseData(E data) {
        this.data = data;
    }

    public ResponseData(E data, String message) {
        this.data = data;
        this.message = message;
    }
}
