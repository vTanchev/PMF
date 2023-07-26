import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { KindType } from 'src/app/models/kind';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss'],
})
export class FilterTransactionsComponent implements OnInit {
  kindTypes: KindType[] = ['all', 'pmt', 'dep', 'fee'];

  transactions: Transaction[] | undefined;

  fromDate?: number;
  toDate?: number;
  kind?: KindType;

  @Input() set setTransactions(transactions: Transaction[] | undefined) {
    if (transactions) {
      this.transactions = transactions;
    }
  }

  @Output() filterEvent = new EventEmitter<Transaction[]>();

  constructor() {}

  ngOnInit(): void {}

  handleFromDateChange(event: any) {
    this.fromDate = new Date(event.value).getTime();
  }

  handleToDateChange(event: any) {
    this.fromDate = new Date(event.value).getTime();
  }

  handleKindChange({ value }: { value: KindType }) {
    this.kind = value;
  }

  handleFilterTransactions(event: any) {
    event.preventDefault();

    const chackKind = (kind: KindType): boolean => {
      if (!this.kind || this.kind === 'all' || this.kind === kind) {
        return true;
      } else {
        return false;
      }
    };

    const checkFromDate = (dateToMiliseconds: number): boolean => {
      if (!this.fromDate || this.fromDate >= dateToMiliseconds) {
        return true;
      } else {
        return false;
      }
    };

    const checkToDate = (dateToMiliseconds: number): boolean => {
      if (!this.toDate || this.toDate <= dateToMiliseconds) {
        return true;
      } else {
        return false;
      }
    };

    const filteredTransactions = this.transactions?.filter((transaction) => {
      const { kind, date } = transaction;
      const dateToMiliseconds = new Date(date).getTime();

      return (
        chackKind(kind) &&
        checkFromDate(dateToMiliseconds) &&
        checkToDate(dateToMiliseconds)
      );
    });

    this.filterEvent.emit(filteredTransactions);
  }

  handleClearSelections(event: any) {
    event.preventDefault();

    // this.fromDate = null;
    // this.toDate = null;
    // this.kind = null;
  }
}
