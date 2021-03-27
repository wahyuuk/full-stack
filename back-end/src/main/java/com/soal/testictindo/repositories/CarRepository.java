package com.soal.testictindo.repositories;

import com.soal.testictindo.entities.Car;
import com.soal.testictindo.entities.piechart.Total;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    @Query(
            value = "SELECT brand AS name, COUNT(brand) AS total FROM car GROUP BY brand",
            nativeQuery = true
    )
    List<Total> countCarOfBrand();
}
