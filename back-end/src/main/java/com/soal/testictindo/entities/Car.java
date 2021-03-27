package com.soal.testictindo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;

@Entity
@Table(name = "car")
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String brand;

    private BigDecimal price;

    @JsonIgnore
    @OneToMany(mappedBy = "car")
    private Collection<EmployeeCar> employeeCars;

    public Car() {
    }
}
