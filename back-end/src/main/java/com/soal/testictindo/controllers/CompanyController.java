package com.soal.testictindo.controllers;

import com.soal.testictindo.entities.Company;
import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.ResponseData;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public ResponseEntity<List<Company>> getAll() {
        return new ResponseEntity<>(companyService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(companyService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseData<Company> create(@RequestBody Company company) {
        Company response = companyService.create(company);
        return new ResponseData<>(response, "Company created");
    }

    @PutMapping("/{id}")
    public ResponseData<Company> update(@PathVariable("id") Long id, @RequestBody Company company) {
        return new ResponseData<>(companyService.update(id, company), "Company updated");
    }

    @DeleteMapping("/{id}")
    public ResponseData<Company> delete(@PathVariable("id") Long id) {
        return new ResponseData<>(companyService.delete(id), "Company deleted");
    }

    @GetMapping("/count-company")
    public ResponseEntity<List<Total>> countCompany() {
        return new ResponseEntity<>(companyService.countCompanyEmployee(), HttpStatus.OK);
    }
}
