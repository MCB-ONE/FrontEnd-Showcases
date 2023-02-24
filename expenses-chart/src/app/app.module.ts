import { ExpensesChartComponent } from './components/expenses-chart/expenses-chart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpensesChartHeaderComponent } from './components/expenses-chart-header/expenses-chart-header.component';
import { ExpensesChartBodyComponent } from './components/expenses-chart-body/expenses-chart-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesChartComponent,
    ExpensesChartHeaderComponent,
    ExpensesChartBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
