package com.soal.testictindo.controllers;

import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.ResponseData;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(employeeService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseData<Employee> create(@RequestBody Employee employee) {
        Employee response = employeeService.create(employee);
        return new ResponseData<>(response, "Employee created");
    }
    @PutMapping("/{id}")
    public ResponseData<Employee> update(@PathVariable("id") Long id, @RequestBody Employee employee) {
        return new ResponseData<>(employeeService.update(id, employee), "Employee updated");
    }

    @DeleteMapping("/{id}")
    public ResponseData<Employee> delete(@PathVariable("id") Long id) {
        return new ResponseData<>(employeeService.delete(id), "Employee deleted");
    }

    @GetMapping("/gender-total")
    public ResponseEntity<List<Total>> employeeGenderTotal() {
        return new ResponseEntity<>(employeeService.employeeGenderTotal(), HttpStatus.OK);
    }

    @GetMapping("/count-car")
    public ResponseEntity<List<Total>> countCar() {
        return new ResponseEntity<>(employeeService.countEmployeeCar(), HttpStatus.OK);
    }

    @GetMapping("/count-asset")
    public ResponseEntity<List<Total>> countAsset() {
        return new ResponseEntity<>(employeeService.countEmployeeAsset(), HttpStatus.OK);
    }
}
