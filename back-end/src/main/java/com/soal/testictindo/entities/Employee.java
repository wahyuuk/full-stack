package com.soal.testictindo.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "employee")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String gender;

    private String placeOfBirth;

    private Date dateOfBirth;

    private String address;

    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.PERSIST)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<EmployeeCar> employeeCars;

    public Employee() {
    }

    public Employee(Employee employee) {
        this.id = employee.getId();
        this.name = employee.getName();
        this.gender = employee.getGender();
        this.placeOfBirth = employee.getPlaceOfBirth();
        this.dateOfBirth = employee.getDateOfBirth();
        this.address = employee.getAddress();
        this.phoneNumber = employee.getPhoneNumber();
        this.company = employee.getCompany();
    }
}
