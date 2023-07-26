import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTransactionsComponent } from './list-of-transactions.component';

describe('ListOfTransactionsComponent', () => {
  let component: ListOfTransactionsComponent;
  let fixture: ComponentFixture<ListOfTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfTransactionsComponent],
    });
    fixture = TestBed.createComponent(ListOfTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
