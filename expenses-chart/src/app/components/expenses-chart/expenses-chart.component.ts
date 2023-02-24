import { Component, OnInit } from '@angular/core';
import data from '@src/data/data.json';
import Utils from '@src/utils/Utils';

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.scss'],
})
export class ExpensesChartComponent implements OnInit {
  total = Utils.currency(this.totalCalc(data));

  constructor() {}

  ngOnInit() {
    console.log(this.total);
  }

  totalCalc(data: any[]): number {
    let total = 0;
    data.forEach((element) => {
      total = total + element.amount;
    });
    return total;
  }
}
