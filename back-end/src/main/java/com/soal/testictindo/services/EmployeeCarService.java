package com.soal.testictindo.services;

import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.EmployeeCar;
import com.soal.testictindo.repositories.EmployeeCarRepository;
import com.soal.testictindo.repositories.EmployeeRepository;
import com.soal.testictindo.services.message.ThrowErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeCarService extends ThrowErrorMessage {

    @Autowired
    private EmployeeCarRepository employeeCarRepository;

    public List<EmployeeCar> getAll(Long id) {
        return employeeCarRepository.findByEmployee_Id(id);
    }

    public EmployeeCar findById(Long id) {
        Optional<EmployeeCar> employeeCar = employeeCarRepository.findById(id);
        if (!employeeCar.isPresent()) {
            throw dataNotFound();
        }

        return employeeCar.get();
    }

    public EmployeeCar create(Long employeeId, EmployeeCar employeeCar) {
        if (employeeCar.getId() != null) {
            throw dataNotFound();
        }

        Employee employee = new Employee();
        employee.setId(employeeId);
        employeeCar.setEmployee(employee);

        return employeeCarRepository.save(employeeCar);
    }

    public EmployeeCar update(Long id, EmployeeCar employeeCar) {
        EmployeeCar data = findById(id);

        data.setCar(employeeCar.getCar());

        return employeeCarRepository.save(data);
    }

    public EmployeeCar delete(Long id) {
        EmployeeCar employeeCar = findById(id);

        employeeCarRepository.delete(employeeCar);

        return employeeCar;
    }

    @Override
    public String dataNotFoundMessage() {
        return "Employee car not found";
    }

    @Override
    public String dataAlreadyExistMessage() {
        return "Employee car already exist";
    }
}
