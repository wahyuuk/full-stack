package com.soal.testictindo.controllers;

import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.EmployeeCar;
import com.soal.testictindo.entities.ResponseData;
import com.soal.testictindo.services.EmployeeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employee-car")
public class EmployeeCarController {

    @Autowired
    private EmployeeCarService employeeCarService;

    @GetMapping("/{employeeId}")
    public ResponseEntity<List<EmployeeCar>> getAll(@PathVariable("employeeId") Long id) {
        return new ResponseEntity<>(employeeCarService.getAll(id), HttpStatus.OK);
    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<EmployeeCar> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(employeeCarService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/{employeeId}")
    public ResponseData<EmployeeCar> create(@PathVariable("employeeId") Long employeeId,
                                            @RequestBody EmployeeCar employeeCar) {
        EmployeeCar response = employeeCarService.create(employeeId, employeeCar);
        return new ResponseData<>(response, "Employee car created");
    }
    @PutMapping("/{id}")
    public ResponseData<EmployeeCar> update(@PathVariable("id") Long id, @RequestBody EmployeeCar employeeCar) {
        return new ResponseData<>(employeeCarService.update(id, employeeCar), "Employee car updated");
    }

    @DeleteMapping("/{id}")
    public ResponseData<EmployeeCar> delete(@PathVariable("id") Long id) {
        return new ResponseData<>(employeeCarService.delete(id), "Employee car deleted");
    }
}
