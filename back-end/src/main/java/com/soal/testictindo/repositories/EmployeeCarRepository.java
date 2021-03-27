package com.soal.testictindo.repositories;

import com.soal.testictindo.entities.EmployeeCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeCarRepository extends JpaRepository<EmployeeCar, Long> {
    List<EmployeeCar> findByEmployee_Id(Long id);
}
