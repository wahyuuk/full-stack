import { Company } from "./company.model";

export interface Employee {
  id: number;
  name: string;
  gender: string;
  placeOfBirth: string;
  dateOfBirth: Date;
  address: string;
  phoneNumber: string;
  company: Company;
}