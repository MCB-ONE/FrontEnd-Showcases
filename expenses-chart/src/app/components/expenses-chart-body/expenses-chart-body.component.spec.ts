import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesChartBodyComponent } from './expenses-chart-body.component';

describe('ExpensesChartBodyComponent', () => {
  let component: ExpensesChartBodyComponent;
  let fixture: ComponentFixture<ExpensesChartBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesChartBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesChartBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
