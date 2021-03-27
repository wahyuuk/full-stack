import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from '../base/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  employeeGender: number[] = [];
  employeeCar: number[] = [];
  employeeAsset: number[] = [];
  countCompany: number[] = [];
  countBrand: number[] = [];

  pieChartType: ChartType = 'pie';
  pieChartColors = [
    {
      backgroundColor: [
        '#ffadad',
        '#ffd6a5',
        '#fdffb6',
        '#caffbf',
        '#a0c4ff',
        '#bdb2ff',
        '#ffc6ff',
        '#a8dadc'
      ],
    },
  ];

  employeeGenderLabel: Label[] = [];
  employeeCarLabel: Label[] = [];
  employeeAssetLabel: Label[] = [];
  countCompanyLabel: Label[] = [];
  countBrandLabel: Label[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.getGenderTotal();
    this.getCarTotal();
    this.getEmployeeAsset();
    this.getCountCompany();
    this.getCountBrand();
  }

  getGenderTotal() {
    this.chartService.countEmployeeGender().subscribe((data) => {
      data.forEach((chart) => {
        this.employeeGender.push(chart.total);
        this.employeeGenderLabel.push(chart.name);
      });
    });
  }

  getCarTotal() {
    this.chartService.countEmployeeCar().subscribe((data) => {
      data.forEach((chart) => {
        this.employeeCar.push(chart.total);
        this.employeeCarLabel.push(chart.name);
      });
    });
  }

  getEmployeeAsset() {
    this.chartService.countEmployeeAsset().subscribe((data) => {
      data.forEach((chart) => {
        this.employeeAsset.push(chart.total);
        this.employeeAssetLabel.push(chart.name);
      });
    });
  }

  getCountCompany() {
    this.chartService.countCompany().subscribe((data) => {
      data.forEach((chart) => {
        this.countCompany.push(chart.total);
        this.countCompanyLabel.push(chart.name);
      });
    });
  }

  getCountBrand() {
    this.chartService.countBrand().subscribe((data) => {
      data.forEach((chart) => {
        this.countBrand.push(chart.total);
        this.countBrandLabel.push(chart.name);
      });
    });
  }
}
