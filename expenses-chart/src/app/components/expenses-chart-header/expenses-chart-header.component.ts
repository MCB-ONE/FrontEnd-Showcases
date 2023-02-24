import { Component, Input, OnInit } from '@angular/core';
import Utils from 'utils/Utils';
@Component({
  selector: 'app-expenses-chart-header',
  templateUrl: './expenses-chart-header.component.html',
  styleUrls: ['./expenses-chart-header.component.scss']
})
export class ExpensesChartHeaderComponent  implements OnInit{
  @Input() total!: number;
  totalCurrency!: string;
  constructor() { }

  ngOnInit(): void {
    this.totalCurrency = Utils.currency(this.total);
  }
}
