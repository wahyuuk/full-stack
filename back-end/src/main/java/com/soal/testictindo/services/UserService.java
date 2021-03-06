package com.soal.testictindo.services;

import com.soal.testictindo.entities.User;
import com.soal.testictindo.repositories.UserRepository;
import com.soal.testictindo.services.message.ThrowErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService extends ThrowErrorMessage {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registration(User user) {
        if (user.getId() != null) {
            throw datAlreadyExist();
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public void login(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);

        if(!user.isPresent()) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Username or not registered");
        }

        try {
            if (!passwordEncoder.matches(password, user.get().getPassword())) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Username or password incorect");
            }

            UsernamePasswordAuthenticationToken authReq =
                    new UsernamePasswordAuthenticationToken(username, password);

            SecurityContextHolder.getContext().setAuthentication(authReq);
        } catch (AuthenticationException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public String dataNotFoundMessage() {
        return "User not found";
    }

    @Override
    public String dataAlreadyExistMessage() {
        return "User already exist";
    }
}
