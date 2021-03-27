package com.soal.testictindo.controllers;

import com.soal.testictindo.entities.ResponseData;
import com.soal.testictindo.entities.User;
import com.soal.testictindo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("login")
    public ResponseData<User> login(@RequestBody User user) {
        userService.login(user.getUsername(), user.getPassword());

        return new ResponseData<>("Login success");
    }

    @PostMapping("register")
    public ResponseData<User> register(@RequestBody User user) {
        userService.registration(user);

        return new ResponseData<>(user, "Register success");
    }
}
