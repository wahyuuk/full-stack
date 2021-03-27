package com.soal.testictindo.services;

import com.soal.testictindo.entities.Company;
import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.repositories.CompanyRepository;
import com.soal.testictindo.services.message.ThrowErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService extends ThrowErrorMessage {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    public Company findById(Long id) {
        Optional<Company> company = companyRepository.findById(id);
        if (!company.isPresent()) {
            throw dataNotFound();
        }

        return company.get();
    }

    public Company create(Company company) {
        if (company.getId() != null) {
            throw dataNotFound();
        }

        return companyRepository.save(company);
    }

    public Company update(Long id, Company company) {
        Company data = findById(id);

        company.setId(id);

        return companyRepository.save(company);
    }

    public Company delete(Long id) {
        Company company = findById(id);

        companyRepository.delete(company);

        return company;
    }

    public List<Total> countCompanyEmployee() {
        return companyRepository.countCompanyEmployee();
    }

    @Override
    public String dataNotFoundMessage() {
        return "Comapany not found";
    }

    @Override
    public String dataAlreadyExistMessage() {
        return "Company already exist";
    }
}
