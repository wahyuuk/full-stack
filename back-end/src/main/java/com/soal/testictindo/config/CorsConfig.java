package com.soal.testictindo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    private final String[] origins
            = {
            "http://localhost:4200",
    };

    private final String[] methods
            = {
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "HEAD"
    };

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(origins)
                .allowedMethods(methods)
                .allowCredentials(true);
    }
}
