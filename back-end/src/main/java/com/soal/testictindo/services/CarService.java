package com.soal.testictindo.services;

import com.soal.testictindo.entities.Car;
import com.soal.testictindo.entities.Company;
import com.soal.testictindo.entities.piechart.Total;
import com.soal.testictindo.repositories.CarRepository;
import com.soal.testictindo.services.message.ThrowErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService extends ThrowErrorMessage {

    @Autowired
    private CarRepository carRepository;

    public List<Car> findAll() {
        return carRepository.findAll();
    }

    public Car findById(Long id) {
        Optional<Car> car = carRepository.findById(id);
        if (!car.isPresent()) {
            throw dataNotFound();
        }

        return car.get();
    }

    public Car create(Car car) {
        if (car.getId() != null) {
            throw dataNotFound();
        }

        return carRepository.save(car);
    }

    public Car update(Long id, Car car) {
        Car data = findById(id);

        car.setId(id);

        return carRepository.save(car);
    }

    public Car delete(Long id) {
        Car car = findById(id);

        carRepository.delete(car);

        return car;
    }

    public List<Total> countCarOfBrand() {
        return carRepository.countCarOfBrand();
    }

    @Override
    public String dataNotFoundMessage() {
        return "Car not found";
    }

    @Override
    public String dataAlreadyExistMessage() {
        return "Car already exist";
    }
}
