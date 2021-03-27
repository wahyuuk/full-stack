package com.soal.testictindo.controllers;

import com.soal.testictindo.entities.Car;
import com.soal.testictindo.entities.Company;
import com.soal.testictindo.entities.ResponseData;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public ResponseEntity<List<Car>> getAll() {
        return new ResponseEntity<>(carService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(carService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseData<Car> create(@RequestBody Car car) {
        Car response = carService.create(car);
        return new ResponseData<>(response, "Car created");
    }

    @PutMapping("/{id}")
    public ResponseData<Car> update(@PathVariable("id") Long id, @RequestBody Car car) {
        return new ResponseData<>(carService.update(id, car), "Car updated");
    }

    @DeleteMapping("/{id}")
    public ResponseData<Car> delete(@PathVariable("id") Long id) {
        return new ResponseData<>(carService.delete(id), "Car deleted");
    }

    @GetMapping("/count-brand")
    public ResponseEntity<List<Total>> countAsset() {
        return new ResponseEntity<>(carService.countCarOfBrand(), HttpStatus.OK);
    }
}
