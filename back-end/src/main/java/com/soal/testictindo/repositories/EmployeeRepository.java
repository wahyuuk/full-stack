package com.soal.testictindo.repositories;

import com.soal.testictindo.entities.Employee;
import com.soal.testictindo.entities.piechart.Total;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(
            value = "SELECT gender AS name, COUNT(gender) AS total FROM employee GROUP BY gender",
            nativeQuery = true
    )
    List<Total> findEmployeeGenderTotal();

    @Query(
            value = "SELECT e.name, COUNT(*) as total " +
                    "FROM employee e JOIN employee_car ec ON ec.employee_id = e.id " +
                    "GROUP BY ec.employee_id",
            nativeQuery = true
    )
    List<Total> countEmployeeCar();

    @Query(
            value = "SELECT e.name, (SELECT SUM(c.price)) AS total " +
                    "FROM employee e JOIN employee_car ec ON ec.employee_id = e.id " +
                    "JOIN car c ON c.id = ec.car_id GROUP BY e.id",
            nativeQuery = true
    )
    List<Total> countEmployeeAsset();
}
