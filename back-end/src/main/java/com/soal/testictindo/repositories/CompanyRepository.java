package com.soal.testictindo.repositories;

import com.soal.testictindo.entities.Company;
import com.soal.testictindo.entities.piechart.Total;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query(
            value = "SELECT c.name, COUNT(e.company_id) AS total " +
                    "FROM employee e JOIN company c ON c.id = e.company_id GROUP BY c.name",
            nativeQuery = true
    )
    List<Total> countCompanyEmployee();
}
