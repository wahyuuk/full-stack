package com.soal.testictindo.services;

import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.repositories.EmployeeRepository;
import com.soal.testictindo.services.message.ThrowErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService extends ThrowErrorMessage {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if (!employee.isPresent()) {
            throw dataNotFound();
        }

        return employee.get();
    }

    public Employee create(Employee employee) {
        if (employee.getId() != null) {
            throw dataNotFound();
        }

        return employeeRepository.save(employee);
    }

    public Employee update(Long id, Employee employee) {
        Employee data = findById(id);

        employee.setId(id);

        return employeeRepository.save(employee);
    }

    public Employee delete(Long id) {
        Employee employee = findById(id);

        employeeRepository.delete(employee);

        return employee;
    }

    public List<Total> employeeGenderTotal() {
        return employeeRepository.findEmployeeGenderTotal();
    }

    public List<Total> countEmployeeCar() {
        return employeeRepository.countEmployeeCar();
    }

    public List<Total> countEmployeeAsset() {
        return employeeRepository.countEmployeeAsset();
    }

    @Override
    public String dataNotFoundMessage() {
        return "Employee not found";
    }

    @Override
    public String dataAlreadyExistMessage() {
        return "Employee already exist";
    }
}
