import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-chart-header',
  templateUrl: './expenses-chart-header.component.html',
  styleUrls: ['./expenses-chart-header.component.scss']
})
export class ExpensesChartHeaderComponent  implements OnInit{
  @Input() total!: string;

  constructor() { }

  ngOnInit(): void {

  }
}
