import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesChartHeaderComponent } from './expenses-chart-header.component';

describe('ExpensesChartHeaderComponent', () => {
  let component: ExpensesChartHeaderComponent;
  let fixture: ComponentFixture<ExpensesChartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesChartHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesChartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
