import { Component, Input, OnInit } from '@angular/core';
import Utils from '@src/utils/Utils';

@Component({
  selector: 'app-expenses-chart-body',
  templateUrl: './expenses-chart-body.component.html',
  styleUrls: ['./expenses-chart-body.component.scss']
})
export class ExpensesChartBodyComponent implements OnInit{
  @Input() total!: number;
  @Input() data!: any[];

  max:number = 0;

  ngOnInit(): void {
    this.max = Math.max.apply(Math, this.data.map(function(o) { return o.amount; }));
  }

  getHeight(amount: number){
    let percent = (amount/ this.max) * 100;
    let height = Math.round(percent).toString()+"%";
    return height;
  }

  getMaxBg(amount: number): boolean{
    if(this.max == amount){
     return true;
    }
    return  false;
  }

}
