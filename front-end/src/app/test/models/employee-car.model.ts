import { Car } from "./car.model";
import { Employee } from "./employee.model";

export interface EmployeeCar {
  id: number;
  car: Car;
  employee: Employee
}